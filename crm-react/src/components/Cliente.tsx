import { useNavigate } from "react-router-dom";
import { ICliente } from "../interfaces/cliente.interface"
import { useDispatch } from "react-redux";
import { startDeleteCliente } from "../store/clientes/thunk";

const Cliente = ({cliente}: {cliente: ICliente}) => {

    const {nombre, empresa, email, telefono, id} = cliente;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const removeCliente = (id: number) => {
        
        dispatch(startDeleteCliente(id))
    }

    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2cl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className="p-6">
                <p className="text-grar-600">
                    <span className="text-grar-800 uppercase font-bold">Email: </span>{email}
                </p>
                    <span className="text-grar-800 uppercase font-bold">Tel: </span>{telefono}
            </td>
            <td className="p-6 flex gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`clientes/${id}/editar`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                    onClick={() => removeCliente(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cliente