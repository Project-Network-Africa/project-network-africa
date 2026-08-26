import AgendaCalendar from "@/src/components/portal/shared/Calendar/AgendaCalendar";
import { mentorCalendarEvents } from "@/src/data/mentor/calendar";

export default function MentorCalendarPage() {
  return (
    <div className="w-full space-y-[20px]">
      <AgendaCalendar events={mentorCalendarEvents} />
    </div>
  );
}
