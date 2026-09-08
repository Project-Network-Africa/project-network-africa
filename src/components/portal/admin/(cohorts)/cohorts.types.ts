export interface CohortActivity {
  text: string;
  time: string;
}

// export interface Cohort {
//   // Table fields
//   id: number;
//   cohort: string;
//   programme: string;
//   start: string;
//   end: string;
//   deadline: string;
//   capacity: number;
//   enrolled: number;
//   completion: string;
//   status: string;
//   action: string;

//   // Detail page fields
//   programmeDuration?: string;
//   applicationsClosed?: string;
//   programmeLead?: string;
//   currentPhase?: string;

//   learnersOnTrack?: number;
//   learnersAtRisk?: number;
//   attendanceAverage?: string;

//   mentors?: string[];
//   curriculumModules?: number;
//   completedModules?: number;
//   activeProjects?: number;
//   nextMilestoneReview?: string;
//   finalShowcase?: string;

//   activities?: CohortActivity[];
// }
// export interface Cohort {
//   // id: string;
//   // cohort: string;
//   // programme: string;
//   // start: string;
//   // end: string;
//   // deadline: string;
//   // capacity: number;
//   // enrolled: number;
//   // completion: string;
//   // status: string;
//   // action: string;

//   id: string;
//   cohort: string;
//   programme: string;
//   start: string;
//   end: string;
//   capacity: number;
//   enrolled: number;
//   mentors?: string[];
//   applicants?: { _id: string }[];
//   isOpen: boolean;
//   status: string;
//   description?: string;
//   activities?: [];
// }

export interface Cohort {
  id: string;
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
  isOpen: boolean;
  description?: string;
  mentors?: string[];
  applicants?: { _id: string }[];
  activities?: {
    text: string;
    time: string;
  }[];
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
