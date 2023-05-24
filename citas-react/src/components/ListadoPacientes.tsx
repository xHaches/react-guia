import { Grid, Typography } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paciente as IPaciente } from "../interfaces/paciente.interface";
import { initPacientes } from "../store/pacientes/pacientesSlice";
import { RootState } from "../store/store";
import { Paciente } from "./Paciente"

const ListadoPacientes = () => {

  const { value: {pacientes} } = useSelector((state: RootState) => state.pacientes);

  return (
    <Grid container columns={12} justifyContent="center">
        <Grid item justifyContent="center">
          <Typography variant="h1" color="initial">
              Listado pacientes  {' '}
          </Typography>
          <Typography variant="body2" mt="0.5rem">
              Administra tus {' '}
            <Typography variant="body1" color="blue" 
                sx={{
                  fontWeight: 600
              }}>
              Pacientes y citas
            </Typography>
          </Typography>
        </Grid>
        <Grid container justifyContent="center" sx={{
          overflowY: {md: 'scroll'}, 
          height: {md: '75vh'}
          }}
        >
          {
            pacientes && pacientes.length ?
            pacientes.map(paciente => <Paciente {...paciente} key={paciente.id} />) :
            <Typography variant="h1" mt="0.5rem">
              No hay pacientes, comienza agregando pacientes
              <Typography color="blue" 
                  sx={{
                    fontSize: 30,
                    fontWeight: 800
                }}>
                {''} y aparecerán en este lugar
              </Typography>
            </Typography>
          }
          
        </Grid>
    </Grid>
  )
}

export default ListadoPacientes