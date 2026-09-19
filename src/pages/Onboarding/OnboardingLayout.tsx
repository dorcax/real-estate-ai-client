import { onboardingTeam } from "@/constants/data";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CompanyStep } from "../Onboarding/onboardingComponent/CompanyStep";
import OnboardingHeader from "./OnboardingHeader";
import { DetailsStep } from "./onboardingComponent/CompanyDetail";
import { TeamStep } from "./onboardingComponent/TeamStep";
import ReadyStep from "./onboardingComponent/ReadyStep";
import { onboardingSchema, type OnboardingFormData } from "@/common/Validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCompleteOnboardingMutation } from "@/api/onboarding.api";
import { toast } from "react-toastify";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completeOnboarding, { isLoading: loading }] =
    useCompleteOnboardingMutation();

  const form = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      website: "",
      description: "",
      address: "",
      state: "",
      city: "",
      currency: "",
      timeZone: "",
    },
  });

  const stepFields = [
    ["name", "email", "website", "description", "phoneNumber"],
    ["address", "city", "state", "country", "currency", "timeZone"],

    [],
  ] as const;

  const handleNext = async () => {
  
      const fields = stepFields[currentStep];
      if (fields.length > 0) {
        const isValid = await form.trigger(fields);
        if (!isValid) return;
      }
    

    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: OnboardingFormData) => {
    try {
      const response = await completeOnboarding(data).unwrap();

      console.log(response);
      toast.success(response.message)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#020617]  text-white">
      <section className="grid h-screen w-full max-w-7xl grid-cols-5 overflow-hidden ">
        {/* LEFT */}
        <div className="relative col-span-2 h-full overflow-hidden">
          <img
            src="/apartment1.jpg"
            alt="Apartment"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-10 left-6 right-6">
            <h1 className="mb-3 text-lg uppercase">A better place to begin</h1>

            <h2 className="mb-3 text-3xl">
              Setup once.
              <br />
              Run property better
            </h2>

            <p className="text-white/80">
              Bring your properties, people and daily decisions into one clear
              workplace.
            </p>
          </div>
        </div>

        <div className="col-span-3 h-full overflow-y-auto px-16 pt-10">
          <OnboardingHeader steps={onboardingTeam} currentStep={currentStep} />

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-10  space-y-6"
          >
            {currentStep === 0 && (
              <CompanyStep form={form} handleNext={handleNext} />
            )}

            {currentStep === 1 && (
              <DetailsStep
                form={form}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            )}

         

            {currentStep === 2 && <ReadyStep />}
          </form>
        </div>
      </section>
    </section>
  );
};

export default Onboarding;
