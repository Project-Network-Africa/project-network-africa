// export interface Mentor {
//   id: number;
//   name: string;
//   expertise: string;
//   availability: string;
//   mentees: number;
//   capacity: number;
//   verification: string;
//   rating: string;
//   overdue: number;
//   lastActive: string;
//   action: string;
// }

export interface MentorStat {
  label: string;
  value: string;
  helper: string;
  helperColor?: string;
}

export interface MentorFilter {
  label: string;
  value?: string;
}
export interface MentorActivity {
  text: string;
  time: string;
}

export interface Mentor {
  id: number;

  // Table information
  name: string;
  expertise: string;
  availability: string;
  mentees: number;
  capacity: number;
  verification: string;
  rating: string;
  overdue: number;
  lastActive: string;
  action: string;

  // Details page information
  location?: string;
  joined?: string;
  phone?: string;
  secondaryExpertise?: string;
  yearsExperience?: string;
  availabilityHours?: string;
  profileVerified?: string;
  documents?: string;

  assignedCohort?: string;
  feedbackTurnaround?: string;
  attendance?: string;
  completionRate?: string;
  nextCapacityReview?: string;

  sessionsCompleted?: string;

  activities?: MentorActivity[];
}
