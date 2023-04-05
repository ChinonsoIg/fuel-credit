import { createSlice } from "@reduxjs/toolkit";

let refetchUser = localStorage.getItem("fuelCreditUser") !== null ? JSON.parse(localStorage.getItem("fuelCreditUser")) : null;

const authSlice = createSlice({
  name: "auth",
  initialState: { user: refetchUser, isLoading: true },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;

      localStorage.setItem("fuelCreditUser", JSON.stringify(state.user));
    },
    logOut: (state, action) => {
      state.user = null;
      state.isLoading = false;

      localStorage.removeItem("fuelCreditUser");
    }
  },
})


export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;

export const isLoading = (state) => state.auth.isLoading;
