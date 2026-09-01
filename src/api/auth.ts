import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./api.type";

export const emptyAuth: AuthState = {
  token: "",
};

export const initialState = (): AuthState => {
  const saved = localStorage.getItem("auth");

  return saved ? JSON.parse(saved) : emptyAuth;
};

export const auth = createSlice({
  name: "auth",

  initialState: initialState(),

  reducers: {
    setAuth: (_, { payload }: PayloadAction<AuthState>) => {
      localStorage.setItem("auth", JSON.stringify(payload));

      return payload;
    },

    clearAuth: () => {
      localStorage.removeItem("auth");

      return emptyAuth;
    },
  },
});

export const { setAuth, clearAuth } = auth.actions;
