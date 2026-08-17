import { NotificationsProps } from "./applicant-dashboard";

export default function Notifications({ notifications }: NotificationsProps) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] px-4 py-5 shadow-[0px_2px_8px_0px_#0000000A] sm:px-[22px]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Notifications
      </p>

      <div className="flex flex-col gap-3">
        {notifications.map((n, i) => (
          <div key={i} className="flex items-start gap-[10px]">
            <span className="mt-2 h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#00B6CE]" />

            <p className="text-[12px] leading-5 text-[#1F1F25]">{n.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
