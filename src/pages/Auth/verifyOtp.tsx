import { useVerifyOtpMutation } from "@/api/auth.api";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { MoveLeft, MoveRight } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

const verifySchema = z.object({
  code: z.string().length(6, "Please enter the 6-digit verification code"),
  // email:z.email()
});

type VerifySchema = z.infer<typeof verifySchema>;

const VerifyOtp = () => {
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const navigate = useNavigate();
const email = sessionStorage.getItem("verificationEmail");
  const form = useForm<VerifySchema>({
    defaultValues: {
      code: "",
      
    },
  });

 const onSubmit = async (value: VerifySchema) => {
  console.log("FORM VALUE:", value);
  console.log("EMAIL:", email);

  try {
    if (!email) {
      toast.error("Verification email not found");
      return;
    }

    const payload = {
      code: value.code,
      email,
    };

    console.log("VERIFY PAYLOAD:", payload);

    const res = await verifyOtp(payload).unwrap();

    console.log("VERIFY RESPONSE:", res);

    toast.success(res.message || "User email successfully verified");

    sessionStorage.removeItem("verificationEmail");

    navigate("/sign-in");
  
  } catch (error:any) {
    console.error("VERIFY ERROR:", error);

    toast.error(
      error?.data?.message ||
        "Verification failed. Please check your code.",
    );
  }
};

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-4 py-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #8083ff, transparent 40%)",
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 w-full max-w-sm rounded-xl bg-[#0F172A] px-8 py-8 text-white shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="inline-block rounded-full bg-[#818CF8]/10 px-4 py-1.5 text-sm font-semibold text-[#818CF8]">
            Aura AI
          </h1>
        </div>

        <div className="mb-4 flex flex-col items-center justify-center">
          <h2 className="mb-2 text-2xl font-semibold text-white">
            Verify your email
          </h2>

          <p className="text-xs text-gray-400">
            We sent a 6 digit code to your email address
          </p>

          <p className="text-xs text-gray-400">
            Please enter it below to confirm your identity
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <Controller
                name="code"
                control={form.control}
                render={({ field }) => (
                  <div className="flex justify-center">
                    <InputOTP
                      maxLength={6}
                      id="otp-verification"
                      value={field.value}
                      onChange={field.onChange}
                    >
                      <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>

                      <InputOTPSeparator className="mx-2" />

                      <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                )}
              />

              {form.formState.errors.code && (
                <p className="mt-2 text-center text-xs text-red-400">
                  {form.formState.errors.code.message}
                </p>
              )}

              <div className="my-2 text-center">
                <a href="/forgot-password" className="text-xs">
                  Didn't receive a code?{" "}
                  <span className="text-[#818CF8] hover:underline">
                    Resend code
                  </span>
                </a>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="my-4 h-11 w-full bg-[#6366F1] font-medium text-white transition-colors hover:bg-[#818CF8] focus:ring-2 focus:ring-[#818CF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] disabled:opacity-50"
              >
                {isLoading ? (
                  "Verifying..."
                ) : (
                  <>
                    Verify & Continue
                    <MoveRight />
                  </>
                )}
              </Button>
            </Field>
          </FieldGroup>
        </form>

        <div className="flex items-center justify-center gap-3">
          <MoveLeft className="size-3" />

          <a href="/login" className="text-sm">
            Back to login
          </a>
        </div>
      </div>
    </main>
  );
};

export default VerifyOtp;
