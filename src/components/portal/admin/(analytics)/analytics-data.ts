import {
  AnalyticsStat,
  FunnelItem,
  RevenueItem,
  CohortPerformanceItem,
  AnalyticsPerformance,
} from "./analytics.types";

/* =========================================================
   TOP STATS
========================================================= */

export const analyticsStats: AnalyticsStat[] = [
  {
    label: "Applications",
    value: "3,240",
    helper: "↑ 14% vs prior period",
  },
  {
    label: "Cohort retention",
    value: "78%",
    helper: "↑ 4.2%",
  },
  {
    label: "Placement rate",
    value: "92%",
    helper: "↑ 3.1%",
  },
  {
    label: "Revenue YTD",
    value: "₦48.2M",
    helper: "↑ 8.4%",
  },
];

/* =========================================================
   APPLICATION FUNNEL
========================================================= */

export const applicationFunnel: FunnelItem[] = [
  {
    label: "Applied",
    value: 3240,
    percentage: "100%",
  },
  {
    label: "Interviewed",
    value: 2486,
    percentage: "77%",
  },
  {
    label: "Matched",
    value: 1706,
    percentage: "53%",
  },
  {
    label: "Onboarded",
    value: 1418,
    percentage: "44%",
  },
];

/* =========================================================
   REVENUE TREND
========================================================= */

export const revenueTrend: RevenueItem[] = [
  {
    month: "June",
    value: "₦3.4M",
    amount: 3.4,
  },
  {
    month: "July",
    value: "₦4.1M",
    amount: 4.1,
  },
  {
    month: "August",
    value: "₦5.3M",
    amount: 5.3,
  },
];

export const revenueSummary = {
  total: "₦12.8M",
  helper: "Current quarter · +11.2%",
};

/* =========================================================
   COHORT PERFORMANCE
========================================================= */

export const cohortPerformance: CohortPerformanceItem[] = [
  {
    label: "Product Design · C6",
    completion: 78,
    completionLabel: "78% complete",
    atRisk: 6,
  },
  {
    label: "Software Engineering · C4",
    completion: 64,
    completionLabel: "64% complete",
    atRisk: 9,
  },
  {
    label: "Data Analytics · C3",
    completion: 86,
    completionLabel: "86% complete",
    atRisk: 3,
  },
  {
    label: "Project Management · C2",
    completion: 52,
    completionLabel: "52% complete",
    atRisk: 8,
  },
];

/* =========================================================
   MENTOR PERFORMANCE
========================================================= */

export const mentorPerformance: AnalyticsPerformance = {
  title: "Mentor performance",

  metrics: [
    {
      value: "4.6 / 5",
      label: "Average rating",
    },
    {
      value: "1,284",
      label: "Sessions completed",
      valueClassName: "text-[#00B6CE]",
    },
    {
      value: "12",
      label: "Overdue feedback reviews",
      valueClassName: "text-[#DC2727]",
    },
  ],
};

/* =========================================================
   EMPLOYER ACTIVITY
========================================================= */

export const employerActivity: AnalyticsPerformance = {
  title: "Employer activity",

  metrics: [
    {
      value: "18",
      label: "Verified employers",
    },
    {
      value: "27",
      label: "Candidates under review",
      valueClassName: "text-[#F26B21]",
    },
    {
      value: "6",
      label: "Successful placements",
      valueClassName: "text-[#008F58]",
    },
  ],
};
