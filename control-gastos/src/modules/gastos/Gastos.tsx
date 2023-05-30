import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header"
import IconoNuevoGasto from '/img/nuevo-gasto.svg';
import { RootState } from "../shared/store/store";
import { useNavigate } from "react-router-dom";
import { addGasto, setModalOpen, setPresupuesto, setPresupuestoValido } from "../shared/store/gastos/gastosSlice";
import ListadoGastos from "./components/ListadoGastos";
import { useEffect } from "react";
import { routes } from "./routes/routes";
import { Gasto } from "../../interfaces/gasto.interface";
import Filtros from "./components/Filtros";

export const Gastos = () => {

  const { presupuestoValido, modalOpen, presupuesto, gastos } = useSelector((state: RootState) => state.gastos.value);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNuevogasto = () => {
    dispatch(setModalOpen(true));
    navigate('/modal');
  }

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto'));
    
    if(!isNaN(presupuestoLS) && (presupuestoLS > 0) ) {
      dispatch(setPresupuesto(presupuestoLS));
      return;
    }
    localStorage.setItem('presupuesto', String(presupuesto) ?? 0);
  }, [presupuesto]);
    
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto') ?? 0);
    if(presupuestoLS > 0) {
      dispatch(setPresupuestoValido(true));
      navigate(routes[1].to)
    }
  }, []);

  useEffect(() => {
    const gastosLS = JSON.parse(localStorage.getItem('gastos') || '[]');
    if(!gastosLS.length) {
      return;
    }
    gastosLS.map((gasto: Gasto) => dispatch(addGasto(gasto)));
  }, [])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos])
  
  

  return (
    <div className={modalOpen ? 'fijar' : ''}>
      <Header />
      {
        presupuestoValido && (
          <main>
            <Filtros />
            <ListadoGastos />
          </main>
        )
      }
      {
        presupuestoValido && (
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