import { ReactNode } from "react";
import Button from "../../ui/Button";
import SectionHeader from "../../ui/SectionHeader";

interface ProgramHeroProps {
  label: string;
  title: string;
  description: string;
  duration?: string;
  format?: string;
  eligibility?: string;
  buttonText?: string;
  buttonHref?: string;
  children: ReactNode;
}

export default function ProgramHero({
  label,
  title,
  description,
  duration,
  format,
  eligibility,
  buttonText = "Apply to this Program",
  buttonHref = "/apply",
  children,
}: ProgramHeroProps) {
  return (
    <section className="w-full bg-[#F8F8F8] px-4 py-12 sm:px-6 md:px-8 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 rounded-[20px] bg-white p-5 sm:p-6 lg:flex-row lg:items-center lg:gap-12 lg:p-[30px]">
        {/* Visual */}
        <div className="w-full lg:max-w-[480px]">{children}</div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4">
          <SectionHeader label={label} title={title} />

          <p className="max-w-[640px] text-[15px] leading-7 text-[#5D5D61]">
            {description}
          </p>

          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {duration && (
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-[#5D5D61]">
                  Duration
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1F1F25]">
                  {duration}
                </p>
              </div>
            )}

            {format && (
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-[#5D5D61]">
                  Format
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1F1F25]">
                  {format}
                </p>
              </div>
            )}

            {eligibility && (
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-[#5D5D61]">
                  Eligibility
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1F1F25]">
                  {eligibility}
                </p>
              </div>
            )}
          </div>

          <Button
            href={buttonHref}
            className="mt-6 w-full rounded-[10px] py-[14px] sm:w-fit sm:px-6"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
