import { useGetUserQuery } from "@/api/auth.api";
import { dashboardFor } from "@/constants/getDashboard";
import { useAuth } from "@/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

type Role = "ADMIN" | "CUSTOMER" | "OWNER";

export const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles?: Role[];
}) => {
  const { user, isAuthenticated, isLoading, role } = useAuth();

  const location = useLocation();

  const { data } = useGetUserQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/sign-in" replace state={{ from: location }} />;
  }

  if (!role) {
    return <Navigate to="/sign-in" replace />;
  }

  if (!allowedRoles || allowedRoles.length === 0) {
    return <>{children}</>;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to={dashboardFor(role)} replace />;
  }

  console.log("✅ Role allowed");

  return <>{children}</>;
};
