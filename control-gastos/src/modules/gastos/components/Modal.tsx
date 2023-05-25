
import { useNavigate } from 'react-router-dom';
import CerrarBtn from '/img/cerrar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen } from '../../shared/store/gastos/gastosSlice';
import { RootState } from '../../shared/store/store';
import { useEffect, useState } from 'react';

export const Modal = () => {

  const navigate = useNavigate();

  const { modalOpen } = useSelector((state: RootState) => state.gastos.value);

  const [animarModal, setAnimarModal] = useState(false);
  const dispatch = useDispatch();

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
  

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={closeModal} />
      </div>

      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  )
}

export default Modal