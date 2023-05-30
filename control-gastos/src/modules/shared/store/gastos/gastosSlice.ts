import { createSlice } from '@reduxjs/toolkit'
import { Gasto } from '../../../../interfaces/gasto.interface';
import { RootState } from '../store';


interface gastosState {
    value: {
        presupuesto: number,
        disponible: 0,
        gastado: 0,
        presupuestoValido: boolean,
        modalOpen: boolean,
        gastos: Gasto[],
        gastoSeleccionadoEditar: Gasto | null,
        porcentajePresupuesto: number,
        filtro: string
    }
}

const initialState: gastosState = {
    value: {
        presupuesto: 0,
        disponible: 0,
        gastado: 0,
        presupuestoValido: false,
        modalOpen: false,
        gastos: [],
        gastoSeleccionadoEditar: null,
        porcentajePresupuesto: 0,
        filtro: ''
    }
}

export const gastosSlice = createSlice({
    name: 'gastos',
    initialState,
    reducers: {
        setPresupuesto: (state, action) => {
            state.value.presupuesto = action.payload;
        },
        setDisponible: (state, action) => {
            state.value.disponible = action.payload
        },
        setGastado: (state, action) => {
            state.value.gastado = action.payload
        },
        setPresupuestoValido: (state, action) => {
            state.value.presupuestoValido = action.payload;
        },
        setModalOpen: (state, action) => {
            state.value.modalOpen = action.payload;
        },
        addGasto: (state, action) => {
            state.value.gastos.push(action.payload);
        },
        resetGastos: (state) => {
            state.value.gastos = [];
        },
        selectEditarGasto: (state, action) => {
            state.value.gastoSeleccionadoEditar = action.payload;
        },
        updateGasto: (state, action) => {
            state.value.gastos = state.value.gastos.map((gasto) => {
                if(gasto.id === action.payload.id) {
                    return action.payload;
                }
                return gasto;
            });
            state.value.gastoSeleccionadoEditar = null;
        },
        eliminarGasto: (state, action) => {
            state.value.gastos = state.value.gastos.filter(gasto => gasto.id !== action.payload);
        },
        setPorcentajePresupuesto: (state, action) => {
            state.value.porcentajePresupuesto = action.payload;
        },
        setFiltro: (state, action) => {
            state.value.filtro = action.payload;
        }
    }
})

export const {
    setPresupuesto,
    setDisponible,
    setGastado,
    setPresupuestoValido,
    setModalOpen,
    addGasto,
    selectEditarGasto,
    updateGasto,
    eliminarGasto,
    setPorcentajePresupuesto,
    setFiltro,
    resetGastos
} = gastosSlice.actions;
export const selectGastos = (state: RootState) => state.gastos;