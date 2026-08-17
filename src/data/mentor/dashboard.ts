import { MentorDashboardData } from "@/src/types/mentor/dashboard";

export const mentorDashboardData: MentorDashboardData = {
  stats: {
    assignedMentees: 8,
    pendingReviews: 3,
    upcomingMeetings: 5,
    responseRate: 96,
  },

  mentees: [
    {
      id: "mentee-1",
      name: "Amara Okafor",
      initials: "AO",
      role: "Product Design",
      cohort: "Cohort 6",
      status: "On Track",
    },
    {
      id: "mentee-2",
      name: "Tunde Bello",
      initials: "TB",
      role: "Software Eng",
      cohort: "Cohort 5",
      status: "Needs Attention",
    },
    {
      id: "mentee-3",
      name: "Zainab Musa",
      initials: "ZM",
      role: "Product Design",
      cohort: "Cohort 6",
      status: "On Track",
    },
  ],

  pendingReviews: [
    {
      id: "review-1",
      title: "Wireframe Submission",
      menteeName: "Amara O.",
    },
    {
      id: "review-2",
      title: "Capstone Draft",
      menteeName: "Zainab M.",
    },
  ],

  recentActivity: [
    {
      id: "activity-1",
      text: "Reviewed Tunde's project submission",
    },
    {
      id: "activity-2",
      text: "Left feedback for Amara O.",
    },
    {
      id: "activity-3",
      text: "Completed 1:1 with Zainab M.",
    },
  ],
};
