export type UpcomingCohortStatus = "OPEN" | "FILLING FAST" | "WAITLIST";

export interface UpcomingCohort {
  id: string;
  programme: string;
  status: UpcomingCohortStatus;
  startDate: string;
  format: string;
  tuition: string;
}

export interface UpcomingCohortsProps {
  eyebrow?: string;
  title?: string;
  cohorts: UpcomingCohort[];
  buttonText?: string;
  buttonHref?: string;
  backgroundClassName?: string;
}
