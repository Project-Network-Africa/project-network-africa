import { Broadcast } from "@/src/types/mentor/broadcast";

interface BroadcastHistoryItemProps {
  broadcast: Broadcast;
  showDivider?: boolean;
}

export default function BroadcastHistoryItem({
  broadcast,
  showDivider = true,
}: BroadcastHistoryItemProps) {
  return (
    <div
      className={`py-[10px] ${showDivider ? "border-b border-[#E5E5EB]" : ""}`}
    >
      <p className="text-[12px] font-semibold leading-[140%] text-[#1F1F25]">
        {broadcast.message}
      </p>

      <p className="mt-[2px] text-[11px] text-[#5D5D61]">{broadcast.timeAgo}</p>
    </div>
  );
}
