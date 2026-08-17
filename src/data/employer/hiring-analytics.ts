import { HiringAnalyticsData } from "@/src/types/employer/hiring-analytics";

export const hiringAnalyticsData: HiringAnalyticsData = {
  stats: [
    {
      value: "77",
      label: "Total Applicants (30d)",
    },
    {
      value: "18%",
      label: "Applied → Interview Rate",
    },
    {
      value: "9 days",
      label: "Avg. Time to Hire",
    },
    {
      value: "3",
      label: "Hires This Quarter",
    },
  ],

  funnel: [
    {
      stage: "Applied",
      count: 77,
    },
    {
      stage: "Screened",
      count: 41,
    },
    {
      stage: "Interviewed",
      count: 18,
    },
    {
      stage: "Offered",
      count: 5,
    },
    {
      stage: "Hired",
      count: 3,
    },
  ],

  applicantsByRole: [
    {
      role: "Junior Product Designer",
      applicants: 24,
    },
    {
      role: "Backend Engineer (Node.js)",
      applicants: 41,
    },
    {
      role: "Data Analyst Intern",
      applicants: 12,
    },
  ],
};
