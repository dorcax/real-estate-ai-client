import type { AuthContextType } from "@/api/api.type";
import { useGetUserQuery } from "@/api/auth.api";
import { useAppSelector } from "@/hooks/store-hook";
import { skipToken } from "@reduxjs/toolkit/query";
import { createContext, useContext } from "react";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector((state: any) => state.auth.token);

  const { data, isLoading, isFetching } = useGetUserQuery(
    token ? undefined : skipToken,
  );

  return (
    <AuthContext.Provider
      value={{
        user: data ?? null,
        isLoading: isLoading || isFetching,
        isAuthenticated: !!data,
        role: data?.role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
