// export interface Applicant {
//   id: number;
//   name: string;
//   programme: string;
//   cohort: string;
//   stage: ApplicantStage;
//   payment: PaymentStatus;
//   mentor: string;
//   applied: string;
//   risk: RiskLevel;
// }

// export type ApplicantStage =
//   | "Onboarding"
//   | "Interviewing"
//   | "Applied"
//   | "Matched"
//   | "Review";

// export type PaymentStatus = "Paid" | "Pending" | "Failed";

// export type RiskLevel = "Low" | "Medium" | "High";
export type ApplicantStage =
  | "Applied"
  | "Review"
  | "Interviewing"
  | "Matched"
  | "Onboarding";

export type PaymentStatus = "Paid" | "Pending" | "Failed";

export type ApplicantRisk = "Low" | "Medium" | "High";

export type ApplicantAction = "View" | "Assign" | "Resolve";

export interface Applicant {
  id: string;
  name: string;
  programme: string;
  cohort: string;
  stage: ApplicantStage;
  payment: PaymentStatus;
  mentor: string;
  applied: string;
  risk: ApplicantRisk;
  action: ApplicantAction;
}

export interface ApplicantFilters {
  search: string;
  programme: string;
  cohort: string;
  stage: string;
}
