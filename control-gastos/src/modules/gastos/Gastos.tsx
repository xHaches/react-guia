import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header"
import IconoNuevoGasto from '/img/nuevo-gasto.svg';
import { RootState } from "../shared/store/store";
import { useNavigate } from "react-router-dom";
import { setModalOpen } from "../shared/store/gastos/gastosSlice";
import ListadoGastos from "./components/ListadoGastos";

export const Gastos = () => {

  const { presupuestoValido, modalOpen } = useSelector((state: RootState) => state.gastos.value);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNuevogasto = () => {
    dispatch(setModalOpen(true));
    navigate('/modal');
  }

  return (
    <div className={modalOpen ? 'fijar' : ''}>
      <Header />
      {
        presupuestoValido && (
          <main>
            <ListadoGastos />
          </main>
        )
      }
      {
        presupuestoValido && !modalOpen && (
          <>
            <div className="nuevo-gasto">
              <img 
                src={ IconoNuevoGasto }
                alt="icono nuvo gasto" 
                onClick={handleNuevogasto}
              />
            </div>
          </>
        )
      }
    </div>
  )
}

export default Gastos