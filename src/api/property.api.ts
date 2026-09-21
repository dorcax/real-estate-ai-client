import { api } from "./base";

const propertyApi = api.injectEndpoints({
  endpoints: ({ mutation}) => ({
    createProperty: mutation<any, any>({
      query: (body) => ({
        url: "/property",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Property"],
    }),
  }),
});

export const { useCreatePropertyMutation } = propertyApi;
