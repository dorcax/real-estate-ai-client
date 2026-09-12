export const OnboardingProgress = ({ steps, currentStep }:{steps:any ,currentStep:number}) => {
  return (
    <div className="flex w-full items-center">
      {steps.map((step:any, index:number) => (
        <div key={step.id}>
          <div className="flex items-center gap-2">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm ${
                index <= currentStep
                  ? "border-[#6366F1] bg-[#6366F1]"
                  : "border-[#464554]"
              }`}
            >
              {index + 1}
            </span>

            <span className="whitespace-nowrap">
              {step.label}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`mx-3 h-px flex-1 ${
                index < currentStep
                  ? "bg-[#6366F1]"
                  : "bg-[#464554]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};