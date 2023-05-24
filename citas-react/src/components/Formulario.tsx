import { Typography, TextField, Button, InputAdornment } from "@mui/material"
import { Grid } from "@mui/material"
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/Formulario.module.scss';
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPaciente, editPaciente } from "../store/pacientes/pacientesSlice";
import { RootState } from "../store/store";
import { useEffect } from "react";

const Formulario = () => {

  const dispatch = useDispatch();

  const { selected } = useSelector((state: RootState) => state.pacientes.value);

  const {handleSubmit, formState: {errors}, control, reset, setValue} = useForm({
    defaultValues: {
      nombre: 'Perrhijo',
      propietario: 'Luis',
      email: 'email@email.com',
      fechaAlta: new Date().toISOString().split('T')[0],
      sintomas: ''
    },
  });

  useEffect(() => {
    if(!selected) {
      reset({
        nombre: '',
        propietario: '',
        email: '',
        fechaAlta: '',
        sintomas: ''
      })
      return;
    }
    setValue('nombre', selected.nombre);
    setValue('propietario', selected.propietario);
    setValue('fechaAlta', selected.fechaAlta);
    setValue('email', selected.email);
    setValue('sintomas', selected.sintomas);
  
  }, [selected]);
  

  const onSubmit = (data: any) => {
    reset({
      nombre: '',
      propietario: '',
      email: '',
      fechaAlta: '',
      sintomas: ''
    })
    if(selected) {
      dispatch(editPaciente({id: selected.id, ...data}));
      return;
    }
    dispatch(addNewPaciente({id: Date.now().toString(36).substring(2), ...data}));
  };
  
  

  return (
    <Grid container columns={12} justifyContent="center" maxHeight="75vh" className={styles['my-1']}>
      <Grid item textAlign="center">
        <Typography variant="h1" color="initial">
            Seguimiento Pacientes {' '}
        </Typography>
        <Typography variant="body2" mt="0.5rem">
            Añade Pacientes y {' '}
          <Typography variant="body1" color="blue" 
              sx={{
                fontWeight: 600
            }}>
            Administralos
          </Typography>
        </Typography>
      </Grid>
      <Grid container
        columns={12} 
        justifyContent="center" 
        bgcolor="white" 
        padding="20px" 
        width="80%" 
        borderRadius="10px" 
        className={styles['mt-3']}
      >
          <form 
            style={{
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around'
            }}
            onSubmit={handleSubmit(onSubmit)}
            // esconder el tooltip de validacion de email
            noValidate
          >
            <Controller 
              name="nombre"
              control={control}
              rules={{
                required: 'Errorsillo todo precioso'
              }}
              render={({field, fieldState, formState}) => 
                <TextField
                  {...field}
                  error={!!errors.nombre}
                  variant="outlined"
                  label="Nombre Mascota"
                  placeholder="Nombre de la mascota"
                  helperText={errors?.nombre?.message}
                  fullWidth
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><PetsIcon /></InputAdornment>
                  }}
                />
              }
            />
            <Controller 
              name="propietario"
              control={control}
              rules={{
                required: 'Errorsillo todo precioso'
              }}
              render={({field, fieldState, formState}) => 
                <TextField 
                  {...field}
                  error={!!errors.propietario}
                  variant="outlined"
                  label="Nombre Propietario"
                  placeholder="Nombre del propietario"
                  fullWidth
                  helperText={errors?.propietario?.message}
                  className={styles['mt-2']}
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><PersonIcon /></InputAdornment>
                  }}
                />
              }
            />
            <Controller 
              name="email"
              control={control}
              rules={{
                required: 'Errorsillo todo precioso'
              }}
              render={({field, fieldState, formState}) => 
                <TextField 
                  {...field}
                  error={!!errors.email}
                  variant="outlined"
                  label="email"
                  placeholder="Email contacto propietario"
                  helperText={errors?.email?.message}
                  fullWidth
                  type="email"
                  className={styles['mt-2']}
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><AlternateEmailIcon /></InputAdornment>
                  }}
                />
              }
            />
            <Controller 
              name="fechaAlta"
              control={control}
              rules={{
                required: 'Errorsillo todo precioso'
              }}
              render={({field, fieldState, formState}) => 
                <TextField 
                  {...field}
                  helperText={errors?.fechaAlta?.message}
                  error={!!errors.fechaAlta}
                  variant="outlined"
                  fullWidth
                  type="date"
                  className={styles['mt-2']}
                />
              }
            />
            <Controller 
              name="sintomas"
              control={control}
              rules={{
                required: 'Errorsillo todo precioso'
              }}
              render={({field, fieldState, formState}) => 
                <TextField 
                  {...field}
                  helperText={errors?.sintomas?.message}
                  placeholder="Síntomas de la mascota"
                  error={!!errors.sintomas}
                  variant="outlined"
                  multiline
                  fullWidth
                  type="text"
                  rows={4}
                  className={styles['mt-2']}
                />
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={styles['mt-2']}
            >Agregar Paciente</Button>
          </form>
      </Grid>
    </Grid>
  )
}

export default Formulario