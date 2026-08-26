export type MenteeProgressTrend = "up" | "down";

export interface MenteeAnalyticsStat {
  id: string;
  value: string;
  label: string;
}

export interface MenteeProgressEntry {
  id: string;
  menteeId: string;
  name: string;
  percentage: number;
  changeLabel: string;
  trend: MenteeProgressTrend;
}
