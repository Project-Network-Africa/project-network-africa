import { HowPNWorksProps } from "./HowPNWorks.types";

export default function HowPNWorks({
  eyebrow,
  title,
  description,
  steps,
  highlights,
  backgroundClassName = "bg-white",
}: HowPNWorksProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-4 py-12 sm:px-8 lg:px-0 lg:py-[64px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="w-full lg:max-w-[760px]">
            <p className="font-body text-[12px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[13px]">
              {eyebrow}
            </p>

            <h2 className="mt-7 font-body text-[30px] font-bold leading-[130%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[36px] lg:leading-[115%] lg:tracking-[-1px]">
              {title}
            </h2>
          </div>

          <p className="mt-7 w-full max-w-[350px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:mt-2 lg:text-[15px]">
            {description}
          </p>
        </div>

        {/* Steps */}
        <div className="mt-8 grid w-full grid-cols-1 gap-3 lg:mt-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex min-h-[142px] flex-col justify-between rounded-[16px] border border-[#D9DDE5] p-4 lg:min-h-[245px] lg:rounded-[18px] lg:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-[32px] w-[32px] items-center justify-center rounded-[10px] bg-[#E8FAFC] font-body text-[12px] font-semibold text-[#00A8BE]">
                  {step.number}
                </span>

                <span className="font-body text-[11px] font-semibold text-[#00A8BE] lg:text-[12px]">
                  {step.label}
                </span>
              </div>

              <div className="mt-7">
                <h3 className="font-body text-[18px] font-bold leading-[130%] text-[#1F1F25] lg:text-[21px]">
                  {step.title}
                </h3>

                <p className="mt-2 font-body text-[13px] font-normal leading-[145%] text-[#5D5D61] lg:text-[14px] lg:leading-[150%]">
                  {step.description}
                </p>
              </div>

              <span className="mt-4 w-fit rounded-[6px] bg-[#F8F8F8] px-2 py-1 font-body text-[10px] font-medium leading-[100%] text-[#1F1F25]">
                {step.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-7 grid w-full grid-cols-1 gap-5 rounded-[16px] bg-[#E2F9FC] px-4 py-5 lg:mt-10 lg:grid-cols-3 lg:gap-8 lg:px-10 lg:py-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="flex flex-col gap-2 lg:items-center lg:text-center"
            >
              <p className="font-body text-[11px] font-semibold uppercase leading-[100%] text-[#00A8BE]">
                {highlight.label}
              </p>

              <p className="font-body text-[14px] font-normal leading-[140%] text-[#1F1F25]">
                {highlight.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
