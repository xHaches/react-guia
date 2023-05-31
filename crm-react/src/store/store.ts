import { configureStore } from "@reduxjs/toolkit";
import { clientesSlice } from "./clientes/clientesSlice";


export const store = configureStore({
    reducer: {
        clientes: clientesSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;