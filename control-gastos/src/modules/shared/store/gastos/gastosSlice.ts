import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';


interface gastosState {
    value: {
        presupuesto: number,
        presupuestoValido: boolean,
        modalOpen: boolean
    }
}

const initialState: gastosState = {
    value: {
        presupuesto: 0,
        presupuestoValido: false,
        modalOpen: false
    }
}

export const gastosSlice = createSlice({
    name: 'gastos',
    initialState,
    reducers: {
        setPresupuesto: (state, action) => {
            state.value.presupuesto = action.payload;
        },
        setPresupuestoValido: (state, action) => {
            state.value.presupuestoValido = action.payload;
        },
        setModalOpen: (state, action) => {
            state.value.modalOpen = action.payload;
        }
    }
})

export const {
    setPresupuesto,
    setPresupuestoValido,
    setModalOpen
} = gastosSlice.actions;
export const selectGastos = (state: RootState) => state.gastos;