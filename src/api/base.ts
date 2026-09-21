import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/api/store";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,

    prepareHeaders: (headers,{getState}) => {
      // const savedAuth = localStorage.getItem("auth");

     const state = getState() as RootState;
     const token = state.auth.token;



        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      

      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),

  tagTypes: [
    "User",
    "Property",
    "Customer",
    "Lead",
    "Appointment",
    "Plan",
    "Subscription",
    "Payment",
    "Notification",
  ],

  endpoints: () => ({}),
});


