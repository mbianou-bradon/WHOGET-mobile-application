import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { UserType } from "../../../dataType";

interface userState {
    isAuth : boolean,
    currentUser :UserType,
    newUser :  UserType
}


const initialState : userState = {
    isAuth : false,
    currentUser: {
        username: "",
        profileImage: "",
        age: 0,
        town: "",
        country: "",
        category: [],
        phoneNumber: "",
        userWhatsapp: "",
        email:"",
        strikes :0,
        ban: false,
        firstTime: true,
    },
    newUser : {
        username: "",
        profileImage: "",
        age: 0,
        town: "",
        country: "",
        category: [],
        phoneNumber: "",
        userWhatsapp: "",
        email:"",
        strikes :0,
        ban: false,
        firstTime: true,
    }
};

export const createUserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        globalAuth: (state, action:PayloadAction<boolean>) =>{
            state.isAuth = action.payload
        },
        currentUser: (state, action) => {
            state.currentUser = action.payload
        },
        createNewUser: (state, action:PayloadAction<{key: keyof UserType, value: any}>) => { 
            const { key, value } = action.payload
            state.newUser = { ...state.newUser, [key]:value}
        }
    },
})

export const { globalAuth, currentUser, createNewUser } = createUserSlice.actions;
export default createUserSlice.reducer