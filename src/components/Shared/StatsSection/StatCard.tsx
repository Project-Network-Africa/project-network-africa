import { Stat } from "./stats.types";

export default function StatCard({ value, label, color }: Stat) {
  return (
    <div className="flex h-full flex-col items-center gap-2 text-center">
      <h3
        className="text-3xl font-bold leading-none sm:text-4xl lg:text-[40px]"
        style={{ color }}
      >
        {value}
      </h3>

      <p className="text-xs text-[#9E9EA8] sm:text-[13px]">{label}</p>
    </div>
  );
}
