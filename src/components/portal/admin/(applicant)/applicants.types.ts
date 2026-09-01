export type ApplicantStage =
  | "Applied"
  | "Review"
  | "Interviewing"
  | "Matched"
  | "Onboarding";

export type PaymentStatus = "Paid" | "Pending" | "Failed";

export type ApplicantRisk = "Low" | "Medium" | "High";

export type ApplicantAction = "View" | "Assign" | "Resolve";

export interface ApplicantFilters {
  search: string;
  programme: string;
  cohort: string;
  stage: string;
}

export interface ApplicantActivity {
  text: string;
  time: string;
}

export interface Applicant {
  id: string;
  name: string;
  email: string;
  programme: string;
  cohort: string;
  stage: string;
  payment: string;
  mentor: string;
  applied: string;
  risk: string;
  action: string;

  applicationScore: string;
  assessmentScore: string;

  location: string;
  education: string;
  experience: string;
  preferredTrack: string;
  documents: string;

  submissionSummary: string;
  responses: string;
  assessmentSummary: string;
  assignedMentor: string;
  adminNote: string;

  activities: ApplicantActivity[];
}
