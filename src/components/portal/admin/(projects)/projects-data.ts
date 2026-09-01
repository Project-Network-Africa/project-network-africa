import { Project, ProjectFilter, ProjectStat } from "./projects.types";

/* =========================================================
   STATS
========================================================= */

export const projectStats: ProjectStat[] = [
  {
    label: "Active projects",
    value: "48",
    helper: "12 due this month",
    helperColor: "text-[#00B6CE]",
  },
  {
    label: "At-risk projects",
    value: "6",
    helper: "Needs intervention",
    helperColor: "text-[#00B6CE]",
  },
  {
    label: "Completed this year",
    value: "112",
    helper: "87% on time",
    helperColor: "text-[#00B6CE]",
  },
  {
    label: "Overdue reviews",
    value: "9",
    helper: "Oldest 5 days",
    helperColor: "text-[#00B6CE]",
  },
];

/* =========================================================
   FILTERS
========================================================= */

export const projectFilters: ProjectFilter[] = [
  {
    label: "All cohorts",
    value: "all",
  },
  {
    label: "Project health",
    value: "all",
  },
  {
    label: "Review status",
    value: "all",
  },
];

/* =========================================================
   PROJECTS
========================================================= */

export const projects: Project[] = [
  {
    id: 1,

    project: "Fintech Onboarding Flow",
    employer: "Flutterwave",
    cohort: "Cohort 6",
    mentor: "Amara Okafor",
    team: "Team Alpha",

    progress: "72%",
    deadline: "18 Aug 2026",
    review: "On track",
    action: "View",

    description: "Redesign onboarding for new merchant accounts",

    deliverables: ["Research report", "User flows", "Hi-fi prototype"],

    successMetric: "20% faster completion",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "Usability testing",

    nextReview: "20 Aug 2026",

    files: ["Brief", "Research", "Prototype", "Report"],

    activities: [
      {
        text: "Usability test plan submitted",
        time: "3 hrs ago",
      },
      {
        text: "Mentor feedback added",
        time: "Yesterday",
      },
      {
        text: "Hi-fi prototype completed",
        time: "3 days ago",
      },
      {
        text: "Midpoint review approved",
        time: "1 week ago",
      },
      {
        text: "Project assigned to Team Alpha",
        time: "2 Jun 2026",
      },
    ],
  },

  {
    id: 2,

    project: "Checkout Redesign",
    employer: "Paystack",
    cohort: "Cohort 6",
    mentor: "Kwame Asante",
    team: "Team Beta",

    progress: "48%",
    deadline: "22 Aug 2026",
    review: "At risk",
    action: "Review",

    description:
      "Improve the checkout experience for faster and easier payments.",

    deliverables: ["User research", "Checkout flows", "Hi-fi prototype"],

    successMetric: "15% faster checkout completion",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "Prototype review",

    nextReview: "22 Aug 2026",

    files: ["Brief", "Research", "Prototype"],

    activities: [
      {
        text: "Prototype review requested",
        time: "4 hrs ago",
      },
      {
        text: "Mentor feedback added",
        time: "Yesterday",
      },
      {
        text: "User research completed",
        time: "4 days ago",
      },
      {
        text: "Project assigned to Team Beta",
        time: "2 Jun 2026",
      },
    ],
  },

  {
    id: 3,

    project: "Health Booking App",
    employer: "HealthPlus",
    cohort: "Cohort 6",
    mentor: "Amara Okafor",
    team: "Team Alpha",

    progress: "72%",
    deadline: "18 Aug 2026",
    review: "On track",
    action: "View",

    description: "Design a healthcare booking experience for patients.",

    deliverables: ["User research", "Booking flow", "Hi-fi prototype"],

    successMetric: "20% faster booking completion",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "Usability testing",

    nextReview: "20 Aug 2026",

    files: ["Brief", "Research", "Prototype", "Report"],

    activities: [
      {
        text: "Usability test plan submitted",
        time: "3 hrs ago",
      },
      {
        text: "Mentor feedback added",
        time: "Yesterday",
      },
      {
        text: "Prototype completed",
        time: "3 days ago",
      },
      {
        text: "Project assigned to Team Alpha",
        time: "2 Jun 2026",
      },
    ],
  },

  {
    id: 4,

    project: "Talent Dashboard",
    employer: "Andela",
    cohort: "Cohort 4",
    mentor: "Zainab Musa",
    team: "Team Delta",

    progress: "100%",
    deadline: "30 Jul 2026",
    review: "Approved",
    action: "View",

    description: "Build a dashboard for managing and reviewing talent.",

    deliverables: [
      "Dashboard research",
      "User flows",
      "Dashboard prototype",
      "Final report",
    ],

    successMetric: "Improved talent management workflow",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "Project completed",

    nextReview: "Completed",

    files: ["Brief", "Research", "Prototype", "Report"],

    activities: [
      {
        text: "Final project approved",
        time: "Yesterday",
      },
      {
        text: "Final report submitted",
        time: "3 days ago",
      },
      {
        text: "Final review completed",
        time: "1 week ago",
      },
      {
        text: "Project assigned to Team Delta",
        time: "2 Jun 2026",
      },
    ],
  },

  {
    id: 5,

    project: "Learning Platform",
    employer: "Flutterwave",
    cohort: "Cohort 5",
    mentor: "Tunde Bello",
    team: "Team Gamma",

    progress: "64%",
    deadline: "25 Aug 2026",
    review: "On track",
    action: "View",

    description: "Design a learning platform experience for users.",

    deliverables: ["Research report", "User flows", "Hi-fi prototype"],

    successMetric: "Increase course completion",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "Design review",

    nextReview: "25 Aug 2026",

    files: ["Brief", "Research", "Prototype"],

    activities: [
      {
        text: "Design review submitted",
        time: "2 hrs ago",
      },
      {
        text: "Mentor feedback added",
        time: "Yesterday",
      },
      {
        text: "User flows completed",
        time: "4 days ago",
      },
    ],
  },

  {
    id: 6,

    project: "Mobile Banking App",
    employer: "Paystack",
    cohort: "Cohort 5",
    mentor: "Kwame Asante",
    team: "Team Beta",

    progress: "39%",
    deadline: "28 Aug 2026",
    review: "At risk",
    action: "Review",

    description: "Improve the mobile banking experience for users.",

    deliverables: ["User research", "Mobile flows", "Prototype"],

    successMetric: "Reduce task completion time",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "User research",

    nextReview: "28 Aug 2026",

    files: ["Brief", "Research", "Prototype"],

    activities: [
      {
        text: "Project marked at risk",
        time: "2 hrs ago",
      },
      {
        text: "Mentor review requested",
        time: "Yesterday",
      },
      {
        text: "Research started",
        time: "5 days ago",
      },
    ],
  },

  {
    id: 7,

    project: "Healthcare Portal",
    employer: "HealthPlus",
    cohort: "Cohort 4",
    mentor: "Amara Okafor",
    team: "Team Alpha",

    progress: "88%",
    deadline: "29 Aug 2026",
    review: "On track",
    action: "View",

    description: "Design a portal for managing healthcare services.",

    deliverables: ["Research", "User flows", "Portal prototype"],

    successMetric: "Faster healthcare service access",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "Final review",

    nextReview: "29 Aug 2026",

    files: ["Brief", "Research", "Prototype"],

    activities: [
      {
        text: "Final review scheduled",
        time: "3 hrs ago",
      },
      {
        text: "Prototype completed",
        time: "2 days ago",
      },
    ],
  },

  {
    id: 8,

    project: "Employer Dashboard",
    employer: "Andela",
    cohort: "Cohort 4",
    mentor: "Zainab Musa",
    team: "Team Delta",

    progress: "91%",
    deadline: "30 Aug 2026",
    review: "Approved",
    action: "View",

    description: "Create a dashboard for employers to manage their projects.",

    deliverables: ["Research", "Dashboard flows", "Prototype", "Report"],

    successMetric: "Improve employer workflow",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "Final approval",

    nextReview: "30 Aug 2026",

    files: ["Brief", "Research", "Prototype", "Report"],

    activities: [
      {
        text: "Final approval received",
        time: "Yesterday",
      },
      {
        text: "Dashboard prototype completed",
        time: "3 days ago",
      },
    ],
  },

  {
    id: 9,

    project: "E-commerce Experience",
    employer: "Flutterwave",
    cohort: "Cohort 6",
    mentor: "Tunde Bello",
    team: "Team Gamma",

    progress: "55%",
    deadline: "2 Sep 2026",
    review: "On track",
    action: "View",

    description: "Improve the e-commerce shopping experience.",

    deliverables: ["Research", "Shopping flows", "Prototype"],

    successMetric: "Improve checkout conversion",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "User testing",

    nextReview: "2 Sep 2026",

    files: ["Brief", "Research", "Prototype"],

    activities: [
      {
        text: "User testing started",
        time: "Today",
      },
      {
        text: "Prototype completed",
        time: "4 days ago",
      },
    ],
  },

  {
    id: 10,

    project: "Data Analytics Portal",
    employer: "Andela",
    cohort: "Cohort 3",
    mentor: "Zainab Musa",
    team: "Team Delta",

    progress: "67%",
    deadline: "5 Sep 2026",
    review: "On track",
    action: "View",

    description: "Design a data analytics portal for employers.",

    deliverables: ["Data research", "Dashboard flows", "Analytics prototype"],

    successMetric: "Improve reporting efficiency",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "Dashboard design",

    nextReview: "5 Sep 2026",

    files: ["Brief", "Research", "Prototype"],

    activities: [
      {
        text: "Dashboard design submitted",
        time: "Today",
      },
      {
        text: "Research completed",
        time: "3 days ago",
      },
    ],
  },

  {
    id: 11,

    project: "Payments Dashboard",
    employer: "Paystack",
    cohort: "Cohort 5",
    mentor: "Kwame Asante",
    team: "Team Beta",

    progress: "42%",
    deadline: "7 Sep 2026",
    review: "At risk",
    action: "Review",

    description: "Create a dashboard for monitoring payment activity.",

    deliverables: ["Research", "Payment flows", "Dashboard prototype"],

    successMetric: "Improve payment monitoring",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "Research",

    nextReview: "7 Sep 2026",

    files: ["Brief", "Research", "Prototype"],

    activities: [
      {
        text: "Project review requested",
        time: "Today",
      },
      {
        text: "Research started",
        time: "5 days ago",
      },
    ],
  },

  {
    id: 12,

    project: "Recruitment Platform",
    employer: "Andela",
    cohort: "Cohort 4",
    mentor: "Amara Okafor",
    team: "Team Alpha",

    progress: "76%",
    deadline: "10 Sep 2026",
    review: "On track",
    action: "View",

    description: "Design a recruitment platform for employers and talent.",

    deliverables: ["Recruitment research", "User flows", "Hi-fi prototype"],

    successMetric: "Improve recruitment efficiency",

    employerOwner: "Ada Nwosu",

    teamParticipants: 4,

    currentMilestone: "Usability testing",

    nextReview: "10 Sep 2026",

    files: ["Brief", "Research", "Prototype"],

    activities: [
      {
        text: "Usability testing started",
        time: "Today",
      },
      {
        text: "Prototype completed",
        time: "3 days ago",
      },
    ],
  },
];
