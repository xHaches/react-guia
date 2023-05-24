import { createSlice } from '@reduxjs/toolkit'
import { Paciente } from '../../interfaces/paciente.interface';
import { RootState } from '../store';


interface pacientesState {
    value: {
        pacientes: Paciente[],
        selected?: Paciente
    }
};

const initialState: pacientesState = {
    value: {
        pacientes: []
    }
}

export const pacientesSlice = createSlice({
    name: 'pacientes',
    initialState,
    reducers: {
        initPacientes: (state, action) => {
            state.value.pacientes = action.payload;
        },
        addNewPaciente: (state, action) => {
            state.value.pacientes.push(action.payload);
        },
        setPacienteSelected: (state, action) => {
            state.value.selected = action.payload;
        },
        editPaciente: (state, action) => {
            state.value.pacientes = state.value.pacientes.map(paciente => {
                state.value.selected = undefined;
                if(paciente.id === action.payload.id) {
                    return action.payload;
                }
                return paciente;
            });
        },
        deletePaciente: (state, action) => {
            state.value.selected = undefined;
            state.value.pacientes = state.value.pacientes.filter(paciente => {
                return paciente.id === action.payload.id;
            });
        }
    }
})

export const {
    addNewPaciente,
    editPaciente,
    setPacienteSelected,
    deletePaciente,
    initPacientes
} = pacientesSlice.actions;
export const selectPacientes = (state: RootState) => state.pacientes.value;