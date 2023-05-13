import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface userState {
    isAuth : boolean
}


const initialState : userState = {
    isAuth : false
};

export const createUserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        globalAuth: (state, action:PayloadAction<boolean>) =>{
            state.isAuth = action.payload
        }
    },
})

export const { globalAuth } = createUserSlice.actions;
export default createUserSlice.reducer