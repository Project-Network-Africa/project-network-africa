import Link from "next/link";
import { ApplicationJourneyProps } from "./ApplicationJourney.types";

export default function ApplicationJourney({
  eyebrow = "HOW TO JOIN",
  title = "From programme choice to cohort application",
  buttonLabel = "View all cohorts",
  buttonHref = "/cohorts",
  steps,
  backgroundClassName = "bg-[#F8F8F8]",
}: ApplicationJourneyProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
              {eyebrow}
            </p>

            <h2 className="mt-4 max-w-[700px] font-body text-[28px] font-bold leading-[115%] tracking-[-0.5px] text-[#1F1F25] lg:mt-3 lg:text-[32px] lg:leading-[120%]">
              {title}
            </h2>
          </div>

          <Link
            href={buttonHref}
            className="mt-5 flex h-[44px] w-full items-center justify-center rounded-[8px] bg-[#1F1F25] px-6 font-body text-[14px] font-semibold text-white transition hover:bg-[#2B2B31] lg:mt-0 lg:h-[46px] lg:w-auto lg:min-w-[160px]"
          >
            {buttonLabel}
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-[26px] lg:gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex min-h-[236px] flex-col rounded-[16px] border border-[#DEDEE2] bg-white p-4 lg:h-[230px] lg:p-5"
            >
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#1F1F25]">
                <span className="font-body text-[14px] font-bold leading-none text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-5 font-body text-[17px] font-bold leading-[120%] text-[#1F1F25] lg:text-[18px]">
                {step.title}
              </h3>

              <p className="mt-4 max-w-[390px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:mt-3 lg:text-[13px]">
                {step.description}
              </p>

              <Link
                href={step.href}
                className="mt-auto flex w-fit items-center gap-2 font-body text-[13px] font-bold leading-[100%] text-[#1F1F25] transition hover:text-[#00B6CE]"
              >
                {step.linkText}
                <span aria-hidden="true" className="text-[18px] leading-none">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
