import { onboardingTeam } from "@/constants/data";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CompanyStep } from "../Onboarding/onboardingComponent/CompanyStep";
import OnboardingHeader from "./OnboardingHeader";
import { DetailsStep } from "./onboardingComponent/CompanyDetail";
import { TeamStep } from "./onboardingComponent/TeamStep";
import ReadyStep from "./onboardingComponent/ReadyStep";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      companyName: "",
      email: "",
      website: "",
      description: "",
      team: [],
    },
  });

  const handleNext = async () => {
    if (currentStep === onboardingTeam.length - 1) {
      const values = form.getValues();

      console.log("SUBMIT", values);

      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
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
            <h1 className="mb-3 text-lg uppercase">
              A better place to begin
            </h1>

            <h2 className="mb-3 text-3xl">
              Setup once.
              <br />
              Run property better
            </h2>

            <p className="text-white/80">
              Bring your properties, people and daily decisions into one
              clear workplace.
            </p>
          </div>
        </div>

        <div className="col-span-3 h-full overflow-y-auto px-16 pt-10">
          
        
          <OnboardingHeader
            steps={onboardingTeam}
            currentStep={currentStep}
          />

         
          <section className="mt-10 space-y-6">

         
            {currentStep === 0 && (
              <CompanyStep
                form={form}
                handleNext={handleNext}
              />
            )}

           
            {currentStep === 1 && (
              <DetailsStep
                form={form}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            )}

          
            {currentStep === 2 && (
              <TeamStep
                form={form}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            )}


            
            {currentStep === 3 && (
              <ReadyStep
                form={form}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            )}

            
         

          </section>
        </div>
      </section>
    </section>
  );
};

export default Onboarding;