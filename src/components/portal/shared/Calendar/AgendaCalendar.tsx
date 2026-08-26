import { CalendarEvent } from "@/src/types/shared/calendar";
import AgendaItem from "./AgendaItem";

interface AgendaCalendarProps {
  events: CalendarEvent[];
  title?: string;
}

export default function AgendaCalendar({
  events,
  title = "Upcoming Agenda",
}: AgendaCalendarProps) {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        {title}
      </p>

      <div className="mt-[13px] space-y-[12px]">
        {events.map((event, index) => {
          const previousEvent = events[index - 1];

          const showDate =
            index === 0 || previousEvent?.dateLabel !== event.dateLabel;

          return (
            <div key={event.id}>
              {showDate && (
                <p className="mb-[10px] text-[12px] font-semibold text-[#1F1F25]">
                  {event.dateLabel}
                </p>
              )}

              <AgendaItem event={event} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
