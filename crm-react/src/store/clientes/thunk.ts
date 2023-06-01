import { removeCliente, updateCliente, createCliente, getAllClientes } from "../../gql/queries/cliente";
import { ICliente } from "../../interfaces/cliente.interface";
import { RootState } from "../store";
import { createClienteState, removeClienteState, setClientes, updateClienteState } from "./clientesSlice";

export const startSetClientes = (): any => {
    return async (dispatch: any, getState: () => RootState   ) => {
        const res = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: getAllClientes()
            })
        });
        const clientes = await res.json();
        
        dispatch(setClientes(clientes.data.allClientes));
    }
};

export const startCrearCliente = (cliente: ICliente): any => {
    return async (dispatch: any, getState: () => RootState   ) => {
        const res = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: createCliente(cliente)
            })
        });
        const clientes = await res.json();
        
        dispatch(createClienteState(clientes.data.createCliente));
    }
};
export const startUpdateCliente = (cliente: ICliente): any => {
    return async (dispatch: any, getState: () => RootState   ) => {
        const res = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: updateCliente(cliente)
            })
        });
        const clientes = await res.json();
        
        dispatch(updateClienteState(clientes.data.updateCliente));
    }
};

export const startDeleteCliente = (id: number): any => {
    return async (dispatch: any, getState: () => RootState   ) => {
        const res = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: removeCliente(id)
            })
        });
        const cliente = await res.json();
        
        dispatch(removeClienteState(cliente.data.removeCliente.id));
    }
};
