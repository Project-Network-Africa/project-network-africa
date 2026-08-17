export type MenteeStatus = "On Track" | "Needs Attention";

export interface AssignedMentee {
  id: string;
  name: string;
  initials: string;
  role: string;
  cohort: string;
  status: MenteeStatus;
}

export interface PendingReview {
  id: string;
  title: string;
  menteeName: string;
}

export interface RecentActivity {
  id: string;
  text: string;
}

export interface MentorDashboardData {
  stats: {
    assignedMentees: number;
    pendingReviews: number;
    upcomingMeetings: number;
    responseRate: number;
  };
  mentees: AssignedMentee[];
  pendingReviews: PendingReview[];
  recentActivity: RecentActivity[];
}
