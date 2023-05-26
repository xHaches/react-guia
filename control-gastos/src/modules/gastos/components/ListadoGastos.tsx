import { useSelector } from "react-redux"
import { RootState } from "../../shared/store/store"
import { Gasto } from "./Gasto";

export const ListadoGastos = () => {

  const { gastos } = useSelector((state: RootState) => state.gastos.value);


  return (
    // This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided.
    <div className="listado-gastos contenedor">
      <h2>{ gastos.length ? 'Gastos': 'No hay gastos aún' }</h2>
      {gastos.map((gasto) => {
        return <Gasto {...gasto} key={gasto.id} />
      })}
    </div>
  )
}

export default ListadoGastos