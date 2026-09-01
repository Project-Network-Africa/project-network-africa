// "use client";

// import Link from "next/link";

// import { Button } from "@/src/components/ui";

// import DashboardCard from "../(dashboard)/DashboardCard";

// import { Project } from "./projects.types";

// interface ProjectDetailsProps {
//   project: Project;
// }

// export default function ProjectDetails({ project }: ProjectDetailsProps) {
//   return (
//     <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
//       <div className="mx-auto w-full max-w-[1280px]">
//         {/* =====================================================
//             BACK
//         ====================================================== */}

//         <Link
//           href="/admin/projects"
//           className="mb-2 inline-block text-[12px] font-medium text-[#303035] transition hover:text-[#00B6CE]"
//         >
//           ← Back to Projects
//         </Link>

//         {/* =====================================================
//             PAGE TITLE
//         ====================================================== */}

//         <div className="mb-5 flex items-center justify-between">
//           <h1 className="text-[28px] font-bold leading-tight text-[#1F1F25] md:text-[30px]">
//             {project.project}
//           </h1>

//           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F1F25] text-[12px] font-semibold text-white">
//             CN
//           </div>
//         </div>

//         {/* =====================================================
//             PROJECT SUMMARY
//         ====================================================== */}

//         <DashboardCard className="p-5 lg:p-7">
//           <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//             {/* LEFT */}
//             <div className="flex min-w-0 items-center gap-4">
//               <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[16px] font-bold text-white">
//                 {getInitials(project.project)}
//               </div>

//               <div className="min-w-0">
//                 <h2 className="text-[18px] font-bold text-[#1F1F25]">
//                   {project.project}
//                 </h2>

//                 <p className="mt-1 text-[12px] text-[#737379]">
//                   {project.employer} · {project.cohort} · {project.team}
//                 </p>
//               </div>
//             </div>

//             {/* ACTIONS */}
//             <div className="flex flex-wrap items-center gap-2">
//               <span
//                 className={`rounded-full px-4 py-2 text-[12px] font-semibold ${
//                   project.review === "At risk"
//                     ? "bg-[#FCE9E9] text-[#DC2727]"
//                     : "bg-[#E1F3EC] text-[#008F58]"
//                 }`}
//               >
//                 {project.review === "At risk" ? "At risk" : "Active"}
//               </span>

//               <Button
//                 variant="primary"
//                 className="h-9 rounded-lg px-4 py-2 text-[12px] font-semibold"
//                 onClick={() => {
//                   console.log("Edit project:", project.project);
//                 }}
//               >
//                 Edit project
//               </Button>

//               <Button
//                 variant="light"
//                 className="h-9 rounded-lg px-4 py-2 text-[12px] font-semibold"
//                 onClick={() => {
//                   console.log("Assign mentor:", project.project);
//                 }}
//               >
//                 Assign mentor
//               </Button>

//               <Button
//                 variant="light"
//                 className="h-9 rounded-lg px-4 py-2 text-[12px] font-semibold"
//                 onClick={() => {
//                   console.log("Mark complete:", project.project);
//                 }}
//               >
//                 Mark complete
//               </Button>
//             </div>
//           </div>
//         </DashboardCard>

//         {/* =====================================================
//             STATS
//         ====================================================== */}

//         <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
//           <ProjectStat value={project.progress} label="Overall progress" />

//           <ProjectStat value={`5 / 7`} label="Milestones complete" />

//           <ProjectStat
//             value={project.deadline.replace(" 2026", "")}
//             label="Final deadline"
//           />

//           <ProjectStat
//             value={project.review === "At risk" ? "At risk" : "On track"}
//             label="Project health"
//             valueClassName={
//               project.review === "At risk" ? "text-[#DC2727]" : "text-[#008F58]"
//             }
//           />
//         </div>

//         {/* =====================================================
//             DETAILS
//         ====================================================== */}

//         <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
//           {/* PROJECT BRIEF */}
//           <DashboardCard className="p-5">
//             <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
//               Project Brief & Deliverables
//             </h3>

//             <div className="mt-4 space-y-4">
//               <DetailRow
//                 value={
//                   project.description ?? "Project description not provided"
//                 }
//               />

//               {project.deliverables?.map((deliverable) => (
//                 <DetailRow key={deliverable} value={deliverable} />
//               ))}

//               <DetailRow
//                 value={`Success metric: ${
//                   project.successMetric ?? "Not provided"
//                 }`}
//               />

//               <DetailRow
//                 value={`Employer owner: ${
//                   project.employerOwner ?? "Not provided"
//                 }`}
//                 highlight
//               />
//             </div>
//           </DashboardCard>

