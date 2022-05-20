import { createSlice } from "@reduxjs/toolkit";
import api from "../api/axiosClient";

// Slice

const initialUser = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;

const slice = createSlice({
  name: "auth",
  initialState: {
    auth: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.auth = action.payload;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    logoutSuccess: (state, action) => {
      state.auth = null;
      localStorage.removeItem("auth");
    },
  },
});

export default slice.reducer;

// Actions

const { loginSuccess, logoutSuccess } = slice.actions;

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      await api.post("auth/login", { username, password });
      dispatch(loginSuccess({ username, password }));
    } catch (e) {
      return console.error(e.message);
    }
  };

export const logout = () => async (dispatch) => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
