// "use client";

// import Link from "next/link";

// import { Button } from "@/src/components/ui";

// import DashboardCard from "../(dashboard)/DashboardCard";

// import { Cohort } from "./cohorts.types";

// interface CohortDetailsProps {
//   cohort: Cohort;
// }

// export default function CohortDetails({ cohort }: CohortDetailsProps) {
//   const isDraft = cohort.status === "Draft";

//   const initials = cohort.cohort.replace("Cohort ", "C").trim();

//   return (
//     <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
//       <div className="mx-auto w-full max-w-[1280px]">
//         {/* =====================================================
//             BACK
//         ====================================================== */}

//         <Link
//           href="/admin/cohorts"
//           className="mb-2 inline-block text-[12px] font-medium text-[#303035] transition hover:text-[#00B6CE]"
//         >
//           ← Back to Cohorts
//         </Link>

//         {/* =====================================================
//             PAGE HEADER
//         ====================================================== */}

//         <div className="mb-5 flex items-center justify-between">
//           <h1 className="text-[28px] font-bold leading-tight text-[#1F1F25] md:text-[30px]">
//             {cohort.cohort} — {cohort.programme}
//           </h1>

//           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F1F25] text-[12px] font-semibold text-white">
//             CN
//           </div>
//         </div>

//         {/* =====================================================
//             COHORT SUMMARY
//         ====================================================== */}

//         <DashboardCard className="p-5 lg:p-7">
//           <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//             {/* LEFT */}

//             <div className="flex min-w-0 items-center gap-4">
//               <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[16px] font-bold text-white">
//                 {initials}
//               </div>

//               <div className="min-w-0">
//                 <h2 className="text-[18px] font-bold text-[#1F1F25]">
//                   {cohort.cohort} — {cohort.programme}
//                 </h2>

//                 <p className="mt-1 text-[12px] text-[#737379]">
//                   {cohort.start} – {cohort.end} ·{" "}
//                   {cohort.programmeDuration ?? "Programme"} · Status:{" "}
//                   {cohort.status}
//                 </p>
//               </div>
//             </div>

//             {/* ACTIONS */}

//             <div className="flex flex-wrap items-center gap-2">
//               <span
//                 className={`rounded-full px-4 py-2 text-[12px] font-semibold ${
//                   isDraft
//                     ? "bg-[#FFF0E5] text-[#F26B21]"
//                     : "bg-[#E1F3EC] text-[#008F58]"
//                 }`}
//               >
//                 {cohort.status === "Active" ? "Week 8" : cohort.status}
//               </span>

//               <Button
//                 variant="primary"
//                 className="h-9 rounded-lg px-4 py-2 text-[12px] font-semibold"
//                 onClick={() => {
//                   console.log("Edit cohort:", cohort.cohort);
//                 }}
//               >
//                 Edit cohort
//               </Button>

//               <Button
//                 variant="light"
//                 className="h-9 rounded-lg px-4 py-2 text-[12px] font-semibold"
//                 onClick={() => {
//                   console.log("Send announcement:", cohort.cohort);
//                 }}
//               >
//                 Send announcement
//               </Button>

//               <Button
//                 variant="light"
//                 className="h-9 rounded-lg px-4 py-2 text-[12px] font-semibold"
//                 onClick={() => {
//                   console.log("Close cohort:", cohort.cohort);
//                 }}
//               >
//                 Close cohort
//               </Button>
//             </div>
//           </div>
//         </DashboardCard>

//         {/* =====================================================
//             STATS
//         ====================================================== */}

//         <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
//           <CohortStat
//             value={`${cohort.enrolled} / ${cohort.capacity}`}
//             label="Learners enrolled"
//           />

//           <CohortStat
//             value={String(cohort.mentors?.length ?? 0)}
//             label="Mentors assigned"
//           />

//           <CohortStat
//             value={String(cohort.activeProjects ?? 0)}
//             label="Project teams"
//           />

