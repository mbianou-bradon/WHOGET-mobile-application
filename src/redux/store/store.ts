import { configureStore } from '@reduxjs/toolkit';
import { createUserSlice } from '../features/createUserSlice';

export const store = configureStore({
    reducer:{
        userReducer : createUserSlice.reducer,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;