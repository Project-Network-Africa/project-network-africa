import { PastCohort } from "./past-cohort.types";

interface Props {
  cohorts: PastCohort[];
}

export default function PastCohortTable({ cohorts }: Props) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[#E5E5EB] bg-white">
      {/* Header */}
      <div className="grid grid-cols-4 bg-[#F9F6F3] px-[22px] py-[14px]">
        <p className="text-xs font-semibold text-[#1F1F25]">Cohort</p>
        <p className="text-xs font-semibold text-[#1F1F25]">Program</p>
        <p className="text-xs font-semibold text-[#1F1F25]">Graduates</p>
        <p className="text-xs font-semibold text-[#1F1F25]">Placement Rate</p>
      </div>

      {/* Rows */}
      {cohorts.map((item, index) => (
        <div
          key={item.cohort}
          className={`grid grid-cols-4 px-[22px] py-5 ${
            index !== cohorts.length - 1 ? "border-b border-[#E5E5EB]" : ""
          }`}
        >
          <p className="text-sm text-[#1F1F25]">{item.cohort}</p>

          <p className="text-sm text-[#1F1F25]">{item.program}</p>

          <p className="text-sm text-[#1F1F25]">{item.graduates}</p>

          <p className="text-sm font-semibold ">{item.placementRate}</p>
        </div>
      ))}
    </div>
  );
}
