"use client";

type ApplicationStep = 1 | 2 | 3 | 4;

interface ApplicationStepItem {
  number: ApplicationStep;
  title: string;
}

interface ApplicationStepsProps {
  currentStep: ApplicationStep;
  onStepChange: (step: ApplicationStep) => void;
}

const steps: ApplicationStepItem[] = [
  {
    number: 1,
    title: "Personal Information",
  },
  {
    number: 2,
    title: "Program Selection",
  },
  {
    number: 3,
    title: "Experience & Portfolio",
  },
  {
    number: 4,
    title: "Review & Payment",
  },
];
export default function ApplicationSteps({
  currentStep,
  onStepChange,
}: ApplicationStepsProps) {
  return (
    <aside className="w-full lg:w-[280px]">
      <div className="flex flex-col gap-6">
        {/* Label */}
        <p className="text-[11px] font-semibold uppercase leading-none text-[#5D5D61]">
          Application Steps
        </p>

        {/* Steps */}
        <div className="flex flex-col gap-6">
          {steps.map((step) => {
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => onStepChange(step.number)}
                className="flex w-fit items-center gap-3 text-left"
              >
                {/* Step circle */}
                <span
                  className={`
                    flex
                    h-[26px]
                    w-[26px]
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-[12px]
                    font-semibold
                    transition-colors
                    ${
                      isActive
                        ? "bg-[#00B6CE] text-white"
                        : isCompleted
                          ? "bg-[#E0F7ED] text-[#1A804D]"
                          : "border border-[#E5E5EB] bg-white text-[#5D5D61]"
                    }
                  `}
                >
                  {isCompleted ? "✓" : step.number}
                </span>

                {/* Step title */}
                <span
                  className={`
                    text-[13px]
                    transition-colors
                    ${
                      isActive
                        ? "font-semibold text-[#1F1F25]"
                        : "font-normal text-[#5D5D61]"
                    }
                  `}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Requirements */}
        {/* <div className="rounded-[12px] bg-[#F6F6F7] p-[18px]">
          <p className="text-[13px] font-semibold text-[#1F1F25]">
            Requirements
          </p>

          <p className="mt-2 text-[12px] leading-[15px] text-[#5D5D61]">
            Valid ID, portfolio link (optional), and application fee.
          </p>
        </div> */}
      </div>
    </aside>
  );
}
