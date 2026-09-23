import { api } from "./base";

const uploadApi = api.injectEndpoints({
  endpoints: ({ mutation }) => ({
    createUpload: mutation<any, any>({
      query: (body) => ({
        url: "/upload",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Upload"],
    }),

    // delete upload 

    deleteUpload: mutation<any, string>({
      query: (id) => ({
        url: `/upload/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Upload"],
    }),

  
  }),
});


export const {useCreateUploadMutation,useDeleteUploadMutation} =uploadApi