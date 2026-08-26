export type MentorAvailability = "Available" | "Limited" | "Full" | "Inactive";

export type MentorVerification = "Verified" | "Pending";

export interface Mentor {
  id: number;
  name: string;
  expertise: string;
  availability: MentorAvailability;
  mentees: number;
  capacity: number;
  verification: MentorVerification;
  rating: number | null;
  overdue: number;
  lastActive: string;
}
