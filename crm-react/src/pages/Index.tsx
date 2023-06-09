import { useQuery } from "@apollo/client/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cliente from "../components/Cliente";
import { GET_ALL_CLIENTES_QUERY } from "../gql/queries/cliente";
import { setClientes } from "../store/clientes/clientesSlice";
import { RootState } from "../store/store";

export const Index = () => {

  const dispatch = useDispatch();

  const { data, error, loading } = useQuery(GET_ALL_CLIENTES_QUERY);

  useEffect(() => {
    if(data) {
      dispatch(setClientes(data.allClientes));
    }
  }, [data]);


  const { clientes } = useSelector((state: RootState) => state.clientes.value)
  

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      {
        clientes.length ? (
          <table className='w-full bg-white shadow mt-5 table-auto'>
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-2">Cliente</th>
                <th className="p-2">Contacto</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                clientes.map((cliente) => (
                  <Cliente key={cliente.id} cliente={cliente} />
                ))
              }
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-10">
            No hay Clientes aún
          </p>
        )
      }
    </>
  )
}

export default Index