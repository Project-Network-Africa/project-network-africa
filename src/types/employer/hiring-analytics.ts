export interface AnalyticsStat {
  value: string;
  label: string;
}

export interface HiringFunnelItem {
  stage: string;
  count: number;
}

export interface ApplicantsByRoleItem {
  role: string;
  applicants: number;
}

export interface HiringAnalyticsData {
  stats: AnalyticsStat[];
  funnel: HiringFunnelItem[];
  applicantsByRole: ApplicantsByRoleItem[];
}
