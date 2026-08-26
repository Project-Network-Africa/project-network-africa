export type CalendarEventType =
  | "event"
  | "session"
  | "deadline"
  | "payment"
  | "review"
  | "meeting";
export interface CalendarEvent {
  id: string;
  dateLabel: string;
  title: string;
  time: string;
  type: CalendarEventType;
}
