// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:null,
    isAuthonticated:false
}

const authslice = createSlice({
    name: "authSlice",
    initialState,
    reducers:{
        userLoggedIn: (state,action)=>{
            state.user = action.payload.user
            state.isAuthonticated = true
        },
        userLoggedOut: (state)=>{
            state.user = null,
            state.isAuthonticated=false
        }

    }
})

export const {userLoggedIn, userLoggedOut} = authslice.actions;
export default authslice.reducer