import {
  MenteeAnalyticsStat,
  MenteeProgressEntry,
} from "@/src/types/mentor/analytics";

// TODO: replace with real analytics endpoint once backend metrics are available
export const mentorAnalyticsStats: MenteeAnalyticsStat[] = [
  { id: "completion-rate", value: "82%", label: "Avg. Completion Rate" },
  { id: "satisfaction", value: "4.7", label: "Avg. Mentee Satisfaction" },
  { id: "response-rate", value: "96%", label: "Response Rate" },
  { id: "days-to-review", value: "1.2", label: "Avg. Days to Review" },
];

// TODO: derive from mentorMentees + activity history once real progress data exists
export const menteeProgressOverTime: MenteeProgressEntry[] = [
  {
    id: "progress-1",
    menteeId: "mentee-1",
    name: "Amara Okafor",
    percentage: 68,
    changeLabel: "+12% this month",
    trend: "up",
  },
  {
    id: "progress-2",
    menteeId: "mentee-2",
    name: "Tunde Bello",
    percentage: 41,
    changeLabel: "-4% this month",
    trend: "down",
  },
  {
    id: "progress-3",
    menteeId: "mentee-3",
    name: "Zainab Musa",
    percentage: 74,
    changeLabel: "+8% this month",
    trend: "up",
  },
];
