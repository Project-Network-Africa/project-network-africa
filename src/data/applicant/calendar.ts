import { CalendarEvent } from "@/src/types/shared/calendar";
export const applicantCalendarEvents: CalendarEvent[] = [
  {
    id: "1",
    dateLabel: "Today — Aug 5",
    type: "event",
    title: "Cohort town hall",
    time: "4:00 PM",
  },
  {
    id: "2",
    dateLabel: "Mon, Aug 10",
    type: "session",
    title: "Mentor session with Amara Okafor",
    time: "2:00 PM",
  },
  {
    id: "3",
    dateLabel: "Fri, Jul 18",
    type: "deadline",
    title: "Wireframe Submission due",
    time: "End of day",
  },
  {
    id: "4",
    dateLabel: "Mon, Jul 21",
    type: "deadline",
    title: "Peer Review due",
    time: "End of day",
  },
  {
    id: "5",
    dateLabel: "Aug 20",
    type: "event",
    title: "Demo Day",
    time: "10:00 AM",
  },
  {
    id: "6",
    dateLabel: "",
    type: "payment",
    title: "Tuition installment due",
    time: "End of day",
  },
];
