import { TimelineItem } from "./timeline.types";

export default function TimelineCard({ step, title, color }: TimelineItem) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="flex h-9 w-9 items-center justify-center rounded-[10px] text-sm font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {step}
      </div>

      <h3 className="text-sm font-semibold text-[#1F1F25]">{title}</h3>
    </div>
  );
}
