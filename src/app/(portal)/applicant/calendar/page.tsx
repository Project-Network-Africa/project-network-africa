import AgendaCalendar from "@/src/components/portal/shared/Calendar/AgendaCalendar";
import { applicantCalendarEvents } from "@/src/data/applicant/calendar";

export default function ApplicantCalendarPage() {
  return (
    <div className="w-full space-y-[20px]">
      <AgendaCalendar events={applicantCalendarEvents} />
    </div>
  );
}
