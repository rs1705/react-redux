import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuth: false,
};

const AuthSlice = createSlice({
  name: "auth_slice",
  initialState: initialAuthState,
  reducers: {
    logIn: (state) => {
      state.isAuth = true;
    },
    logOut: (state) => {
      state.isAuth = false;
      console.log("user logged out!" + state.isAuth);
    },
  },
});
export const { logIn, logOut } = AuthSlice.actions;

export default AuthSlice.reducer;
