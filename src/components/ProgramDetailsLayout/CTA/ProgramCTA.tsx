import Link from "next/link";
import { CTA } from "../../../types/program";

interface ProgramCTAProps {
  cta: CTA;
}

export default function ProgramCTA({ cta }: ProgramCTAProps) {
  return (
    <section className="w-full bg-[#00B6CE] px-5 py-12 sm:px-8 lg:px-20 lg:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* CTA content */}

        <div className="flex max-w-[911px] flex-col gap-4">
          <h2 className="text-[24px] font-bold leading-[118%] text-[#211F1F] sm:text-[28px]">
            {cta.title}
          </h2>

          <Link
            href={cta.buttonHref}
            className="flex w-fit items-center justify-center rounded-[10px] bg-white px-[26px] py-[15px] text-[15px] font-semibold text-[#1F1F25] transition hover:bg-[#F6F6F7]"
          >
            {cta.buttonText}
          </Link>
        </div>

        {/* Next cohort card */}

        <div className="flex w-full max-w-[214px] flex-col gap-1 rounded-[14px] bg-[#2E2E36] px-6 py-5">
          <span className="text-[10px] font-semibold text-[#9999A6]">
            NEXT COHORT STARTS
          </span>

          <span className="text-[18px] font-bold text-[#4DD9E8]">
            {cta.nextCohortDate}
          </span>

          <span className="text-[11px] font-normal text-[#9999A6]">
            {cta.applicationDeadline}
          </span>
        </div>
      </div>
    </section>
  );
}
