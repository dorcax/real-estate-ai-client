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

    getProperty: query<any,{id:string,source:string}>({
      query: ({id,source}) => ({
        url: `/property/${id}`,
        method: "GET",
        id,
        params:source ?{source}:undefined 
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

    getPropertyPerformanceStats:query<{
        views: number;
        enquries: number;
        reservations: number;
        totalProperties:number;
        totalAmount:number
      },void>({
      query: () => ({
        url: `/property/stats/performance`,
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
  useGetPropertyPerformanceStatsQuery,
  useDeletePropertyMutation,
} = propertyApi;
