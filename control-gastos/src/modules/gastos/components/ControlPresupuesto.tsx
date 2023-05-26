import { useSelector } from "react-redux"
import { RootState } from "../../shared/store/store"
import { useMemo } from "react";

const ControlPresupuesto = () => {

    const { presupuesto } = useSelector((state: RootState) => state.gastos.value);

    const presupuestoCurr = useMemo(() => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(presupuesto);
    }, [presupuesto])

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {presupuestoCurr}
                </p>
                <p>
                    <span>Disponible: </span> {"0.00"}
                </p>
                <p>
                    <span>Gastado: </span> {"0.00"}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto