export type InterviewStatus = "Confirmed" | "Pending";

export interface Interview {
  id: string;
  candidateName: string;
  candidateInitials: string;
  role: string;
  date: string;
  time: string;
  status: InterviewStatus;
}

export interface InterviewCandidate {
  id: string;
  name: string;
}

export interface InterviewJob {
  id: string;
  title: string;
}
