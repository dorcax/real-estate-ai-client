import { AppLayout } from "@/components/layout/AppLayout";
import Login from "@/pages/Auth/Login";
import RoleSelection from "@/pages/Auth/roleSelection";
import SignUp from "@/pages/Auth/signUp";
import VerifyOtp from "@/pages/Auth/verifyOtp";
import { Analytics } from "@/pages/Dashboard/Analytics";
import Billing from "@/pages/Dashboard/Billing";
import Customer from "@/pages/Dashboard/Customer";
import MarketPlace from "@/pages/Dashboard/MarketPlace";
import Overview from "@/pages/Dashboard/overview";
import PropertyListing from "@/pages/Dashboard/PropertyListing";
import TeamPage from "@/pages/Dashboard/Team";
import ViewProperty from "@/pages/Dashboard/ViewProperty";
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
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path:'property-listing',
        element: <PropertyListing />,
      },
      {
        path:'view-property/:id',
        element: <ViewProperty />,
      },
      {
        path:'marketplace',
        element: <MarketPlace />,
      },
      {
        path:'customer',
        element: <Customer />,
      },
      {
        path:'billing',
        element: <Billing />,
      },
      {
        path:'Team',
        element: <TeamPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
