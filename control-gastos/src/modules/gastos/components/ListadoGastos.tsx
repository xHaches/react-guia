import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux"
import { RootState } from "../../shared/store/store"
import { Gasto } from "./Gasto";

export const ListadoGastos = () => {

  const { gastos, filtro } = useSelector((state: RootState) => state.gastos.value);

  const gastosFiltrados = useMemo(() => {
    return gastos.filter(gasto => {
      if(!filtro) {
        return true;
      }
      return gasto.categoria === filtro;
    }) 
  }, [filtro, gastos])
  

  return (
    // This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided.
    <div className="listado-gastos contenedor">
      <h2>{ gastosFiltrados.length ? 'Gastos': 'No hay gastos aún' }</h2>
      {gastosFiltrados.map((gasto) => {
        return <Gasto {...gasto} key={gasto.id} />
      })}
    </div>
  )
}

export default ListadoGastos