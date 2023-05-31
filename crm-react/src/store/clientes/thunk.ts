import { ICliente } from "../../interfaces/cliente.interface";
import { RootState } from "../store";
import { setClientes } from "./clientesSlice";

export const startSetClientes = (): any => {
    return async (dispatch: any, getState: () => RootState   ) => {
        const clientes = await new Promise<ICliente[]>((resolve, reject) => {
            resolve([
                {
                    id: 1,
                    nombre: 'Juan',
                    telefono: 102013313,
                    email: "juan@juan.com",
                    empresa: 'Codigo Con Juan'
                },
                {
                    id: 2,
                    nombre: 'Karen',
                    telefono: 138198313,
                    email: "karen@juan.com",
                    empresa: 'Codigo Con Juan'
                },
                {
                    id: 3,
                    nombre: 'Josue',
                    telefono: 31983913,
                    email: "josue@juan.com",
                    empresa: 'Codigo Con Juan'
                },
                {
                    id: 4,
                    nombre: 'Miguel',
                    telefono: 319381983,
                    email: "miguel@juan.com",
                    empresa: 'Codigo Con Juan'
                },
                {
                    id: 5,
                    nombre: 'Pedro',
                    telefono: 1398198938,
                    email: "pedro@juan.com",
                    empresa: 'Codigo Con Juan'
                },
            ])
        });
        dispatch(setClientes(clientes));
    }
};