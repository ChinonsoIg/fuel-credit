import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL = process.env.REACT_APP_API_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,

})


export const apiSlice = createApi({
    baseQuery,
    endpoints: builder => ({})
})