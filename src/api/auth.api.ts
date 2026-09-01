import type { forgotPasswordData, loginResponse, resendOtpData, resetPasswordData, Response, signInData, signUpData, verifyOtpData } from "./api.type";
import { api } from "./base";



export const authApi = api.injectEndpoints({
  endpoints: ({ mutation }) => ({
    
    SignUp: mutation<Response, signUpData>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    signIn: mutation<loginResponse, signInData>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    forgotPassword: mutation<Response, forgotPasswordData>({
      query: (body) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body,
      }),
    }),

    resetPassword: mutation<Response, resetPasswordData>({
      query: (body) => ({
        url: "/auth/reset-password",
        method: "POST",
        body,
      }),
    }),

    verifyOtp: mutation<Response, verifyOtpData>({
      query: (body) => ({
        url: "/auth-otp-token/verify",
        method: "POST",
        body,
      }),
    }),

    

    resendOtp: mutation<Response, resendOtpData>({
        
      query: (body) => ({
        url: "/auth/resend-otp",
        method: "POST",
        body,
      }),
    }),

  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useResendOtpMutation,
  useVerifyOtpMutation
} = authApi;