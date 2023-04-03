import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = process.env.REACT_APP_API_URL;

const baseQuery = fetchBaseQuery({
	baseUrl: API_URL,
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth?.user?.access_token;
		if (token) {
			headers.set("Authorization", `Bearer ${token}`)
		}
		return headers;
	}
})



export const apiSlice = createApi({
	baseQuery,
	endpoints: builder => ({})
})