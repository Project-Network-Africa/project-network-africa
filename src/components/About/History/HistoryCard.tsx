import { HistoryItem } from "./history.types";

export default function HistoryCard({ year, description }: HistoryItem) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-bold text-[#00B6CE]">{year}</h3>

      <p className="text-[13px] leading-6 text-[#5D5D61]">{description}</p>
    </div>
  );
}
