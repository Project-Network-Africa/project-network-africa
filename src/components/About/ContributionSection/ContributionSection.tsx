import Link from "next/link";
import { ContributionSectionProps } from "./ContributionSection.types";

export default function ContributionSection({
  eyebrow,
  title,
  description,
  options,
  backgroundClassName = "bg-white",
}: ContributionSectionProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-4 py-12 sm:px-8 lg:px-0 lg:py-[64px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <p className="font-body text-[12px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[13px]">
              {eyebrow}
            </p>

            <h2 className="mt-7 max-w-[720px] font-body text-[30px] font-bold leading-[130%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[36px] lg:leading-[120%] lg:tracking-[-1px]">
              {title}
            </h2>
          </div>

          <p className="mt-7 max-w-[420px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:mt-2 lg:text-[15px]">
            {description}
          </p>
        </div>

        {/* Options */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {options.map((option) => (
            <div
              key={option.number}
              className={`flex min-h-[158px] flex-col rounded-[16px] border p-4 lg:min-h-[270px] lg:rounded-[18px] lg:p-6 ${option.highlighted ? "border-[#00B6CE] bg-[#E2F9FC]" : "border-[#D9DDE5] bg-white"}`}
            >
              {/* Desktop top */}
              <div className="hidden items-center justify-between lg:flex">
                <span className="font-body text-[12px] font-semibold leading-[100%] text-[#00A8BE]">
                  {option.number}
                </span>

                <span className="font-body text-[12px] font-semibold leading-[100%] text-[#00A8BE]">
                  {option.label}
                </span>
              </div>

              {/* Mobile top */}
              <div className="flex items-center justify-between lg:hidden">
                <span className="font-body text-[11px] font-semibold leading-[100%] text-[#00A8BE]">
                  {option.label}
                </span>

                <span className="font-body text-[24px] font-normal leading-[100%] text-[#00A8BE]">
                  →
                </span>
              </div>

              <h3 className="mt-5 font-body text-[18px] font-bold leading-[130%] text-[#1F1F25] lg:mt-6 lg:text-[21px]">
                {option.title}
              </h3>

              <p className="mt-2 max-w-[390px] font-body text-[13px] font-normal leading-[145%] text-[#5D5D61] lg:mt-3 lg:text-[14px] lg:leading-[150%]">
                {option.description}
              </p>

              <Link
                href={option.href}
                className="mt-auto pt-4 font-body text-[12px] font-semibold leading-[100%] text-[#1F1F25] lg:pt-8 lg:text-[14px]"
              >
                {option.linkText} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
