import { apiSlice } from "../../app/api/apiSlice"

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query({
            query: () => `/user/10/dashboard`,
            // keepUnusedDataFor: 5,
        })
    })
})

export const {
    useGetUserQuery
} = userApiSlice 