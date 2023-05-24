import { useEffect } from 'react'
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Formulario from "./Formulario";
import Header from "./Header";
import ListadoPacientes from "./ListadoPacientes";
import { initPacientes, setPacienteSelected } from '../store/pacientes/pacientesSlice';

const Layout = () => {

    const dispatch = useDispatch()

    const { pacientes, selected } = useSelector((state: RootState) => state.pacientes.value);

    useEffect(() => {
        const obtenerLS = (term: 'pacientes' | 'selected') => {
            return JSON.parse(localStorage.getItem(term) + '');
        }
        const pacientesLS = obtenerLS('pacientes');
        const selectedLS = obtenerLS('selected');
        if(pacientesLS.length) {
            dispatch(initPacientes(pacientesLS));
        }
        if(selectedLS) {
            dispatch(setPacienteSelected(selectedLS));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [pacientes])

    useEffect(() => {
        localStorage.setItem('selected', JSON.stringify(selected));
    }, [selected])

    return (
        <Grid container item mt="5rem" xs="auto" columns={12}>
            <Header />
            <Grid container columns={12} mt="1.5rem" justifyContent="center">
            <Grid item md={6}>
                <Formulario />
            </Grid>
            <Grid item md={6} sx={{marginTop: {xs: '1rem'}}}>
                <ListadoPacientes />
            </Grid>
            </Grid>
        </Grid>
    )
}

export default Layout