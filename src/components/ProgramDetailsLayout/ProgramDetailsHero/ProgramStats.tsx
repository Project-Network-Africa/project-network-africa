import { ProgramStat } from "../../../types/program";

export default function ProgramStatCard({ label, value }: ProgramStat) {
  return (
    <div className="flex flex-col gap-1 pr-8">
      <span className="text-[10px] font-semibold uppercase tracking-[1px] text-[#1F1F25]">
        {label}
      </span>

      <span className="text-base font-semibold text-[#1F1F25]">{value}</span>
    </div>
  );
}
