import { CohortSummaryProps } from "./applicant-dashboard";

export default function CohortSummary({
  cohortName,
  weekLabel,
}: CohortSummaryProps) {
  return (
    <div
      className="
        flex
        w-full
        min-w-0
        items-center
        gap-3
        rounded-[14px]
        border
        border-[#E5E5EB]
        px-5
        py-5
        shadow-[0px_2px_8px_0px_#0000000A]
        sm:px-[22px]
      "
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#00B6CE] text-white">
        ◐
      </div>

      <div className="min-w-0">
        <p className="truncate text-[14px] font-semibold text-[#1F1F25]">
          {cohortName}
        </p>

        <p className="truncate text-[11px] text-[#5D5D61]">{weekLabel}</p>
      </div>
    </div>
  );
}
