import { api } from "./base";

const onBoardingApi = api.injectEndpoints({
  endpoints: ({ mutation }) => ({
    completeOnboarding: mutation({
      query: (data) => ({
        url: "/onboarding",
        method: "POST",
        body: data,
      }),
    }),
  }),
});


export const {useCompleteOnboardingMutation} =onBoardingApi