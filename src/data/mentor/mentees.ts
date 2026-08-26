import { Mentee } from "@/src/types/mentor/mentees";

const mentees: Mentee[] = [
  {
    id: "mentee-1",
    name: "Amara Okafor",
    initials: "AO",
    program: "Product Design",
    cohort: "Cohort 6",
    status: "On Track",
    lastActivity: "2 hours ago",

    currentWeek: 8,
    totalWeeks: 12,

    projects: [
      {
        id: "project-alpha",
        name: "Project Alpha",
        status: "In Review",
      },
      {
        id: "project-beta",
        name: "Project Beta",
        status: "Completed",
      },
    ],

    privateNotes:
      "Strong visual design instincts, needs to work on written case studies.",
  },

  {
    id: "mentee-2",
    name: "Tunde Bello",
    initials: "TB",
    program: "Software Engineering",
    cohort: "Cohort 5",
    status: "Needs Attention",
    lastActivity: "5 days ago",

    currentWeek: 6,
    totalWeeks: 12,

    projects: [
      {
        id: "project-gamma",
        name: "Project Gamma",
        status: "In Progress",
      },
    ],

    privateNotes: "Needs more consistency with project submissions.",
  },

  {
    id: "mentee-3",
    name: "Zainab Musa",
    initials: "ZM",
    program: "Product Design",
    cohort: "Cohort 6",
    status: "On Track",
    lastActivity: "1 day ago",

    currentWeek: 9,
    totalWeeks: 12,

    projects: [
      {
        id: "project-delta",
        name: "Project Delta",
        status: "Completed",
      },
    ],

    privateNotes: "Strong progress and good engagement during mentor sessions.",
  },
];

export function getMentees(): Mentee[] {
  return mentees;
}

export function getMenteeById(menteeId: string): Mentee | undefined {
  return mentees.find((mentee) => mentee.id === menteeId);
}
