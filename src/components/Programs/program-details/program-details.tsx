import Button from "../../ui/Button";
import SectionHeader from "../../ui/SectionHeader";
import ProgramPreview from "../program-preview";

import { Program } from "../../../types/program";

interface ProgramDetailsProps {
  program: Program;
}

export default function ProgramDetails({ program }: ProgramDetailsProps) {
  return (
    <section className="w-full bg-[#F8F8F8] px-4 py-12 sm:px-6 md:px-8 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 rounded-[20px] bg-white p-5 sm:p-6 lg:flex-row lg:items-center lg:gap-12 lg:p-[30px]">
        {/* Preview */}
        <div className="w-full lg:max-w-[480px]">
          <ProgramPreview />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4">
          <SectionHeader label={program.label} title={program.heroTitle} />

          <p className="max-w-[640px] text-[13px] leading-6 text-[#5D5D61] sm:text-[10px] sm:leading-7 lg:text-[15px]">
            {program.description}
          </p>

          {/* Stats */}
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-8">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-wide text-[#5D5D61] sm:text-[10px]">
                Duration
              </p>

              <p className="mt-1 text-xs font-semibold text-[#1F1F25] sm:text-[13px] lg:text-sm">
                {program.duration}
              </p>
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-wide text-[#5D5D61] sm:text-[10px]">
                Format
              </p>

              <p className="mt-1 text-xs font-semibold text-[#1F1F25] sm:text-[13px] lg:text-sm">
                {program.format}
              </p>
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-wide text-[#5D5D61] sm:text-[10px]">
                Eligibility
              </p>

              <p className="mt-1 text-xs font-semibold text-[#1F1F25] sm:text-[13px] lg:text-sm">
                {program.eligibility}
              </p>
            </div>
          </div>

          <Button
            href="/apply"
            className="mt-5 w-full rounded-[10px] py-3 text-sm sm:w-fit sm:px-6 lg:mt-6 lg:py-[14px]"
          >
            Apply to this Program
          </Button>
        </div>
      </div>
    </section>
  );
}
