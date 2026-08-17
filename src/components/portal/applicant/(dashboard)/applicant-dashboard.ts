export interface WelcomeBannerProps {
  name: string;
  progressSummary: string;
  buttonText: string;
  buttonHref: string;
}

export interface ProgressStage {
  label: string;
  complete: boolean;
}

export interface CourseProgressProps {
  percentage: number;
  stages: ProgressStage[];
}

export interface AssignedMentorProps {
  initials: string;
  avatarBg: string;
  name: string;
  role: string;
  onMessageClick?: () => void;
}

export interface CohortSummaryProps {
  cohortName: string;
  weekLabel: string;
}

export interface TeamMember {
  initials: string;
  avatarBg: string;
}

export interface AssignedTeamProps {
  members: TeamMember[];
}

export interface Deadline {
  label: string;
  date: string;
}

export interface UpcomingDeadlinesProps {
  deadlines: Deadline[];
}

export interface CurrentProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  href: string;
}

export interface NotificationItem {
  message: string;
}

export interface NotificationsProps {
  notifications: NotificationItem[];
}
