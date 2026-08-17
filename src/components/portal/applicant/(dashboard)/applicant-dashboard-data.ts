export const dashboardData = {
  userInitials: "AO",
  notificationCount: 3,

  welcome: {
    name: "Amara",
    progressSummary:
      "You're 68% through the Product Design Bootcamp — Cohort 6",
    buttonText: "View Cohort",
    buttonHref: "/applicant/cohort-overview",
  },

  courseProgress: {
    percentage: 68,
    stages: [
      { label: "Applied", complete: true },
      { label: "Interview", complete: true },
      { label: "Cohort Match", complete: true },
      { label: "Onboarding", complete: false },
    ],
  },

  mentor: {
    initials: "AO",
    avatarBg: "#1F1F25",
    name: "Amara Okafor",
    role: "Senior Product Designer",
  },

  cohortSummary: {
    cohortName: "Product Design — Cohort 6",
    weekLabel: "Week 8 of 12",
  },

  team: {
    members: [
      { initials: "AO", avatarBg: "#00B6CE" },
      { initials: "TB", avatarBg: "#1F1F25" },
      { initials: "ZM", avatarBg: "#00B6CE" },
      { initials: "KA", avatarBg: "#1F1F25" },
    ],
  },

  deadlines: [
    { label: "Wireframe Submission", date: "Jul 18" },
    { label: "Peer Review", date: "Jul 21" },
  ],

  currentProject: {
    imageSrc: "/images/programs/mobile-app.jpg",
    title: "Project Alpha — Fintech Onboarding Flow",
    description:
      "Redesigning the onboarding experience for a partner fintech app.",
    href: "/applicant/projects/fintech-onboarding",
  },

  notifications: [
    { message: "Your mentor left new feedback" },
    { message: "Cohort town hall scheduled for Friday" },
    { message: "Payment receipt available" },
  ],
};
