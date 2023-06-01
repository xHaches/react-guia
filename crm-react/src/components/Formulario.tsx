import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ICliente } from "../interfaces/cliente.interface"
import { startCrearCliente, startUpdateCliente } from "../store/clientes/thunk";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Formulario = ({cliente}: {cliente?: ICliente}) => {

    const [mensaje, setMensaje] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        defaultValues: {
            ...cliente
        }
    });

    const onSubmit = async (data: any) => {
        if(cliente) {
            dispatch(startUpdateCliente(data));
            navigate(-1);
            return;
        }
        dispatch(startCrearCliente(data));
        navigate(-1);

        reset();
    }

    useEffect(() => {
        switch (errors.nombre?.type) {
            case 'required':
                return setMensaje('El presupuesto es requrido');
            default:
                return setMensaje('');
        }
    }, [errors])

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Cliente"
                    {...register("nombre", { required: true })}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="empresa"
                >Empresa:</label>
                <input 
                    id="empresa"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Empresa del Cliente"
                    {...register("empresa", { required: true })}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del Cliente"
                    {...register("email", { required: true })}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del Cliente"
                    {...register("telefono", { required: true })}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    id="notas"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notas del Cliente"
                    {...register("notas", { required: true })}
                />
            </div>
            <button
                type="submit"
                className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            >
                {cliente ?  'Editar Cliente' : 'Registrar Cliente'}
            </button>
            {mensaje && <h1>{mensaje}</h1>}
        </form>
    )
}

export default Formulario