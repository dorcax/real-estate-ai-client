import { AppLayout } from "@/components/layout/AppLayout";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import Login from "@/pages/Auth/Login";

import RoleSelection from "@/pages/Auth/roleSelection";
import SignUp from "@/pages/Auth/signUp";
import VerifyOtp from "@/pages/Auth/verifyOtp";
import { Analytics } from "@/pages/Dashboard/Analytics";
import Billing from "@/pages/Dashboard/Billing";
import CustomerList from "@/pages/Dashboard/Customer";

import MarketPlace from "@/pages/Dashboard/MarketPlace";
import Overview from "@/pages/Dashboard/overview";
import PropertyListing from "@/pages/Dashboard/PropertyListing";
import TeamPage from "@/pages/Dashboard/Team";
import ViewProperty from "@/pages/Dashboard/ViewProperty";
import OnboardingLayout from "@/pages/Onboarding/OnboardingLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoutes";
import PropertyForm from "@/components/Dialog/property/PropertyForm";
import CreateProperty from "@/components/property/CreateProperty";

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
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/onboarding",
    element: <OnboardingLayout />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute allowedRoles={['OWNER']}>
        <AppLayout />
      </ProtectedRoute>
    ),
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
        path: "property-listing",
        element: <PropertyListing />,
      },
      {
        path: "view-property/:id",
        element: <ViewProperty />,
      },
      {
        path: "marketplace",
        element: <MarketPlace />,
      },
      {
        path: "customer",
        element: <CustomerList />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
      {
        path: "Team",
        element: <TeamPage />,
      },
      {
        path: "create-property",
        element: <CreateProperty />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
