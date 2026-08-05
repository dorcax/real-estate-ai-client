import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { MoveLeft, MoveRight } from "lucide-react";

const VerifyOtp = () => {
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

      <div className="relative z-10 w-full  text-white max-w-sm  rounded-xl bg-[#0F172A] px-8 py-8 shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="inline-block rounded-full bg-[#818CF8]/10 px-4 py-1.5 text-sm font-semibold text-[#818CF8]">
            Aura AI
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <h2 className="mb-2 text-2xl font-semibold text-white">
        
            Verify your email
          </h2>
          <p className="text-xs text-gray-400">
            We sent a 6 digit code to your email address{" "}
          </p>
          <p className="text-xs text-gray-400">
            Please enter it below to confirm your identity{" "}
          </p>
        </div>
        <form action="" >
          <FieldGroup>
            <Field>
              <div className="flex justify-center">
                <InputOTP maxLength={6} id="otp-verification" required>
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl ">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator className="mx-2" />
                <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12  *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              </div>
                <div className="text-center my-2 ">
              <a
                href="/forgot-password"
                className="text-xs "
              >
               Didn't receive a code? <span className="text-[#818CF8] hover:underline">Resend code</span>
              </a>
            </div>

              <Button
                type="submit"
                // disabled={isSubmitting}
                className=" my-4 h-11 w-full bg-[#6366F1] font-medium text-white transition-colors hover:bg-[#818CF8] focus:ring-2 focus:ring-[#818CF8] focus:ring-offset-2 focus:ring-offset-[#0F172A] disabled:opacity-50"
              >
                {/* {isSubmitting ? "Logging in..." : "Login"} */}
                verify & continue <MoveRight />
              </Button>
            </Field>
          </FieldGroup>
        </form>
        <div className="flex items-center justify-center gap-3">
          <span><MoveLeft className="size-3"/></span>
          <a href=""  className="text-sm"> Back to login</a>
        </div>
      </div>
    </main>
  );
};

export default VerifyOtp;