//           <CohortStat value={cohort.completion} label="Average completion" />
//         </div>

//         {/* =====================================================
//             DETAILS
//         ====================================================== */}

//         <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
//           {/* COHORT CONFIGURATION */}

//           <DashboardCard className="p-5">
//             <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
//               Cohort Configuration
//             </h3>

//             <div className="mt-4 space-y-4">
//               <DetailRow
//                 value={`Applications closed ${
//                   cohort.applicationsClosed ?? cohort.deadline
//                 }`}
//               />

//               <DetailRow
//                 value={`Programme lead: ${
//                   cohort.programmeLead ?? "Not provided"
//                 }`}
//               />

//               <DetailRow
//                 value={`Current phase: ${
//                   cohort.currentPhase ?? "Not provided"
//                 }`}
//               />

//               <DetailRow
//                 value={`${cohort.learnersOnTrack ?? 0} learners on track · ${
//                   cohort.learnersAtRisk ?? 0
//                 } at risk`}
//               />

//               <DetailRow
//                 value={`Attendance average: ${cohort.attendanceAverage ?? "—"}`}
//                 highlight
//               />
//             </div>
//           </DashboardCard>

//           {/* MENTORS & CURRICULUM */}

//           <DashboardCard className="p-5">
//             <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
//               Mentors & Curriculum
//             </h3>

//             <div className="mt-4 space-y-4">
//               <DetailRow
//                 value={cohort.mentors?.join(" · ") ?? "No mentors assigned"}
//               />

//               <DetailRow
//                 value={`${cohort.curriculumModules ?? 0} curriculum modules · ${
//                   cohort.completedModules ?? 0
//                 } completed`}
//               />

//               <DetailRow
//                 value={`${
//                   cohort.activeProjects ?? 0
//                 } employer-sponsored projects active`}
//               />

//               <DetailRow
//                 value={`Next milestone review: ${
//                   cohort.nextMilestoneReview ?? "Not scheduled"
//                 }`}
//               />

//               <DetailRow
//                 value={`Final showcase: ${
//                   cohort.finalShowcase ?? "Not scheduled"
//                 }`}
//                 highlight
//               />
//             </div>
//           </DashboardCard>
//         </div>

//         {/* =====================================================
//             ACTIVITY
//         ====================================================== */}

//         <DashboardCard className="mt-4 p-5">
//           <div className="flex items-center justify-between gap-4">
//             <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
//               Activity & Status History
//             </h3>

//             <button
//               type="button"
//               className="text-[12px] font-medium text-[#00B6CE] transition hover:text-[#009CB2]"
//               onClick={() => {
//                 console.log("View audit log:", cohort.cohort);
//               }}
//             >
//               View full audit log
//             </button>
//           </div>

//           <div className="mt-5 space-y-5">
//             {cohort.activities && cohort.activities.length > 0 ? (
//               cohort.activities.map((activity, index) => (
//                 <div
//                   key={`${activity.text}-${index}`}
//                   className="flex items-center justify-between gap-4"
//                 >
//                   <div className="flex min-w-0 items-center gap-3">
//                     <span
//                       className={`h-2 w-2 shrink-0 rounded-full ${
//                         index === 0 ? "bg-[#00B6CE]" : "bg-[#DDE1E5]"
//                       }`}
//                     />

//                     <p className="text-[12px] text-[#303035]">
//                       {activity.text}

//                       {activity.time && (
//                         <span className="ml-1">· {activity.time}</span>
//                       )}
//                     </p>
//                   </div>

//                   {index === 0 && (
//                     <span className="shrink-0 text-[12px] text-[#737379]">
//                       Newest
//                     </span>
//                   )}
//                 </div>
//               ))
//             ) : (
//               <p className="py-5 text-[12px] text-[#737379]">
//                 No activity available.
//               </p>
//             )}
//           </div>
//         </DashboardCard>
//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    COHORT STAT
// ========================================================= */

