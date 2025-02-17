/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-labels */
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { userLoggedIn } from "../authslice";

const USER_API = "http://localhost:3030/api/v1/user/"

export const authApi = createApi({
    reducerPath : "authApi",
    baseQuery : fetchBaseQuery({
        baseUrl:USER_API,
        credentials:'include'
    }),
    endpoints : (builder) =>({
        registerUser : builder.mutation({
            query : (inputData) => ({
                url : "register",
                method : "POST",
                body : inputData
            })
        }),
        loginUser : builder.mutation({
            query : (inputData) => ({
                url : "login",
                method : "POST",
                body : inputData
            }),
            async onQueryStarted(args , {queryFulfilled , dispatch}) {
                try {
                    const result = await this.queryFulfilled;
                    dispatch(userLoggedIn({user : result.data.user}))
                } catch (error) {
                    console.log(error);
                }
            }
        })
    })
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation
} = authApi