import Button from "@/src/components/ui/Button";

interface OnboardingStep {
  id: string;
  title: string;
  status: "completed" | "pending" | "scheduled";
  subtitle?: string;
}

interface OnboardingChecklistProps {
  steps: OnboardingStep[];
  completedSteps: number;
  totalSteps: number;
}

export default function OnboardingChecklist({
  steps,
  completedSteps,
  totalSteps,
}: OnboardingChecklistProps) {
  const progress = (completedSteps / totalSteps) * 100;

  return (
    <div className="flex w-full flex-col gap-5">
      {/* Page Header */}
      {/* <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold leading-none text-[#1F1F25]">
          Onboarding Checklist
        </h1>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00B6CE] text-[13px] font-bold text-white">
          AO
        </div>
      </div> */}

      {/* Onboarding Progress */}
      <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
        <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
          Onboarding Progress
        </p>

        <div className="flex items-center gap-3">
          <div className="h-[10px] flex-1 overflow-hidden rounded-full bg-[#E5E5EB]">
            <div
              className="h-full rounded-full bg-[#00B6CE] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="shrink-0 text-[13px] font-semibold text-[#1F1F25]">
            {completedSteps} of {totalSteps} steps complete
          </span>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
        <p className="mb-5 text-[10px] font-semibold uppercase text-[#5D5D61]">
          Onboarding Steps
        </p>

        <div className="flex flex-col gap-4">
          {steps.map((step) => {
            const completed = step.status === "completed";

            return (
              <div key={step.id} className="flex items-start gap-3">
                {/* Status Icon */}
                <div
                  className={`mt-[1px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    completed ? "bg-[#00B6CE]" : "bg-transparent"
                  }`}
                >
                  {completed && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 6L5 8.5L9.5 3.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex flex-col gap-1">
                  <p
                    className={`text-[13px] font-semibold ${
                      completed ? "text-[#1F1F25]" : "text-[#1F1F25]"
                    }`}
                  >
                    {step.title}
                  </p>

                  {step.subtitle && (
                    <p
                      className={`text-[11px] ${
                        completed ? "text-[#00B6CE]" : "text-[#5D5D61]"
                      }`}
                    >
                      {step.subtitle}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Back Button */}
      <div>
        <Button
          href="/applicant/application-status"
          variant="light"
          className="h-[41px] rounded-[8px] px-4 py-[10px] text-[12px] font-semibold"
        >
          ← Back to Application Status
        </Button>
      </div>
    </div>
  );
}
