import { CircleQuestionMark } from "lucide-react";

const OnboardingHeader = ({ steps, currentStep }:{steps:any,currentStep:number}) => {
  return (
    <div className="space-y-6">
      
      <section className="flex items-center justify-between">
      
        <div className="flex items-center gap-2">
          <CircleQuestionMark className="size-4" />

          <p className="text-sm">
            Need a hand?{" "}
            <span className="cursor-pointer text-[#ffb783]">
              Contact support
            </span>
          </p>
        </div>

     
        <div className="rounded-2xl border border-[#464554] px-4 py-2">
          <span className="text-sm">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
      </section>

      {/* Progress steps */}
      <div className="flex w-full items-center mb-5">
        {steps.map((step:any, index:number) => (
          <div
            key={step.value}
            className="flex flex-1 items-center"
          >
          
            <div className="flex items-center gap-2">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition ${
                  index <= currentStep
                    ? "border-[#6366F1] bg-[#6366F1] text-white"
                    : " border-[#464554] text-white"
                }`}
              >
                {index + 1}
              </span>

              <span
                className={`whitespace-nowrap capitalize ${
                  index <= currentStep
                    ? "text-white"
                    : "text-white/50"
                }`}
              >
                {step.value}
              </span>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div
                className={`h-px flex-1 transition ${
                  index < currentStep
                    ? "bg-[#6366F1]"
                    : "bg-[#464554]"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingHeader;