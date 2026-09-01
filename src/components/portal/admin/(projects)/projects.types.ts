export interface ProjectActivity {
  text: string;
  time: string;
}

export interface Project {
  // Table fields
  id: number;
  project: string;
  employer: string;
  cohort: string;
  mentor: string;
  team: string;
  progress: string;
  deadline: string;
  review: string;
  action: string;

  // Detail page fields
  description?: string;
  deliverables?: string[];

  successMetric?: string;
  employerOwner?: string;

  teamParticipants?: number;
  currentMilestone?: string;
  nextReview?: string;
  files?: string[];

  activities?: ProjectActivity[];
}

export interface ProjectStat {
  label: string;
  value: string;
  helper: string;
  helperColor?: string;
}

export interface ProjectFilter {
  label: string;
  value?: string;
}
