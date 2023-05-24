import { configureStore } from "@reduxjs/toolkit";
import { pacientesSlice } from "./pacientes/pacientesSlice";


export const store = configureStore({
    reducer: {
        pacientes: pacientesSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;