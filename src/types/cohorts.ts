export interface Cohort {
  id: number;
  slug: string;

  program: string;
  category: string;
  name: string;
  shortDescription: string;

  status:
    | "Open"
    | "Closed"
    | "Waitlist Only"
    | "Filling Fast"
    | "Starting Soon";

  mentor: {
    initials: string;
    avatarBg: string;
    role: string;
    name: string;
  };

  format: "Online" | "Hybrid" | "In Person";

  hoursPerWeek: string;

  startDate: string;
  applyBy: string;
  tuition: string;

  seatsFilled: number;
  totalSeats: number;
}
