// export type MenteeStatus = "On Track" | "Needs Attention";

// export interface Mentee {
//   id: string;
//   name: string;
//   initials: string;
//   program: string;
//   status: MenteeStatus;
//   lastActivity: string;
// }
export type MenteeStatus = "On Track" | "Needs Attention";

export interface MenteeProject {
  id: string;
  name: string;
  status: string;
}

export interface Mentee {
  id: string;
  name: string;
  initials: string;
  program: string;
  cohort: string;
  status: MenteeStatus;
  lastActivity: string;

  currentWeek: number;
  totalWeeks: number;

  projects: MenteeProject[];

  privateNotes: string;
}
