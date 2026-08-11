import { InstructorStat } from "../../../types/program";

export default function InstructorStatCard({ value, label }: InstructorStat) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-base font-bold text-[#1F1F25]">{value}</span>

      <span className="text-[11px] text-[#5D5D61]">{label}</span>
    </div>
  );
}
