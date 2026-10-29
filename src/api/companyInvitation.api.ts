import { api } from "./base";

type CompanyInvitationStats = {
  totalMember: number;
  totalAdmin: number;
  totalAgent: number;
  totalPendingInvitation: number;
};
const companyInvitationApi = api.injectEndpoints({
  endpoints: ({ mutation, query }) => ({
    createCompanyInvitation: mutation<any, any>({
      query: (body) => ({
        url: "/company-invitation",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Company-Invitation"],
    }),
    getStatistics: query<CompanyInvitationStats, void>({
      query: () => ({
        url: "/company-invitation/stats",
        method: "GET",
      }),
      providesTags: ["Company-Invitation"],
    }),

    getTeamMembers: query<any[], void>({
      query: () => ({
        url: "/company-invitation/members",
        method: "GET",
      }),
      providesTags: ["Company-Invitation"],
    }),
  }),
});

export const { useCreateCompanyInvitationMutation, useGetStatisticsQuery,useGetTeamMembersQuery } =
  companyInvitationApi;
