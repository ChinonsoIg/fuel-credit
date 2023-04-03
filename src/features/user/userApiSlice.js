import { apiSlice } from "../../app/api/apiSlice"

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.query({
      query: (id) => `/user/${id}/dashboard`,
    })
  })
})


export const {
  useGetUserQuery
} = userApiSlice 