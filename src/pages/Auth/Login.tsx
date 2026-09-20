import { setAuth } from "@/api/auth";
import { useSignInMutation } from "@/api/auth.api";
import Loader from "@/common/Loader";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { dashboardFor } from "@/constants/getDashboard";
import { useAuth } from "@/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

const signInSchema = z.object({
  email: z.email(),
  password: z.string(),
});

type LoginSchema = z.infer<typeof signInSchema>;

const Login = () => {
  const [signIn, { isLoading }] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const res = await signIn(data).unwrap();

      console.log("LOGIN RESPONSE:", res);
      console.log("ROLE:", res.role);

      dispatch(setAuth({ token: res.token }));

      toast.success(res.message);

      if (res.role === "OWNER" && !user?.company?.id) {
        navigate("/onboarding", { replace: true });
        return;
      }

      navigate(dashboardFor(res.role), { replace: true });
    } catch (error: any) {
      console.error("LOGIN FAILED:", error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <main className="h-screen w-full overflow-hidden bg-[#0F172A] text-white">
      <div className="grid h-full grid-cols-5">
        {/* LEFT - FIXED IMAGE */}
        <section className="relative col-span-2 h-full overflow-hidden bg-[url('/apartment1.jpg')] bg-cover bg-center">
          <div className="absolute bottom-20 left-6 right-6">
            <h1 className="max-w-md text-3xl font-semibold leading-tight">
              Elevate your agency with autonomous intelligence.
            </h1>

            <p className="mt-4 max-w-sm text-xs text-gray-200">
              Join the elite network of real estate professionals leveraging
              Aura AI to handle inquiries, qualify leads, and close deals
              effortlessly.
            </p>
          </div>
        </section>

        <section className="col-span-3 w-full h-full overflow-y-auto">
          <div className="w-full max-w-sm mx-auto py-20 ">
            <div className="mb-6 text-center">
              <h1 className="inline-block rounded-full bg-[#818CF8]/10 px-4 py-1.5 text-sm font-semibold text-[#818CF8]">
                Aura AI
              </h1>
            </div>

            <div className="mb-8 text-center">
              <h2 className="mb-2 text-xl font-semibold text-white">
                Welcome Back
              </h2>
              <p className="text-sm text-gray-400">
                Enter your details to access your dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <FieldGroup className="">
                <Field>
                  <FieldLabel className="mb-1.5 block text-sm font-medium text-gray-200">
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-11 bg-[#1E293B] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#818CF8]"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <FieldLabel className="mb-1.5 block text-sm font-medium text-gray-200">
                    Password
                  </FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="h-11 bg-[#1E293B] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#818CF8]"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                  />

                  {errors.password && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </Field>

                <div className="text-right">
                  <a
                    href="/forgot-password"
                    className="text-sm text-[#818CF8] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-11 w-full bg-[#6366F1] font-medium text-white transition-colors hover:bg-[#818CF8] focus:ring-2 focus:ring-[#818CF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] disabled:opacity-50"
                >
                  {isLoading ? <Loader /> : "Login"}
                </Button>
              </FieldGroup>
            </form>
            <div className="my-5 flex items-center gap-4">
              <div className="flex-1 border-t border-gray-700" />
              <span className="text-sm text-gray-500">or</span>
              <div className="flex-1 border-t border-gray-700" />
            </div>

            <div className="space-y-4">
              <Button
                type="button"
                variant="outline"
                className="h-11 w-full border-gray-700 bg-transparent text-white transition-colors hover:bg-gray-800 hover:text-white"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </Button>

              <p className="text-center text-xs text-gray-400">
                Don't have an account?{" "}
                <a
                  href="/sign-up"
                  className="font-medium text-[#818CF8] hover:underline"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
