import { supportTickets } from "@/src/data/applicant/help";

export default function SupportTickets() {
  return (
    <section className="min-h-[144px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        My Support Tickets
      </p>

      <div className="mt-4 flex flex-col gap-5">
        {supportTickets.map((ticket) => {
          const isResolved = ticket.status === "Resolved";

          return (
            <div
              key={ticket.id}
              className="flex items-center justify-between gap-4"
            >
              <p className="text-[13px] font-semibold text-[#1F1F25]">
                {ticket.title}
              </p>

              <span
                className={`shrink-0 rounded-full px-3 py-[4px] text-[11px] font-medium ${
                  isResolved
                    ? "bg-[#E5F7E9] text-[#299447]"
                    : "bg-[#FFF1D9] text-[#C47A00]"
                }`}
              >
                {ticket.status}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
