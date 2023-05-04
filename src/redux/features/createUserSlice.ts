import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";


const initialState = {
    exerciseData: []
};

export const createUserSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {},
})

export const {} = createUserSlice.actions;
export default createUserSlice.reducer