// import { Cohort, CohortFilter, CohortStat } from "./cohorts.types";

// /* =========================================================
//    STATS
// ========================================================= */

// export const cohortStats: CohortStat[] = [
//   {
//     label: "Active cohorts",
//     value: "8",
//     helper: "Across 5 programmes",
//     helperColor: "text-[#00B6CE]",
//   },
//   {
//     label: "Enrolled learners",
//     value: "642",
//     helper: "73% average capacity",
//     helperColor: "text-[#00B6CE]",
//   },
//   {
//     label: "Average completion",
//     value: "78%",
//     helper: "↑ 6% vs last cohort",
//     helperColor: "text-[#00B6CE]",
//   },
//   {
//     label: "At-risk learners",
//     value: "57",
//     helper: "Require follow-up",
//     helperColor: "text-[#00B6CE]",
//   },
// ];

// /* =========================================================
//    FILTERS
// ========================================================= */

// export const cohortFilters: CohortFilter[] = [
//   {
//     label: "All programmes",
//     value: "all",
//   },
//   {
//     label: "Cohort status",
//     value: "all",
//   },
//   {
//     label: "Date range",
//     value: "all",
//   },
// ];

// /* =========================================================
//    COHORTS
// ========================================================= */

// export const cohorts: Cohort[] = [
//   {
//     id: "1",

//     cohort: "Cohort 6",
//     programme: "Product Design",
//     start: "2 Jun 2026",
//     end: "25 Aug 2026",
//     deadline: "20 May",
//     capacity: 100,
//     enrolled: 82,
//     completion: "78%",
//     status: "Active",
//     action: "View",

//     /* Detail */

//     programmeDuration: "12-week programme",

//     applicationsClosed: "20 May 2026",

//     programmeLead: "Chidi Nwosu",

//     currentPhase: "Real project experience",

//     learnersOnTrack: 57,

//     learnersAtRisk: 6,

//     attendanceAverage: "91%",

//     mentors: ["Amara Okafor", "Tunde Bello", "Zainab Musa"],

//     curriculumModules: 12,

//     completedModules: 9,

//     activeProjects: 8,

//     nextMilestoneReview: "22 Aug 2026",

//     finalShowcase: "29 Aug 2026",

//     activities: [
//       {
//         text: "Project milestone reminders sent",
//         time: "Today",
//       },
//       {
//         text: "6 learners flagged for follow-up",
//         time: "Yesterday",
//       },
//       {
//         text: "Week 8 content published",
//         time: "3 days ago",
//       },
//       {
//         text: "Employer briefs assigned",
//         time: "1 week ago",
//       },
//       {
//         text: "Cohort onboarding completed",
//         time: "2 Jun 2026",
//       },
//     ],
//   },

//   {
//     id: "2",

//     cohort: "Cohort 4",
//     programme: "Software Eng.",
//     start: "14 Apr 2026",
//     end: "8 Sep 2026",
//     deadline: "2 Apr",
//     capacity: 120,
//     enrolled: 94,
//     completion: "64%",
//     status: "Active",
//     action: "View",

//     programmeDuration: "20-week programme",

//     applicationsClosed: "2 Apr 2026",

//     programmeLead: "Chidi Nwosu",

//     currentPhase: "Project development",

//     learnersOnTrack: 70,

//     learnersAtRisk: 9,

//     attendanceAverage: "89%",

//     mentors: ["Tunde Bello", "Kwame Asante", "David Mensah"],

//     curriculumModules: 14,

//     completedModules: 9,

//     activeProjects: 6,

//     nextMilestoneReview: "25 Aug 2026",

//     finalShowcase: "5 Sep 2026",

//     activities: [
//       {
//         text: "Project reviews scheduled",
//         time: "Today",
//       },
//       {
//         text: "9 learners flagged for follow-up",
//         time: "Yesterday",
//       },
//       {
//         text: "Engineering module published",
//         time: "3 days ago",
//       },
//       {
//         text: "Employer briefs assigned",
//         time: "1 week ago",
//       },
//     ],
//   },

//   {
//     id: "3",

//     cohort: "Cohort 3",
//     programme: "Data Analytics",
//     start: "7 Mar 2026",
//     end: "30 Jul 2026",
//     deadline: "25 Feb",
//     capacity: 80,
//     enrolled: 71,
//     completion: "86%",
//     status: "Complete",
//     action: "View",

//     // programmeDuration: "20-week programme",

//     // applicationsClosed: "25 Feb 2026",

//     // programmeLead: "Chidi Nwosu",

//     // currentPhase: "Programme completed",

//     // learnersOnTrack: 65,

//     // learnersAtRisk: 3,

//     // attendanceAverage: "94%",

//     mentors: ["Zainab Musa", "Amara Okafor", "David Mensah"],

//     // curriculumModules: 12,

//     // completedModules: 12,

//     // activeProjects: 0,

//     // nextMilestoneReview: "Completed",

//     // finalShowcase: "30 Jul 2026",

//     activities: [
//       {
//         text: "Final showcase completed",
//         time: "30 Jul 2026",
//       },
//       {
//         text: "Completion certificates issued",
//         time: "2 days ago",
//       },
//       {
//         text: "Final project reviews completed",
//         time: "1 week ago",
//       },
//     ],
//   },

//   {
//     id: "4",

//     cohort: "Cohort 2",
//     programme: "Project Mgmt.",
//     start: "1 Jul 2026",
//     end: "23 Sep 2026",
//     deadline: "18 Jun",
//     capacity: 70,
//     enrolled: 58,
//     completion: "52%",
//     status: "Complete",
//     action: "Review",