//           {/* TEAM & MILESTONES */}
//           <DashboardCard className="p-5">
//             <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
//               Team & Milestones
//             </h3>

//             <div className="mt-4 space-y-4">
//               <DetailRow value={`Mentor: ${project.mentor}`} />

//               <DetailRow
//                 value={`${project.team} · ${
//                   project.teamParticipants ?? 0
//                 } participants`}
//               />

//               <DetailRow
//                 value={`Current milestone: ${
//                   project.currentMilestone ?? "Not provided"
//                 }`}
//               />

//               <DetailRow
//                 value={`Next review: ${project.nextReview ?? "Not scheduled"}`}
//               />

//               <DetailRow
//                 value={`Files: ${project.files?.join(" · ") ?? "None"}`}
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
//                 console.log("View audit log:", project.project);
//               }}
//             >
//               View full audit log
//             </button>
//           </div>

//           <div className="mt-5 space-y-5">
//             {project.activities && project.activities.length > 0 ? (
//               project.activities.map((activity, index) => (
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
//    PROJECT STAT
// ========================================================= */

// function ProjectStat({
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

// /* =========================================================
//    INITIALS
// ========================================================= */

// function getInitials(name: string) {
//   return name
//     .split(" ")
//     .map((part) => part[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();
// }
"use client";

import AdminDetailPage from "../DetailPage/AdminDetailPage";

import { Project } from "./projects.types";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const isAtRisk = project.review === "At risk";
  const isApproved = project.review === "Approved";

  return (
    <AdminDetailPage
      /* =====================================================
         HEADER
      ====================================================== */
      header={{
        backHref: "/admin/projects",
        backLabel: "Back to Projects",

        title: project.project,

        avatar: getInitials(project.project),

        name: project.project,

        subtitle: `${project.employer} · ${project.cohort} · ${project.team}`,

        status: isAtRisk ? "At risk" : isApproved ? "Approved" : "Active",

        statusClassName: isAtRisk
          ? "bg-[#FCE9E9] text-[#DC2727]"
          : isApproved
            ? "bg-[#E1F3EC] text-[#008F58]"
            : "bg-[#E1F3EC] text-[#008F58]",

        actions: [
          {
            label: "Edit project",
            variant: "primary",
            onClick: () => {
              console.log("Edit project:", project.project);
            },
          },

          {
            label: "Assign mentor",
            variant: "light",
            onClick: () => {
              console.log("Assign mentor:", project.project);
            },
          },

          {
            label: "Mark complete",
            variant: "light",
            onClick: () => {
              console.log("Mark complete:", project.project);
            },
          },
        ],
      }}
      /* =====================================================
         STATS
      ====================================================== */

      stats={[
        {
          value: project.progress,
          label: "Overall progress",
        },

        {
          value: "5 / 7",
          label: "Milestones complete",
        },

        {
          value: project.deadline.replace(" 2026", ""),
          label: "Final deadline",
        },

        {
          value: isAtRisk ? "At risk" : "On track",
          label: "Project health",

          valueClassName: isAtRisk ? "text-[#DC2727]" : "text-[#008F58]",
        },
      ]}
      /* =====================================================
         DETAILS
      ====================================================== */

      sections={[
        {
          title: "Project Brief & Deliverables",

          items: [
            {
              value: project.description ?? "Project description not provided.",
            },

            ...(project.deliverables ?? []).map((deliverable) => ({
              value: deliverable,
            })),

            {
              value: `Success metric: ${
                project.successMetric ?? "Not provided"
              }`,
            },

            {
              value: `Employer owner: ${
                project.employerOwner ?? "Not provided"
              }`,

              highlight: true,
            },
          ],
        },

        {
          title: "Team & Milestones",

          items: [
            {
              value: `Mentor: ${project.mentor}`,
            },

            {
              value: `${project.team} · ${
                project.teamParticipants ?? 0
              } participants`,
            },

            {
              value: `Current milestone: ${
                project.currentMilestone ?? "Not provided"
              }`,
            },

            {
              value: `Next review: ${project.nextReview ?? "Not scheduled"}`,
            },

            {
              value: `Files: ${project.files?.join(" · ") ?? "None"}`,

              highlight: true,
            },
          ],
        },
      ]}
      /* =====================================================
         ACTIVITY
      ====================================================== */

      activities={project.activities ?? []}
      auditLabel="View full audit log"
    />
  );
}

/* =========================================================
   INITIALS
========================================================= */

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
