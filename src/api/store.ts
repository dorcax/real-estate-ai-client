import { configureStore } from "@reduxjs/toolkit";

import { api } from "./base";
import { auth } from "./auth";

export const store = configureStore({
  reducer: {
    auth:auth.reducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
