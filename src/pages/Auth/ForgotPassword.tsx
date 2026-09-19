import { useSignInMutation } from "@/api/auth.api";
import Loader from "@/common/Loader";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const ForgotPasswordSchema = z.object({
  email: z.email(),
});

type ForgotPasswordSchema = z.infer<typeof ForgotPasswordSchema>;

const ForgotPassword = () => {
  const [signIn, { isLoading }] = useSignInMutation();
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordSchema) => {
    try {
      const res = await signIn(data).unwrap();

      toast.success(res.message);

      console.log("ForgotPassword data:", data);
    } catch (error: any) {
      toast.error(error?.data?.message);
      console.error("ForgotPassword failed:", error);
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
            <div className="flex justify-center center mb-2 ">
                <span className="flex justify-center items-center w-15 h-15 rounded-full  bg-[#6366F1] "><Lock  className="size-6"/></span>
            
            </div>

            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold capitalize text-white">
                forgot password
              </h2>
              <p className="text-sm text-gray-400">
                Enter your email and we'll send you a code to reset it
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

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-11 w-full bg-[#6366F1] font-medium text-white transition-colors hover:bg-[#818CF8] focus:ring-2 focus:ring-[#818CF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] disabled:opacity-50"
                >
                  {isLoading ? <Loader /> : "send reset code"}
                </Button>
              </FieldGroup>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ForgotPassword;
