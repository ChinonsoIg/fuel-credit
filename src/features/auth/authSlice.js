import { createSlice } from "@reduxjs/toolkit";

let refetchUser = localStorage.getItem("fuelCreditUser") !== null ? JSON.parse(localStorage.getItem("fuelCreditUser")) : {};

const authSlice = createSlice({
  name: "auth",
  initialState: { user: refetchUser },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;

      localStorage.setItem("fuelCreditUser", JSON.stringify(state.user));
    },
    logOut: (state, action) => {
      state.user = null;

      localStorage.removeItem("fuelCreditUser");
    }
  },
})


export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
