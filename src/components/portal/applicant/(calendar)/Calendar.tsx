"use client";

import { calendarEvents } from "@/src/data/applicant/calendar";

const eventStyles = {
  event: {
    bg: "bg-[#F0EDFF]",
    text: "text-[#6159F2]",
  },
  session: {
    bg: "bg-[#E6FAFC]",
    text: "text-[#00B6CE]",
  },
  deadline: {
    bg: "bg-[#FFF3DE]",
    text: "text-[#D98B00]",
  },
  payment: {
    bg: "bg-[#FFE9E9]",
    text: "text-[#E24A4A]",
  },
};

export default function Calendar() {
  return (
    <div className="flex w-full flex-col gap-5">
      {/* Upcoming Agenda */}
      <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
        <p className="mb-3 text-[10px] font-semibold uppercase text-[#5D5D61]">
          Upcoming Agenda
        </p>

        <div className="flex flex-col gap-3">
          {calendarEvents.map((event) => {
            const styles = eventStyles[event.type];

            return (
              <div key={event.id} className="flex flex-col gap-2">
                {/* Date */}
                <p className="text-[13px] font-semibold text-[#1F1F25]">
                  {event.date}
                </p>

                {/* Event row */}
                <div className="flex min-h-[40px] items-center justify-between rounded-[9px] bg-[#F8F8F8] px-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[9px] font-semibold uppercase ${styles.bg} ${styles.text}`}
                    >
                      {event.type}
                    </span>

                    <span className="truncate text-[13px] font-semibold text-[#1F1F25]">
                      {event.title}
                    </span>
                  </div>

                  <span className="ml-4 shrink-0 text-[12px] text-[#5D5D61]">
                    {event.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
