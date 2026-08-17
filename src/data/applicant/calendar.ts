export type CalendarEventType = "event" | "session" | "deadline" | "payment";

export interface CalendarEvent {
  id: string;
  date: string;
  type: CalendarEventType;
  title: string;
  time: string;
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: "1",
    date: "Today — Aug 5",
    type: "event",
    title: "Cohort town hall",
    time: "4:00 PM",
  },
  {
    id: "2",
    date: "Mon, Aug 10",
    type: "session",
    title: "Mentor session with Amara Okafor",
    time: "2:00 PM",
  },
  {
    id: "3",
    date: "Fri, Jul 18",
    type: "deadline",
    title: "Wireframe Submission due",
    time: "End of day",
  },
  {
    id: "4",
    date: "Mon, Jul 21",
    type: "deadline",
    title: "Peer Review due",
    time: "End of day",
  },
  {
    id: "5",
    date: "Aug 20",
    type: "event",
    title: "Demo Day",
    time: "10:00 AM",
  },
  {
    id: "6",
    date: "",
    type: "payment",
    title: "Tuition installment due",
    time: "End of day",
  },
];