// function CohortStat({
//   value,
//   label,
//   valueClassName = "",
// }: {
//   value: string;
//   label: string;
//   valueClassName?: string;
// }) {
//   return (
//     <DashboardCard className="p-5">
//       <p
//         className={`text-[22px] font-bold leading-none text-[#00B6CE] ${valueClassName}`}
//       >
//         {value}
//       </p>

//       <p className="mt-2 text-[11px] text-[#737379]">{label}</p>
//     </DashboardCard>
//   );
// }

// /* =========================================================
//    DETAIL ROW
// ========================================================= */

// function DetailRow({
//   value,
//   highlight = false,
// }: {
//   value: string;
//   highlight?: boolean;
// }) {
//   return (
//     <div className="flex items-start gap-3">
//       <span
//         className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
//           highlight ? "bg-[#00B6CE]" : "bg-[#DDE1E5]"
//         }`}
//       />

//       <p className="text-[12px] leading-5 text-[#303035]">{value}</p>
//     </div>
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
      //  HEADER
      header={{
        backHref: "/admin/cohorts",
        backLabel: "Back to Cohorts",

        title: `${cohort.cohort} — ${cohort.programme}`,

        avatar: initials,

        name: `${cohort.cohort} — ${cohort.programme}`,

        subtitle: `${cohort.start} – ${cohort.end} · ${
          cohort.programmeDuration ?? "Programme"
        } · Status: ${cohort.status}`,

        status: cohort.status === "Active" ? "Week 8" : cohort.status,

        statusClassName: isDraft
          ? "bg-[#FFF0E5] text-[#F26B21]"
          : "bg-[#E1F3EC] text-[#008F58]",

        actions: [
          {
            label: "Edit cohort",
            variant: "primary",
            onClick: () => {
              console.log("Edit cohort:", cohort.cohort);
            },
          },

          {
            label: "Send announcement",
            variant: "light",
            onClick: () => {
              console.log("Send announcement:", cohort.cohort);
            },
          },

          {
            label: "Close cohort",
            variant: "light",
            onClick: () => {
              console.log("Close cohort:", cohort.cohort);
            },
          },
        ],
      }}
      /* =========================================
         STATS
      ========================================= */

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
          value: String(cohort.activeProjects ?? 0),
          label: "Project teams",
        },

        {
          value: cohort.completion,
          label: "Average completion",
        },
      ]}
      //  INFORMATION SECTIONS

      sections={[
        {
          title: "Cohort Configuration",

          items: [
            {
              value: `Applications closed ${
                cohort.applicationsClosed ?? cohort.deadline
              }`,
            },

            {
              value: `Programme lead: ${
                cohort.programmeLead ?? "Not provided"
              }`,
            },

            {
              value: `Current phase: ${cohort.currentPhase ?? "Not provided"}`,
            },

            {
              value: `${cohort.learnersOnTrack ?? 0} learners on track · ${
                cohort.learnersAtRisk ?? 0
              } at risk`,
            },

            {
              value: `Attendance average: ${cohort.attendanceAverage ?? "—"}`,
              highlight: true,
            },
          ],
        },

        {
          title: "Mentors & Curriculum",

          items: [
            {
              value: cohort.mentors?.join(" · ") ?? "No mentors assigned",
            },

            {
              value: `${cohort.curriculumModules ?? 0} curriculum modules · ${
                cohort.completedModules ?? 0
              } completed`,
            },

            {
              value: `${
                cohort.activeProjects ?? 0
              } employer-sponsored projects active`,
            },

            {
              value: `Next milestone review: ${
                cohort.nextMilestoneReview ?? "Not scheduled"
              }`,
            },

            {
              value: `Final showcase: ${
                cohort.finalShowcase ?? "Not scheduled"
              }`,
              highlight: true,
            },
          ],
        },
      ]}
      //  ACTIVITY

      activities={cohort.activities ?? []}
      auditLabel="View full audit log"
    />
  );
}
