export interface ReviewCriterion {
  id: string;
  label: string;
  checked: boolean;
}

export type ValidationDecision = "pending" | "approved" | "changes_requested";

export interface ProjectValidation {
  id: string;
  title: string;
  submittedBy: string;
  submittedAt: string;
  imageUrl: string;
  criteria: ReviewCriterion[];
  decision: ValidationDecision;
}
