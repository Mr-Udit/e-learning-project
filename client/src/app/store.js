import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authslice.js"
export const appStore = configureStore({
    reducer:{
        auth: authReducer
    }
});