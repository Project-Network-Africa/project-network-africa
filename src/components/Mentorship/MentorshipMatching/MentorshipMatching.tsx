import { MentorshipMatchingProps } from "./MentorshipMatching.types";

export default function MentorshipMatching({
  eyebrow,
  title,
  description,
  matchTimeLabel,
  matchTime,
  steps,
  backgroundClassName = "bg-white",
}: MentorshipMatchingProps) {
  return (
    <section
      className={`w-full px-4 py-12 sm:px-6 md:px-8 lg:px-20 lg:py-[80px] ${backgroundClassName}`}
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full lg:max-w-[760px]">
            <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
              {eyebrow}
            </p>

            <h2 className="mt-4 font-body text-[28px] font-bold leading-[115%] tracking-[-0.5px] text-[#1F1F25] sm:text-[32px] lg:mt-3 lg:text-[38px] lg:leading-[115%] lg:tracking-[-1px]">
              {title}
            </h2>

            <p className="mt-4 font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:mt-3 lg:text-[15px]">
              {description}
            </p>
          </div>

          <div className="mt-5 lg:mb-1 lg:mt-0 lg:text-right">
            <p className="font-body text-[10px] font-semibold leading-[100%] text-[#5D5D61] lg:text-[11px]">
              {matchTimeLabel}
            </p>

            <p className="mt-2 font-body text-[13px] font-semibold leading-[100%] text-[#1F1F25] lg:text-[14px]">
              {matchTime}
            </p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex min-h-[228px] flex-col rounded-[16px] border border-[#DEDEE2] bg-white p-5 lg:h-[228px]"
            >
              <span className="flex h-[28px] w-[38px] items-center justify-center rounded-[8px] bg-[#1F1F25] font-body text-[12px] font-semibold text-white">
                {step.number}
              </span>

              <h3 className="mt-4 font-body text-[18px] font-bold leading-[120%] text-[#1F1F25]">
                {step.title}
              </h3>

              <p className="mt-4 font-body text-[13px] font-normal leading-[150%] text-[#5D5D61]">
                {step.description}
              </p>

              <div className="mt-auto border-t border-[#DEDEE2] pt-4">
                <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE]">
                  {step.output}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
