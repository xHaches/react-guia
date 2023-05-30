
import { useNavigate } from 'react-router-dom';
import CerrarBtn from '/img/cerrar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addGasto, setModalOpen, updateGasto } from '../../shared/store/gastos/gastosSlice';
import { RootState } from '../../shared/store/store';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { formatearFecha, generarId } from '../../../helpers';

export const Modal = () => {

  const navigate = useNavigate();

  const { modalOpen, gastoSeleccionadoEditar } = useSelector((state: RootState) => state.gastos.value);
  const dispatch = useDispatch();

  const {handleSubmit, formState: {errors}, reset, register, watch} = useForm({
    defaultValues: {
        nombre: gastoSeleccionadoEditar?.nombre ?? '',
        cantidad: gastoSeleccionadoEditar?.cantidad ?? 0,
        categoria: gastoSeleccionadoEditar?.categoria ?? ''
    }
  });

  useEffect(() => {
    if(!gastoSeleccionadoEditar) {
      return
    }
  }, [gastoSeleccionadoEditar])
  

  const [animarModal, setAnimarModal] = useState(false);

  const closeModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      dispatch(setModalOpen(false));
      navigate('/control-presupuesto');
    }, 500)
  }

  useEffect(() => {
    setTimeout(() => {
      setAnimarModal(modalOpen);
    }, 500)
  }, [modalOpen])

  const onsubmit = (data: any) => {
    if(gastoSeleccionadoEditar) {
      dispatch(updateGasto({
        ...data, 
        id: gastoSeleccionadoEditar.id,
        cantidad: Number(data.cantidad),
        fecha: Date.now()
      }));
      closeModal();
      return;
    }
    
    dispatch(addGasto({
        ...data, 
        id: generarId(),
        cantidad: Number(data.cantidad),
        fecha: Date.now()
      }
    ));
    closeModal();
  }
  

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={closeModal} />
      </div>

      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`} onSubmit={handleSubmit(onsubmit)}>
        <legend>{gastoSeleccionadoEditar ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
        <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label>
            <input
              type="text"
              className="nuevo-presupuesto"
              {...register("nombre", {
                  minLength: 3,
                  maxLength: 50,
                  required: true
              })}
              placeholder="Añade el Nombre del Gasto"
            />
        </div>
        <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input
              type="text"
              className="nuevo-presupuesto"
              {...register("cantidad", {
                min: 1,
                max: 999999,
                pattern: /^[1-9][0-9]*$/,
                required: true
              })}
              placeholder="Añade la cantidad del gasto ej. 300"
            />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            {...register("categoria", {
              required: true
            })}
          >
            <option value=""> -- Seleccione -- </option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <Button type="submit" fullWidth variant="contained" sx={{marginTop: '10px'}}>
          {gastoSeleccionadoEditar ? 'Guardar Cambios' : 'Añadir Gasto'}
        </Button>

      </form>
    </div>
  )
}

export default Modal