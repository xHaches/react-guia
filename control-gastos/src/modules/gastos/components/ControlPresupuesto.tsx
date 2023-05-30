import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../shared/store/store"
import { useEffect, useMemo } from "react";
import { formatearAMoneda } from "../../../helpers";
import { resetGastos, setDisponible, setGastado, setPorcentajePresupuesto } from "../../shared/store/gastos/gastosSlice";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";

const ControlPresupuesto = () => {

    const { presupuesto, gastos, disponible, gastado, porcentajePresupuesto, presupuestoValido } = useSelector((state: RootState) => state.gastos.value);

    const dispatch = useDispatch();

    const navigator = useNavigate();

    useEffect(() => {
        const totalGastado = gastos.reduce((acc, gasto) => gasto.cantidad + acc,0)
        const totalDisponible = presupuesto - totalGastado;
        // Calcular el porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

        dispatch(setGastado(totalGastado));
        dispatch(setDisponible(totalDisponible));
        setTimeout(() => {
            dispatch(setPorcentajePresupuesto(nuevoPorcentaje));
        }, 500);
    }, [gastos, porcentajePresupuesto])

    useEffect(() => {
        if(!presupuestoValido) {
            return navigator(routes[0].to);
        }
    }, [presupuestoValido])
    
    

    const presupuestoCurr = useMemo(() => formatearAMoneda(presupuesto), [presupuesto, gastos])
    const disponibleCurr = useMemo(() => formatearAMoneda(disponible), [disponible, gastos])
    const gastadoCurr = useMemo(() => formatearAMoneda(gastado), [gastado, gastos])

    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');
        if(resultado) {
            return;
        }
        dispatch(resetGastos());
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentajePresupuesto > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentajePresupuesto > 100 ? '#DC2626' : '#3B82F6'
                    })}
                    value={porcentajePresupuesto}
                    text={`${porcentajePresupuesto}% Gastado`}
                />
            </div>
            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={handleResetApp}>
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto: </span> {presupuestoCurr}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span> {disponibleCurr}
                </p>
                <p>
                    <span>Gastado: </span> {gastadoCurr}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto