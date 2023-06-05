import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FIND_CLIENTE_BY_ID_QUERY} from "../gql/queries/cliente";
import ErrorPage from "../components/ErrorPage";
import Formulario from "../components/Formulario";
import { useQuery } from '@apollo/client';

const EditarCliente = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [cliente, setCliente] = useState();

    const { data, error, loading } = useQuery(FIND_CLIENTE_BY_ID_QUERY, {variables: {id}});

    useEffect(() => {
        if(data) {
            setCliente(data.Cliente);
        }
    }, [data])

    return (
        <>
            {
                !cliente ? <ErrorPage/> : (
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">Llena todos los campos para editar un cliente</p>

            <div className="flex justify-end">
                <button
                className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                onClick={() => navigate(-1)}
                >
                Volver
                </button>
            </div>

            <div className="bg-white shadow dounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                <Formulario cliente={cliente}  />
            </div>
            </>
        )
            }
        </>
    )
}

export default EditarCliente