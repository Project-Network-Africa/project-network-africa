import { Broadcast } from "@/src/types/mentor/broadcast";
import BroadcastHistoryItem from "./BroadcastHistoryItem";

interface BroadcastHistoryProps {
  broadcasts: Broadcast[];
}

export default function BroadcastHistory({
  broadcasts,
}: BroadcastHistoryProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Broadcast History
      </p>

      <div className="mt-[12px]">
        {broadcasts.map((broadcast, index) => (
          <BroadcastHistoryItem
            key={broadcast.id}
            broadcast={broadcast}
            showDivider={index !== broadcasts.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
