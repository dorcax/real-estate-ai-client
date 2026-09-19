import type { Role } from "@/api/api.type";

export const dashboardFor = (role?: Role) => {
  switch (role) {
    case "ADMIN":
    case "OWNER":
      return "/dashboard";
    case "CUSTOMER":
      return "/customer-dashboard";
    default:
      return "/";
  }
};

