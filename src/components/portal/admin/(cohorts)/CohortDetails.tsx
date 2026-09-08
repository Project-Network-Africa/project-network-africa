// "use client";

// import AdminDetailPage from "../DetailPage/AdminDetailPage";

// import { Cohort } from "./cohorts.types";

// interface CohortDetailsProps {
//   cohort: Cohort;
// }

// export default function CohortDetails({ cohort }: CohortDetailsProps) {
//   const isDraft = cohort.status === "Draft";

//   const initials = cohort.cohort.replace("Cohort ", "C").trim();

//   return (
//     <AdminDetailPage
//       //  HEADER
//       header={{
//         backHref: "/admin/cohorts",
//         backLabel: "Back to Cohorts",

//         title: `${cohort.cohort} — ${cohort.programme}`,

//         avatar: initials,

//         name: `${cohort.cohort} — ${cohort.programme}`,

//         subtitle: `${cohort.start} – ${cohort.end} · ${
//           cohort.programmeDuration ?? "Programme"
//         } · Status: ${cohort.status}`,

//         status: cohort.status === "Active" ? "Week 8" : cohort.status,

//         statusClassName: isDraft
//           ? "bg-[#FFF0E5] text-[#F26B21]"
//           : "bg-[#E1F3EC] text-[#008F58]",

//         actions: [
//           {
//             label: "Edit cohort",
//             variant: "primary",
//             onClick: () => {
//               console.log("Edit cohort:", cohort.cohort);
//             },
//           },

//           {
//             label: "Send announcement",
//             variant: "light",
//             onClick: () => {
//               console.log("Send announcement:", cohort.cohort);
//             },
//           },

//           {
//             label: "Close cohort",
//             variant: "light",
//             onClick: () => {
//               console.log("Close cohort:", cohort.cohort);
//             },
//           },
//         ],
//       }}
//       /* =========================================
//          STATS
//       ========================================= */

//       stats={[
//         {
//           value: `${cohort.enrolled} / ${cohort.capacity}`,
//           label: "Learners enrolled",
//         },

//         {
//           value: String(cohort.mentors?.length ?? 0),
//           label: "Mentors assigned",
//         },

//         {
//           value: String(cohort.activeProjects ?? 0),
//           label: "Project teams",
//         },

//         {
//           value: cohort.completion,
//           label: "Average completion",
//         },
//       ]}
//       //  INFORMATION SECTIONS

//       sections={[
//         {
//           title: "Cohort Configuration",

//           items: [
//             {
//               value: `Applications closed ${
//                 cohort.applicationsClosed ?? cohort.deadline
//               }`,
//             },

//             {
//               value: `Programme lead: ${
//                 cohort.programmeLead ?? "Not provided"
//               }`,
//             },

//             {
//               value: `Current phase: ${cohort.currentPhase ?? "Not provided"}`,
//             },

//             {
//               value: `${cohort.learnersOnTrack ?? 0} learners on track · ${
//                 cohort.learnersAtRisk ?? 0
//               } at risk`,
//             },

//             {
//               value: `Attendance average: ${cohort.attendanceAverage ?? "—"}`,
//               highlight: true,
//             },
//           ],
//         },

//         {
//           title: "Mentors & Curriculum",

//           items: [
//             {
//               value: cohort.mentors?.join(" · ") ?? "No mentors assigned",
//             },

//             {
//               value: `${cohort.curriculumModules ?? 0} curriculum modules · ${
//                 cohort.completedModules ?? 0
//               } completed`,
//             },

//             {
//               value: `${
//                 cohort.activeProjects ?? 0
//               } employer-sponsored projects active`,
//             },

//             {
//               value: `Next milestone review: ${
//                 cohort.nextMilestoneReview ?? "Not scheduled"
//               }`,
//             },

//             {
//               value: `Final showcase: ${
//                 cohort.finalShowcase ?? "Not scheduled"
//               }`,
//               highlight: true,
//             },
//           ],
//         },
//       ]}
//       //  ACTIVITY

//       activities={cohort.activities ?? []}
//       auditLabel="View full audit log"
//     />
//   );
// }
"use client";

import AdminDetailPage from "../DetailPage/AdminDetailPage";
import { Cohort } from "./cohorts.types";

interface CohortDetailsProps {
  cohort: Cohort;
}

export default function CohortDetails({ cohort }: CohortDetailsProps) {
  const isDraft = cohort.status === "Draft";

  const initials = cohort.cohort.replace("Cohort ", "C").trim();

  return (
    <AdminDetailPage
      header={{
        backHref: "/admin/cohorts",
        backLabel: "Back to Cohorts",
        title: `${cohort.cohort} — ${cohort.programme}`,
        avatar: initials,
        name: `${cohort.cohort} — ${cohort.programme}`,
        subtitle: `${cohort.start} – ${cohort.end} · Programme · Status: ${cohort.status}`,
        status: cohort.status,
        statusClassName: isDraft
          ? "bg-[#FFF0E5] text-[#F26B21]"
          : cohort.status === "Active"
            ? "bg-[#E1F3EC] text-[#008F58]"
            : "bg-[#EAF9FC] text-[#00B6CE]",
        actions: [
          {
            label: "Edit cohort",
            variant: "primary",
            onClick: () => {
              console.log("Edit cohort:", cohort.id);
            },
          },
          {
            label: "Send announcement",
            variant: "light",
            onClick: () => {
              console.log("Send announcement:", cohort.id);
            },
          },
          {
            label: cohort.isOpen ? "Close cohort" : "Open cohort",
            variant: "light",
            onClick: () => {
              console.log("Toggle cohort:", cohort.id);
            },
          },
        ],
      }}
      stats={[
        {
          value: `${cohort.enrolled} / ${cohort.capacity}`,
          label: "Learners enrolled",
        },
        {
          value: String(cohort.mentors?.length ?? 0),
          label: "Mentors assigned",
        },
        {
          value: String(cohort.applicants?.length ?? 0),
          label: "Applications",
        },
        {
          value: cohort.status,
          label: "Cohort status",
        },
      ]}
      sections={[
        {
          title: "Cohort Configuration",
          items: [
            {
              value: `Programme: ${cohort.programme}`,
            },
            {
              value: `Start date: ${cohort.start}`,
            },
            {
              value: `End date: ${cohort.end}`,
            },
            {
              value: `Capacity: ${cohort.capacity} learners`,
            },
            {
              value: `Applications: ${cohort.applicants?.length ?? 0}`,
            },
          ],
        },
        {
          title: "Cohort Details",
          items: [
            {
              value: `Status: ${cohort.status}`,
            },
            {
              value: `Open for applications: ${cohort.isOpen ? "Yes" : "No"}`,
            },
            {
              value: cohort.mentors?.length
                ? `Mentors assigned: ${cohort.mentors.length}`
                : "No mentors assigned",
            },
            {
              value: cohort.description || "No description provided",
              highlight: true,
            },
          ],
        },
      ]}
      activities={cohort.activities ?? []}
      auditLabel="View full audit log"
    />
  );
}
