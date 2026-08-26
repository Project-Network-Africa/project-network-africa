export interface PlatformStat {
  id: string;
  value: string;
  label: string;
  highlighted?: boolean;
}

export interface ApplicationData {
  id: string;
  value: number;
  highlighted?: boolean;
}

export interface PendingApproval {
  id: string;
  title: string;
  subtitle: string;
}

export type PlatformUserRole = "Applicant" | "Mentor" | "Employer";

export interface PlatformUser {
  id: string;
  initials: string;
  name: string;
  role: PlatformUserRole;
  status?: string;
  joined: string;
}
