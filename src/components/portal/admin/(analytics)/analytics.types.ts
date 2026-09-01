export interface AnalyticsStat {
  label: string;
  value: string;
  helper: string;
}

export interface FunnelItem {
  label: string;
  value: number;
  percentage: string;
}

export interface RevenueItem {
  month: string;
  value: string;
  amount: number;
}

export interface CohortPerformanceItem {
  label: string;
  completion: number;
  completionLabel: string;
  atRisk: number;
}

export interface PerformanceMetric {
  value: string;
  label: string;
  valueClassName?: string;
}

export interface AnalyticsPerformance {
  title: string;
  metrics: PerformanceMetric[];
}
