import { SessionHistoryProps } from "./mentorship";

export default function SessionHistory({ sessions }: SessionHistoryProps) {
  return (
    <div className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Session History
      </p>

      <div className="flex flex-col">
        {sessions.map((session, index) => (
          <div
            key={`${session.type}-${index}`}
            className="flex flex-col gap-1 py-2 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-[13px] text-[#1F1F25]">{session.type}</p>

            <p className="text-[11px] text-[#5D5D61]">{session.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
