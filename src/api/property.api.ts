import type { Response } from "./api.type";
import { api } from "./base";

const propertyApi = api.injectEndpoints({
  endpoints: ({ mutation, query }) => ({
    createProperty: mutation<any, any>({
      query: (body) => ({
        url: "/property",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Property"],
    }),

    getProperties: query<any, any>({
      query: (params) => ({
        url: "/property",
        method: "GET",
        params,
      }),
      providesTags: ["Property"],
    }),

    getProperty: query<any, any>({
      query: (id: string) => ({
        url: `/property/${id}`,
        method: "GET",
        id,
      }),
      providesTags: ["Property"],
    }),

    getPropertyStats:query<{
        total: number;
        rented: number;
        sold: number;
        pending:number
      },void>({
      query: () => ({
        url: "/property/stats",
        method: "GET",
      }),
      providesTags: ["Property"],
    }),

    deleteProperty: mutation<Response, string>({
      query: (id: string) => ({
        url: `/property/${id}`,
        method: "DELETE",
        id,
      }),
      invalidatesTags: ["Property"],
    }),
  }),
});

export const {
  useCreatePropertyMutation,
  useGetPropertiesQuery,
  useGetPropertyQuery,
  useGetPropertyStatsQuery,
  useDeletePropertyMutation,
} = propertyApi;
