import Link from "next/link";
import { ProgramsHeroProps } from "./program-hero.types";

export default function ProgramsHero({
  eyebrow,
  title,
  description,
  primaryButton,
  secondaryButton,
  stats,
  matcher,
  backgroundClassName = "bg-[#1F1F25]",
}: ProgramsHeroProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-0 lg:py-[78px]">
        {/* Hero Content */}
        <div className="flex w-full flex-col lg:w-[650px]">
          <div className="w-fit rounded-full border border-[#4A4A51] px-4 py-2 font-body text-[12px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[13px]">
            {eyebrow}
          </div>

          <h1 className="mt-7 max-w-[650px] font-body text-[32px] font-bold leading-[115%] tracking-[-0.8px] text-white sm:text-[38px] lg:mt-7 lg:text-[58px] lg:leading-[115%] lg:tracking-[-2px]">
            {title}
          </h1>

          <p className="mt-6 max-w-[620px] font-body text-[15px] font-normal leading-[150%] text-[#BFBFC7] lg:mt-6 lg:text-[18px] lg:leading-[155%]">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex w-full items-center gap-3 lg:mt-7">
            <Link
              href={primaryButton.href}
              className="flex h-[44px] flex-1 items-center justify-center rounded-[8px] bg-[#00B6CE] px-4 font-body text-[13px] font-semibold text-[#1F1F25] transition hover:bg-[#36E7FD] lg:h-[48px] lg:flex-none lg:px-6 lg:text-[14px]"
            >
              {primaryButton.label}
            </Link>

            <Link
              href={secondaryButton.href}
              className="flex h-[48px] flex-1 items-center justify-center rounded-[8px] border border-[#4A4A51] px-4 font-body text-[13px] font-semibold text-white transition hover:border-white lg:h-[48px] lg:flex-none lg:px-6 lg:text-[14px]"
            >
              {secondaryButton.label}
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-7 grid grid-cols-2 gap-5 md:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col gap-1">
                <p className="font-body text-[14px] font-bold leading-[100%] text-white lg:text-[15px]">
                  {stat.value}
                </p>
                <p className="font-body text-[12px] font-normal leading-[140%] text-[#AFAFB8] lg:text-[13px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Programme Matcher */}
        <div className="w-full lg:w-[508px] lg:shrink-0">
          <div className="rounded-[20px] bg-white p-5 sm:p-6 lg:rounded-[20px] lg:p-7">
            <div className="w-fit rounded-full bg-[#E2F9FC] px-3 py-2 font-body text-[11px] font-semibold leading-[100%] text-[#1F1F25] lg:text-[12px]">
              {matcher.eyebrow}
            </div>

            <h2 className="mt-5 font-body text-[25px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[27px] lg:leading-[125%]">
              {matcher.title}
            </h2>

            <p className="mt-4 font-body text-[13px] font-normal leading-[150%] text-[#5D5D61] lg:text-[14px]">
              {matcher.description}
            </p>

            <div className="mt-5 flex flex-col gap-5 lg:mt-6 lg:gap-6">
              {matcher.steps.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#E2F9FC] font-body text-[12px] font-semibold text-[#1F1F25]">
                    {step.number}
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="font-body text-[14px] font-semibold leading-[130%] text-[#1F1F25] lg:text-[15px]">
                      {step.title}
                    </p>

                    <p className="font-body text-[12px] font-normal leading-[140%] text-[#5D5D61] lg:text-[13px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={matcher.buttonHref}
              className="mt-6 flex h-[48px] w-full items-center justify-center rounded-[8px] bg-[#00B6CE] font-body text-[13px] font-semibold text-[#1F1F25] transition hover:bg-[#36E7FD] lg:mt-7 lg:text-[14px]"
            >
              {matcher.buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
