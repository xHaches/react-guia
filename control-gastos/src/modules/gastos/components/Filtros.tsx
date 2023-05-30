import { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFiltro } from '../../shared/store/gastos/gastosSlice';
import { RootState } from '../../shared/store/store';

export const Filtros = () => {

    const { filtro } = useSelector((state: RootState) => state.gastos.value);
    const dispatch = useDispatch();

    const selectFiltro = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFiltro(e.currentTarget.value));
    };

    useEffect(() => {
    }, [])
    
    return (
        <div className="filtros sombra contenedor">
            <form className="campo">
                <label>Filtrar Gastos</label>
                <select
                    value={filtro}
                    onChange={(e) => selectFiltro(e)}
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
            </form>
        </div>
    )
}

export default Filtros