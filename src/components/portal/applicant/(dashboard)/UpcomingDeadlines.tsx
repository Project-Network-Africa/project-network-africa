import { UpcomingDeadlinesProps } from "./applicant-dashboard";

export default function UpcomingDeadlines({
  deadlines,
}: UpcomingDeadlinesProps) {
  return (
    <div
      className="
        flex
        w-full
        min-w-0
        flex-col
        gap-[14px]
        rounded-[14px]
        border
        border-[#E5E5EB]
        px-5
        py-5
        shadow-[0px_2px_8px_0px_#0000000A]
        sm:px-[22px]
      "
    >
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Upcoming Deadlines
      </p>

      <div className="flex flex-col gap-3">
        {deadlines.map((deadline) => (
          <div
            key={deadline.label}
            className="flex items-center justify-between gap-4"
          >
            <p className="min-w-0 truncate text-[12px] text-[#1F1F25]">
              {deadline.label}
            </p>

            <p className="shrink-0 text-[12px] font-semibold text-[#00B6CE]">
              {deadline.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
