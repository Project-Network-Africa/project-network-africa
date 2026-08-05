import { CohortCardProps } from "./cohort-card.types";

export default function CohortCard({
  title,
  week,
  applicants,
}: CohortCardProps) {
  return (
    <div className="rounded-[14px] border border-[#E5E5EB] bg-white p-6 transition-shadow hover:shadow-md">
      <h3 className="text-[16px] font-semibold text-[#1F1F25]">{title}</h3>

      <div className="mt-3 flex flex-col gap-2">
        <p className="text-[13px] text-[#5D5D61]">{week}</p>

        <p className="text-[13px] text-[#5D5D61]">{applicants}</p>
      </div>
    </div>
  );
}
