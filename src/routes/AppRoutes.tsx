import { AppLayout } from "@/components/layout/AppLayout";
import Login from "@/pages/Auth/Login";
import RoleSelection from "@/pages/Auth/roleSelection";
import SignUp from "@/pages/Auth/signUp";
import VerifyOtp from "@/pages/Auth/verifyOtp";
import Overview from "@/pages/Dashboard/overview";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoleSelection />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/dashboard",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
