export interface CandidateProject {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Candidate {
  id: string;
  name: string;
  initials: string;
  role: string;
  cohort: string;
  profileImage?: string;

  skills: string[];
  endorsement: string;

  portfolio: CandidateProject[];
}
