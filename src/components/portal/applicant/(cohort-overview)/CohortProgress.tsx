interface CohortProgressProps {
  program: string;
  cohort: string;
  currentWeek: number;
  totalWeeks: number;
}

export default function CohortProgress({
  program,
  cohort,
  currentWeek,
  totalWeeks,
}: CohortProgressProps) {
  const progress = (currentWeek / totalWeeks) * 100;

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-[14px] text-[10px] font-semibold uppercase text-[#5D5D61]">
        {program} — {cohort}
      </p>

      <div className="flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E5E5EB]">
          <div
            className="h-full rounded-full bg-[#00B6CE]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="shrink-0 text-[13px] font-semibold text-[#1F1F25]">
          Week {currentWeek} of {totalWeeks}
        </span>
      </div>
    </section>
  );
}
