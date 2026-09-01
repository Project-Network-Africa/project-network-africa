export interface CohortActivity {
  text: string;
  time: string;
}

export interface Cohort {
  // Table fields
  id: number;
  cohort: string;
  programme: string;
  start: string;
  end: string;
  deadline: string;
  capacity: number;
  enrolled: number;
  completion: string;
  status: string;
  action: string;

  // Detail page fields
  programmeDuration?: string;
  applicationsClosed?: string;
  programmeLead?: string;
  currentPhase?: string;

  learnersOnTrack?: number;
  learnersAtRisk?: number;
  attendanceAverage?: string;

  mentors?: string[];
  curriculumModules?: number;
  completedModules?: number;
  activeProjects?: number;
  nextMilestoneReview?: string;
  finalShowcase?: string;

  activities?: CohortActivity[];
}

export interface CohortStat {
  label: string;
  value: string;
  helper: string;
  helperColor?: string;
}

export interface CohortFilter {
  label: string;
  value?: string;
}
