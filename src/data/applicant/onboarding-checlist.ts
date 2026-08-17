export const onboardingSteps = [
  {
    id: "enrollment-agreement",
    title: "Sign enrollment agreement",
    status: "completed" as const,
    subtitle: "Completed",
  },
  {
    id: "tuition-deposit",
    title: "Submit tuition deposit",
    status: "completed" as const,
    subtitle: "Completed",
  },
  {
    id: "profile-setup",
    title: "Complete profile setup",
    status: "completed" as const,
    subtitle: "Completed",
  },
  {
    id: "slack-channel",
    title: "Join cohort Slack channel",
    status: "pending" as const,
    subtitle: "Pending",
  },
  {
    id: "orientation",
    title: "Attend orientation session",
    status: "scheduled" as const,
    subtitle: "Scheduled Sep 1, 2026",
  },
];
