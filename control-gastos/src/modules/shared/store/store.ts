import { configureStore } from "@reduxjs/toolkit";
import { gastosSlice } from "./gastos/gastosSlice";


export const store = configureStore({
    reducer: {
        gastos: gastosSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;