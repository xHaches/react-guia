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
        }
    }
})

export const {
    setClientes
} = clientesSlice.actions;
export const selectClientes = (state: RootState) => state.clientes;