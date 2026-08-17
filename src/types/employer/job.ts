export type JobStatus = "Active" | "Closing Soon" | "Closed";

export type ApplicantStage =
  | "Applied"
  | "Shortlisted"
  | "Interviewing"
  | "Offered"
  | "Hired"
  | "Rejected";

export interface JobApplicant {
  id: string;
  name: string;
  initials: string;
  appliedDate: string;
  stage: ApplicantStage;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  employmentType: string;
  description: string;
  requirements: string;
  status: JobStatus;
  postedDate: string;
  applicants: JobApplicant[];
}
