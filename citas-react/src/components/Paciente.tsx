import { Button, Grid, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { Paciente as IPaciente } from "../interfaces/paciente.interface";
import { setPacienteSelected, deletePaciente as deletePacienteState } from "../store/pacientes/pacientesSlice";
import styles from '../styles/Formulario.module.scss';

export const Paciente = ({nombre, propietario, email, fechaAlta, sintomas, id}: IPaciente) => {

  const dispatch = useDispatch();

  const selectPaciente = (paciente: IPaciente) => {
    dispatch(setPacienteSelected(paciente));
  }

  const deletePaciente = (id: string) => {
    dispatch(deletePacienteState(id));
  }

  return (
    <Grid 
      item
      bgcolor="white"
      padding="20px"
      width="80%"
      borderRadius="10px"
      className={styles['my-1']}
      sx={{
        maxHeight: {md: '23vh'}
      }}
    >
      <Grid>
      <Typography variant="body2" sx={{fontWeight: 900, fontSize: 20}}>
          Nombre: {' '}
          <Typography variant="body1" sx={{fontWeight: 400, fontSize: 20}}>
            {nombre}
          </Typography>
        </Typography>
        <Typography variant="body2" sx={{fontWeight: 900, fontSize: 20}}>
          Propietario: {' '}
          <Typography variant="body1" sx={{fontWeight: 400, fontSize: 20}}>
            {propietario}
          </Typography>
        </Typography>
        <Typography variant="body2" sx={{fontWeight: 900, fontSize: 20}}>
          Email: {' '}
          <Typography variant="body1" sx={{fontWeight: 400, fontSize: 20}}>
            {email}
          </Typography>
        </Typography>
        <Typography variant="body2" sx={{fontWeight: 900, fontSize: 20}}>
          Fecha Alta: {' '}
          <Typography variant="body1" sx={{fontWeight: 400, fontSize: 20}}>
            {fechaAlta}
          </Typography>
        </Typography>
        <Typography variant="body2" sx={{fontWeight: 900, fontSize: 20}}>
          Síntomas: {' '}
          <Typography variant="body1" sx={{fontWeight: 400, fontSize: 20}}>
            {sintomas}
          </Typography>
        </Typography>
        <Grid container justifyContent="space-between">
          <Button variant="contained" onClick={() => selectPaciente(
            {nombre, propietario, email, fechaAlta, sintomas, id}
            )}
          >Editar</Button>
          <Button variant="contained" color="error" onClick={() => deletePaciente(id)}>Eliminar</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Paciente