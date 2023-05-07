import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";


const initialState = {
    isAuth : false
};

export const createUserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
})

export const {} = createUserSlice.actions;
export default createUserSlice.reducer