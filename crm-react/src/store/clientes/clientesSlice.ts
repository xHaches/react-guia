import { createSlice } from '@reduxjs/toolkit'
import { ICliente } from '../../interfaces/cliente.interface';
import { RootState } from '../store';



interface clientesState {
    value: {
        clientes: ICliente[]
    }
}

const initialState: clientesState = {
    value: {
        clientes: [],
    }
}

export const clientesSlice = createSlice({
    name: 'clientes',
    initialState,
    reducers: {
        setClientes: (state, action) => {
            state.value.clientes = action.payload;
        },
        createClienteState: (state, action) => {
            state.value.clientes.push(action.payload);
        },
        updateClienteState: (state, action) => {
            state.value.clientes = state.value.clientes.map(cliente => {
                if(cliente.id === action.payload.id) {
                    return action.payload;
                }
                return cliente;
            })
        },
        removeClienteState: (state, action) => {
            state.value.clientes = state.value.clientes.filter(cliente => cliente.id !== action.payload);
        }
    }
})

export const {
    setClientes,
    createClienteState,
    updateClienteState,
    removeClienteState
} = clientesSlice.actions;
export const selectClientes = (state: RootState) => state.clientes;