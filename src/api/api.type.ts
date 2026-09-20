export const Role = {
  ADMIN: "ADMIN",
  OWNER: "OWNER",
  CUSTOMER: "CUSTOMER",
  // AGENT: "AGENT",
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export type AuthState = {
  token?: string;
  user?: string;
  role?: Role;
  success?: boolean;
  companyId?: string;
  isVerified?: boolean;
};

export type Response = {
  message: string;
  fullName: string;
  email: string;
};

export type loginResponse = {
  message: string;
  role:Role
  token: string;
};

export type signUpData = {
  fullName: string;
  email: string;
  password: string;
  role: Role;
};

export type signInData = {
  email: string;
  password: string;
};

export type forgotPasswordData = {
  email: string;
};

export type resetPasswordData = {
  email: string;
  otp: string;
  newPassword: string;
};

export type resendOtpData = {
  email: string;
};

export type verifyOtpData = {
  code: string;
  email: string;
};


export type userResponse = {
  id: string;
  name: string;
  email: string;
  role: Role;
  comapany:{
    id:string
  }
};




export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  company:{
    id:string
  }|null
};

export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  role: Role | undefined;
  isAuthenticated: boolean;
};