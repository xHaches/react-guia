import { Button } from '@mui/material'
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import Mensaje from './Mensaje';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPresupuesto, setPresupuestoValido } from '../../shared/store/gastos/gastosSlice';

const NuevoPresupuesto = () => {

    const [mensaje, setMensaje] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {handleSubmit, formState: {errors}, reset, register, watch} = useForm({
        defaultValues: {
            presupuesto: 0
        }
    });

    useEffect(() => {
        const subscription = watch(({presupuesto}) => presupuesto);
        return () => subscription.unsubscribe();
    }, [watch])

    useEffect(() => {
        switch (errors.presupuesto?.type) {
            case 'min':
                dispatch(setPresupuestoValido(false));
                return setMensaje('Debe ser un presupuesto mayor a 0');
            case 'required':
                dispatch(setPresupuestoValido(false));
                return setMensaje('El presupuesto es requrido');
            case 'max':
                dispatch(setPresupuestoValido(false));
                return setMensaje('Debe ser un presupuesto menor o igual a 999999');
            case 'pattern':
                dispatch(setPresupuestoValido(false));
                return setMensaje('No es un presupuesto válido');
            default:
                return setMensaje('');
        }
    }, [errors.presupuesto?.type])


    const onSubmit = (data: any) => {
        dispatch(setPresupuesto(data.presupuesto));
        dispatch(setPresupuestoValido(true));
        navigate('control-presupuesto');
      };

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                <div className="campo">
                    <label>Definir presupuesto</label>
                    <input
                        type="text"
                        className="nuevo-presupuesto"
                        {...register("presupuesto", {
                            min: 1,
                            max: 999999,
                            pattern: /^[1-9][0-9]*$/,
                            required: true
                        })}
                        placeholder="Añade tu presupuesto"
                        />
                </div>
                <Button type="submit" fullWidth variant="contained" sx={{marginTop: '10px'}}>Añadir</Button>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto