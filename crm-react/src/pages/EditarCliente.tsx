import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClienteById } from "../gql/queries/cliente";
import ErrorPage from "../components/ErrorPage";
import Formulario from "../components/Formulario";

const EditarCliente = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [cliente, setCliente] = useState();

    const getCliente = async (id :number) => {
        const res = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: getClienteById(id)
            })
        });
        const {data} = await res.json();

        setCliente(data.Cliente);
    }

    useEffect(() => {
        getCliente(+id!);
    }, [])
    

    return (
        <>
            {
                !cliente ? <ErrorPage/> : (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

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