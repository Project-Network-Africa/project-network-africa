import { MenteeProgressEntry } from "@/src/types/mentor/analytics";

interface MenteeProgressRowProps {
  entry: MenteeProgressEntry;
}

export default function MenteeProgressRow({ entry }: MenteeProgressRowProps) {
  const badgeStyles =
    entry.trend === "up"
      ? "bg-[#E0F7ED] text-[#1A804D]"
      : "bg-[#FEF2E0] text-[#B2401A]";
  return (
    <div className="flex items-center gap-4 py-3">
      <p className="w-[140px] shrink-0 text-sm font-medium text-[#1F1F25]">
        {entry.name}
      </p>

      <div className="h-2 flex-1 rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-[#00B6CE]"
          style={{ width: `${entry.percentage}%` }}
        />
      </div>

      <p className="w-10 shrink-0 text-right text-sm font-semibold text-[#1F1F25]">
        {entry.percentage}%
      </p>

      <span
        className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${badgeStyles}`}
      >
        {entry.changeLabel}
      </span>
    </div>
  );
}
