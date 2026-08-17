import { CourseProgressProps } from "./applicant-dashboard";

export default function CourseProgress({
  percentage,
  stages,
}: CourseProgressProps) {
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
        Course Progress
      </p>

      {/* Progress bar */}
      <div className="h-[10px] w-full rounded-full bg-[#EBEBF0]">
        <div
          className="h-full rounded-full bg-[#00B6CE]"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Stages */}
      <div className="flex flex-wrap justify-between gap-x-3 gap-y-2">
        {stages.map((stage) => (
          <span
            key={stage.label}
            className={`text-[11px] ${
              stage.complete
                ? "font-semibold text-[#1F1F25]"
                : "font-normal text-[#5D5D61]"
            }`}
          >
            {stage.label}
          </span>
        ))}
      </div>
    </div>
  );
}
