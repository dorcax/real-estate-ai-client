import { Role, type Role as RoleType } from "@/api/api.type";
import { useSignUpMutation } from "@/api/auth.api";
import Loader from "@/common/Loader";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

const signUpSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be 6 characters"),
});

type registerSchema = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const [signUp, { isLoading: loading }] = useSignUpMutation();
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get("role");
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const role: RoleType | null =
  //   roleParam === Role.ADMIN ||
  //   roleParam === Role.AGENT ||
  //   roleParam === Role.CUSTOMER ||
  //   roleParam === Role.OWNER
  //     ? roleParam
  //     : null;

  const form = useForm<registerSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: registerSchema) {
    try {
      // if (!role) {
      //   console.error("Invalid or missing role");
      //   return;
      // }
      const response = await signUp({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        role: "OWNER",
      }).unwrap();

      sessionStorage.setItem("verificationEmail", data.email);

      

      // console.log(response)
      toast.success(response.message);
      navigate("/verify-otp");
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "something went wrong ");
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-4 py-8 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #8083ff, transparent 40%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-4xl min-h-150 flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0F172A] shadow-2xl md:flex-row">
        <section className="relative flex-1 px-6 py-8 md:px-8 bg-[url('/apartment1.jpg')]  bg-cover bg-center">
          {/* <div className="absolute inset-0 bg-black/85" /> */}

          <div className="absolute bottom-20 left-6 right-6">
            <h1 className="text-3xl font-semibold leading-tight max-w-md">
              Elevate your agency with autonomous intelligence.
            </h1>

            <p className="mt-4 text-xs text-gray-200 max-w-sm">
              Join the elite network of real estate professionals leveraging
              Aura AI to handle inquiries, qualify leads, and close deals
              effortlessly.
            </p>
          </div>
        </section>

        <section className="flex-1 px-6 py-20 md:px-8">
          <div className="px-10">
            <div className="flex items-center gap-3 text-sm text-gray-300 mb-3">
              <MoveLeft size={18} />
              Back To Roles
            </div>

            <div className="mb-4">
              <h2 className="text-xl mb-2">Create your Agent account</h2>

              <p className="text-xs text-gray-300">
                Enter your details to access the agent portal
              </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="fullName">Full Name</FieldLabel>

                  <Input
                    id="fullName"
                    placeholder="Full Name"
                    className="py-5"
                    {...form.register("fullName")}
                  />

                  {form.formState.errors.fullName && (
                    <FieldError errors={[form.formState.errors.fullName]} />
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>

                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="py-5"
                    {...form.register("email")}
                  />

                  {form.formState.errors.email && (
                    <FieldError errors={[form.formState.errors.email]} />
                  )}
                </Field>

                {/* <Field>
                  <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>

                  <Input
                    id="phoneNumber"
                    placeholder="Phone Number"
                    className="py-5"
                    {...form.register("phoneNumber")}
                  />
                </Field> */}

                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>

                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="py-5"
                    {...form.register("password")}
                  />
                </Field>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#6366F1] py-5 hover:bg-[#6366F1] capitalize"
                >
                  {loading ? <Loader /> : "create account"}
                </Button>

                {/* <div className="flex items-center gap-4 my-4">
                  <span className="flex-1 border-t border-gray-300" />

                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    or continue with
                  </span>

                  <span className="flex-1 border-t border-gray-300" />
                </div>

                <div className="w-full  ">
                  <Button type="button" className="w-full h-11">
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
                    Google
                  </Button>
                </div> */}

                <p className="text-center text-xs text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/sign-in"
                    className="font-medium text-[#818CF8] hover:underline"
                  >
                    Sign in
                  </a>
                </p>
              </FieldGroup>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
