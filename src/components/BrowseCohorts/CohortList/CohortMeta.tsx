import { CohortMetaProps } from "./cohort-list.types";

export default function CohortMeta({ label, value }: CohortMetaProps) {
  return (
    <div className="flex flex-col gap-[2px]">
      <span className="text-[9px] font-semibold uppercase text-[#5D5D61]">
        {label}
      </span>

      <span className="text-[12px] font-semibold text-[#1F1F25]">{value}</span>
    </div>
  );
}
