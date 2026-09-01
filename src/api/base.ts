import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,

    prepareHeaders: (headers) => {
      const savedAuth = localStorage.getItem("auth");

      if (savedAuth) {
        const auth = JSON.parse(savedAuth);

        if (auth.token) {
          headers.set("Authorization", `Bearer ${auth.token}`);
        }
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
