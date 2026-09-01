import {
  ReportBuilderData,
  ReportHistoryItem,
  ReportType,
  ScheduledReport,
} from "./reports.types";

/* =========================================================
   REPORT TYPES
========================================================= */

export const reportTypes: ReportType[] = [
  {
    id: 1,
    title: "Cohort Outcomes",
    description: "Completion, retention and placement by cohort",
    frequency: "Updated weekly",
  },
  {
    id: 2,
    title: "Revenue",
    description: "Collections, failures, refunds and gateway split",
    frequency: "Updated daily",
  },
  {
    id: 3,
    title: "Mentor Activity",
    description: "Sessions, ratings and feedback turnaround",
    frequency: "Updated weekly",
  },
  // {
  //   id: 4,
  //   title: "Employer Pipeline",
  //   description: "Opportunities, reviews and placements",
  //   frequency: "Updated daily",
  // },
];

/* =========================================================
   REPORT HISTORY
========================================================= */

export const reportHistory: ReportHistoryItem[] = [
  {
    id: 1,
    name: "Cohort 6 Weekly Outcomes",
    format: "PDF",
    date: "18 Aug 2026",
    status: "Ready",
  },
  {
    id: 2,
    name: "July Revenue Reconciliation",
    format: "CSV",
    date: "15 Aug 2026",
    status: "Ready",
  },
  {
    id: 3,
    name: "Mentor Feedback Audit",
    format: "PDF",
    date: "12 Aug 2026",
    status: "Ready",
  },
  {
    id: 4,
    name: "Employer Pipeline Snapshot",
    format: "CSV",
    date: "10 Aug 2026",
    status: "Processing",
  },
];

/* =========================================================
   SCHEDULED REPORTS
========================================================= */

export const scheduledReports: ScheduledReport[] = [
  {
    id: 1,
    name: "Weekly cohort outcomes",
    schedule: "Every Monday · 08:00",
    recipients: "3 recipients",
  },
  {
    id: 2,
    name: "Monthly revenue report",
    schedule: "1st of month · 09:00",
    recipients: "Finance team",
  },
  {
    id: 3,
    name: "Mentor activity digest",
    schedule: "Every Friday · 16:00",
    recipients: "Programme leads",
  },
];

/* =========================================================
   CUSTOM REPORT BUILDER
========================================================= */

export const reportBuilderData: ReportBuilderData = {
  datasets: [
    {
      label: "Applicants",
      value: "applicants",
    },
    {
      label: "Cohorts",
      value: "cohorts",
    },
    {
      label: "Mentors",
      value: "mentors",
    },
    {
      label: "Employers",
      value: "employers",
    },
    {
      label: "Projects",
      value: "projects",
    },
    {
      label: "Payments",
      value: "payments",
    },
  ],

  dateRanges: [
    {
      label: "Last 7 days",
      value: "7-days",
    },
    {
      label: "Last 30 days",
      value: "30-days",
    },
    {
      label: "Last 90 days",
      value: "90-days",
    },
    {
      label: "This year",
      value: "this-year",
    },
  ],

  groupBy: [
    {
      label: "Cohort",
      value: "cohort",
    },
    {
      label: "Programme",
      value: "programme",
    },
    {
      label: "Month",
      value: "month",
    },
    {
      label: "Status",
      value: "status",
    },
  ],

  metrics: [
    {
      label: "Count",
      value: "count",
    },
    {
      label: "Completion rate",
      value: "completion",
    },
    {
      label: "Placement rate",
      value: "placement",
    },
    {
      label: "Revenue",
      value: "revenue",
    },
  ],

  formats: [
    {
      label: "CSV",
      value: "csv",
    },
    {
      label: "PDF",
      value: "pdf",
    },
  ],
};
