import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      loading: false,
      success: false,
      data: null,
      token: "",
      error: null,
    },
    signin: {
      loading: false,
      success: false,
      data: null,
      error: null,
    },
  },
  reducers: {
    is_login_loading: (state) => {
      state.login.loading = true;
    },
    is_login_success: (state, action) => {
      state.login.loading = false;
      state.login.success = true;
      state.login.data = action.payload;
      state.login.token = action.payload.token;
    },
    is_login_error: (state, action) => {
      state.login.loading = false;
      state.login.error = action.payload; // Store error message as a string
      state.login.success = false;
    },
    is_signin_loading: (state) => {
      state.signin.loading = true;
    },
    is_signin_success: (state, action) => {
      state.signin.loading = false;
      state.signin.success = true;
      state.signin.data = action.payload;
    },
    is_signin_error: (state, action) => {
      state.signin.loading = false;
      state.signin.error = action.payload; // Store error message as a string
      state.signin.success = false;
    },
  },
});

export const {
  is_login_loading,
  is_login_success,
  is_login_error,
  is_signin_loading,
  is_signin_success,
  is_signin_error,
} = AuthSlice.actions;
export default AuthSlice.reducer;