//     programmeDuration: "12-week programme",

//     applicationsClosed: "18 Jun 2026",

//     programmeLead: "Chidi Nwosu",

//     currentPhase: "Real project experience",

//     learnersOnTrack: 45,

//     learnersAtRisk: 6,

//     attendanceAverage: "88%",

//     mentors: ["Amara Okafor", "Tunde Bello"],

//     curriculumModules: 10,

//     completedModules: 5,

//     activeProjects: 5,

//     nextMilestoneReview: "28 Aug 2026",

//     finalShowcase: "23 Sep 2026",

//     activities: [
//       {
//         text: "Project milestone review completed",
//         time: "Today",
//       },
//       {
//         text: "6 learners flagged for follow-up",
//         time: "Yesterday",
//       },
//       {
//         text: "Project management module published",
//         time: "4 days ago",
//       },
//     ],
//   },

//   {
//     id: "5",

//     cohort: "Cohort 7",
//     programme: "Product Design",
//     start: "5 Oct 2026",
//     end: "28 Dec 2026",
//     deadline: "22 Sep",
//     capacity: 100,
//     enrolled: 0,
//     completion: "0%",
//     status: "Draft",
//     action: "Edit",

//     programmeDuration: "12-week programme",

//     applicationsClosed: "22 Sep 2026",

//     programmeLead: "Chidi Nwosu",

//     currentPhase: "Preparing applications",

//     learnersOnTrack: 0,

//     learnersAtRisk: 0,

//     attendanceAverage: "—",

//     mentors: ["Amara Okafor", "Zainab Musa"],

//     curriculumModules: 12,

//     completedModules: 0,

//     activeProjects: 0,

//     nextMilestoneReview: "5 Oct 2026",

//     finalShowcase: "28 Dec 2026",

//     activities: [
//       {
//         text: "Cohort draft created",
//         time: "Today",
//       },
//       {
//         text: "Programme curriculum prepared",
//         time: "3 days ago",
//       },
//     ],
//   },

//   {
//     id: "6",

//     cohort: "Cohort 5",
//     programme: "Software Eng.",
//     start: "10 May 2026",
//     end: "20 Aug 2026",
//     deadline: "25 Apr",
//     capacity: 120,
//     enrolled: 105,
//     completion: "72%",
//     status: "Active",
//     action: "View",

//     programmeDuration: "20-week programme",

//     applicationsClosed: "25 Apr 2026",

//     programmeLead: "Chidi Nwosu",

//     currentPhase: "Real project experience",

//     learnersOnTrack: 84,

//     learnersAtRisk: 8,

//     attendanceAverage: "92%",

//     mentors: ["Tunde Bello", "Kwame Asante", "David Mensah"],

//     curriculumModules: 14,

//     completedModules: 10,

//     activeProjects: 7,

//     nextMilestoneReview: "18 Aug 2026",

//     finalShowcase: "20 Aug 2026",

//     activities: [
//       {
//         text: "Project reviews completed",
//         time: "Today",
//       },
//       {
//         text: "8 learners flagged for follow-up",
//         time: "Yesterday",
//       },
//       {
//         text: "Week 16 content published",
//         time: "3 days ago",
//       },
//     ],
//   },

//   {
//     id: "7",

//     cohort: "Cohort 1",
//     programme: "Data Analytics",
//     start: "10 Jan 2026",
//     end: "30 Apr 2026",
//     deadline: "20 Dec",
//     capacity: 80,
//     enrolled: 76,
//     completion: "100%",
//     status: "Complete",
//     action: "View",

//     programmeDuration: "16-week programme",

//     applicationsClosed: "20 Dec 2025",

//     programmeLead: "Chidi Nwosu",

//     currentPhase: "Programme completed",

//     learnersOnTrack: 72,

//     learnersAtRisk: 0,

//     attendanceAverage: "95%",

//     mentors: ["Zainab Musa", "Amara Okafor"],

//     curriculumModules: 12,

//     completedModules: 12,

//     activeProjects: 0,

//     nextMilestoneReview: "Completed",

//     finalShowcase: "30 Apr 2026",

//     activities: [
//       {
//         text: "Programme completed",
//         time: "30 Apr 2026",
//       },
//       {
//         text: "Completion certificates issued",
//         time: "2 May 2026",
//       },
//     ],
//   },

//   {
//     id: "8",

//     cohort: "Cohort 8",
//     programme: "Project Mgmt.",
//     start: "12 Nov 2026",
//     end: "20 Feb 2027",
//     deadline: "30 Oct",
//     capacity: 70,
//     enrolled: 0,
//     completion: "0%",
//     status: "Draft",
//     action: "Edit",

//     programmeDuration: "14-week programme",

//     applicationsClosed: "30 Oct 2026",

//     programmeLead: "Chidi Nwosu",

//     currentPhase: "Preparing applications",

//     learnersOnTrack: 0,

//     learnersAtRisk: 0,

//     attendanceAverage: "—",

//     mentors: ["Amara Okafor", "Tunde Bello"],

//     curriculumModules: 10,

//     completedModules: 0,

//     activeProjects: 0,

//     nextMilestoneReview: "12 Nov 2026",

//     finalShowcase: "20 Feb 2027",

//     activities: [
//       {
//         text: "Cohort draft created",
//         time: "Today",
//       },
//       {
//         text: "Curriculum planning started",
//         time: "3 days ago",
//       },
//     ],
//   },
// ];
