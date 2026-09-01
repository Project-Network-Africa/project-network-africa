// "use client";

// import { useParams } from "next/navigation";

// import DashboardCard from "../(dashboard)/DashboardCard";
// import { Button } from "@/src/components/ui";
// import { applicants } from "./applicant-data";

// export default function ApplicantDetails() {
//   const params = useParams<{ id: string }>();

//   const applicant = applicants.find((item) => item.id === params.id);

//   if (!applicant) {
//     return (
//       <main className="min-h-screen bg-[#F8F8F8] p-5">
//         <DashboardCard className="p-8 text-center">
//           <h2 className="text-lg font-bold text-[#1F1F25]">
//             Applicant not found
//           </h2>

//           <p className="mt-2 text-sm text-[#737379]">
//             We could not find this applicant.
//           </p>
//         </DashboardCard>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
//       <div className="mx-auto w-full max-w-[1280px]">
//         {/* Header */}
//         <div className="mb-5">
//           <button
//             type="button"
//             onClick={() => window.history.back()}
//             className="mb-2 text-[12px] font-medium text-[#303035]"
//           >
//             ← Back to Applicants
//           </button>

//           <div className="flex items-center justify-between">
//             <h1 className="text-[28px] font-bold text-[#1F1F25]">
//               {applicant.name}
//             </h1>

//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F1F25] text-[12px] font-semibold text-white">
//               CN
//             </div>
//           </div>
//         </div>

//         {/* Applicant Summary */}
//         <DashboardCard className="p-5 lg:p-7">
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex items-center gap-4">
//               <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[16px] font-bold text-white">
//                 {getInitials(applicant.name)}
//               </div>

//               <div>
//                 <h2 className="text-[18px] font-bold text-[#1F1F25]">
//                   {applicant.name}
//                 </h2>

//                 <p className="mt-1 text-[12px] text-[#737379]">
//                   {applicant.email ?? "amara.okafor@email.com"} ·{" "}
//                   {applicant.programme} · {applicant.cohort}
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap items-center gap-2">
//               <StatusBadge>{applicant.stage}</StatusBadge>

//               <Button
//                 variant="primary"
//                 className="h-9 rounded-lg px-5 text-[12px] font-semibold"
//               >
//                 Approve
//               </Button>

//               <Button
//                 variant="light"
//                 className="h-9 rounded-lg border border-[#D93636] px-5 text-[12px] font-semibold text-[#D93636]"
//               >
//                 Reject
//               </Button>

//               <Button
//                 variant="light"
//                 className="h-9 rounded-lg px-5 text-[12px] font-semibold"
//               >
//                 Assign mentor
//               </Button>
//             </div>
//           </div>
//         </DashboardCard>

//         {/* Stats */}
//         <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
//           <ApplicantStat
//             value={applicant.applicationScore ?? "86%"}
//             label="Application score"
//           />

//           <ApplicantStat
//             value={applicant.payment}
//             label="Payment status"
//             valueClassName="text-[#008F58]"
//           />

//           <ApplicantStat
//             value={applicant.assessmentScore ?? "92%"}
//             label="Assessment"
//           />

//           <ApplicantStat
//             value={applicant.risk}
//             label="Risk level"
//             valueClassName="text-[#008F58]"
//           />
//         </div>

//         {/* Information */}
//         <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
//           {/* Personal & Education */}
//           <DashboardCard className="p-5">
//             <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
//               Personal & Education
//             </h3>

//             <div className="mt-4 space-y-4">
//               <DetailRow
//                 value={
//                   applicant.location ?? "Lagos, Nigeria · +234 801 234 5678"
//                 }
//               />

//               <DetailRow
//                 value={
//                   applicant.education ??
//                   "BSc Computer Science · University of Lagos"
//                 }
//               />

//               <DetailRow
//                 value={
//                   applicant.experience ?? "2 years product design experience"
//                 }
//               />

//               <DetailRow
//                 value={
//                   applicant.preferredTrack ?? "Preferred track: Product Design"
//                 }
//               />

//               <DetailRow
//                 value={
//                   applicant.documents ??
//                   "Documents: CV · Portfolio · ID verified"
//                 }
//                 highlight
//               />
//             </div>
//           </DashboardCard>

//           {/* Application Summary */}
//           <DashboardCard className="p-5">
//             <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
//               Application Summary
//             </h3>

//             <div className="mt-4 space-y-4">
//               <DetailRow
//                 value={
//                   applicant.submissionSummary ??
//                   "Submitted 12 Jan 2026 · Source: Website"
//                 }
//               />

//               <DetailRow
//                 value={
//                   applicant.responses ??
//                   "Motivation and experience responses complete"
//                 }
//               />

//               <DetailRow
//                 value={
//                   applicant.assessmentSummary ??
//                   "Assessment score: 92% · Interview passed"
//                 }
//               />

//               <DetailRow
//                 value={
//                   applicant.assignedMentor ??
//                   `Assigned mentor: ${applicant.mentor}`
//                 }
//               />

//               <DetailRow
//                 value={
//                   applicant.adminNote ??
//                   "Admin note: Strong portfolio and communication"
//                 }
//                 highlight
//               />
//             </div>
//           </DashboardCard>
//         </div>

//         {/* Activity */}
//         <DashboardCard className="mt-4 p-5">
//           <div className="flex items-center justify-between">
//             <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
//               Activity & Status History
//             </h3>

//             <button
//               type="button"
//               className="text-[12px] font-medium text-[#00B6CE]"
//             >
//               View full audit log
//             </button>
//           </div>

//           <div className="mt-5 space-y-5">
//             {(
//               applicant.activities ?? [
//                 {
//                   text: "Application started",
//                   time: "10 Jan 2026",
//                 },
//                 {
//                   text: "Application submitted",
//                   time: "12 Jan 2026",
//                 },
//                 {
//                   text: "Payment confirmed",
//                   time: "12 Jan 2026",
//                 },
//                 {
//                   text: "Interview completed",
//                   time: "16 Jan 2026",
//                 },
//                 {
//                   text: "Moved to onboarding",
//                   time: "18 Jan 2026",
//                 },
//               ]
//             ).map((activity, index) => (
//               <div
//                 key={`${activity.text}-${index}`}
//                 className="flex items-center justify-between gap-4"
//               >
//                 <div className="flex items-center gap-3">
//                   <span
//                     className={`h-2 w-2 shrink-0 rounded-full ${
//                       index === 0 ? "bg-[#00B6CE]" : "bg-[#DDE1E5]"
//                     }`}
//                   />

//                   <p className="text-[12px] text-[#303035]">
//                     {activity.text} · {activity.time}
//                   </p>
//                 </div>

//                 {index === 0 && (
//                   <span className="text-[12px] text-[#737379]">Newest</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </DashboardCard>
//       </div>
//     </main>
//   );
// }

// /* ================================
//    STAT
// ================================ */

// function ApplicantStat({
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

// /* ================================
//    DETAIL ROW
// ================================ */

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

// /* ================================
//    STATUS BADGE
// ================================ */

// function StatusBadge({ children }: { children: React.ReactNode }) {
//   return (
//     <span className="rounded-full bg-[#E1F3EC] px-4 py-2 text-[12px] font-semibold text-[#008F58]">
//       {children}
//     </span>
//   );
// }

// /* ================================
//    INITIALS
// ================================ */

// function getInitials(name: string) {
//   return name
//     .split(" ")
//     .map((word) => word[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();
// }
"use client";

import AdminDetailPage from "../DetailPage/AdminDetailPage";

import { Applicant } from "./applicants.types";

interface ApplicantDetailsProps {
  applicant: Applicant;
}

export default function ApplicantDetails({ applicant }: ApplicantDetailsProps) {
  const initials = applicant.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  /*
   * Stage determines the header badge colour.
   */
  const stageClassName =
    applicant.stage === "Onboarding" || applicant.stage === "Matched"
      ? "bg-[#E1F3EC] text-[#008F58]"
      : applicant.stage === "Applied"
        ? "bg-[#EAF9FC] text-[#00B6CE]"
        : "bg-[#EAF9FC] text-[#00B6CE]";

  /*
   * Risk colour
   */
  const riskClassName =
    applicant.risk === "High"
      ? "text-[#DC2727]"
      : applicant.risk === "Medium"
        ? "text-[#F26B21]"
        : "text-[#008F58]";

  /*
   * Payment colour
   */
  const paymentClassName =
    applicant.payment === "Paid"
      ? "text-[#008F58]"
      : applicant.payment === "Failed"
        ? "text-[#DC2727]"
        : "text-[#F26B21]";

  return (
    <AdminDetailPage
      /* =====================================================
         HEADER
      ====================================================== */

      header={{
        backHref: "/admin/applicants",
        backLabel: "Back to Applicants",

        title: applicant.name,

        avatar: initials,

        name: applicant.name,

        subtitle: `${applicant.email} · ${applicant.programme} · ${applicant.cohort}`,

        status: applicant.stage,

        statusClassName: stageClassName,

        actions: [
          {
            label: "Approve",
            variant: "primary",
          },
          {
            label: "Reject",
            variant: "danger",
          },
          {
            label: "Assign mentor",
            variant: "light",
          },
        ],
      }}
      /* =====================================================
         STATS
      ====================================================== */

      stats={[
        {
          value: applicant.applicationScore,
          label: "Application score",
        },
        {
          value: applicant.payment,
          label: "Payment status",
          valueClassName: paymentClassName,
        },
        {
          value: applicant.assessmentScore,
          label: "Assessment",
        },
        {
          value: applicant.risk,
          label: "Risk level",
          valueClassName: riskClassName,
        },
      ]}
      /* =====================================================
         INFORMATION SECTIONS
      ====================================================== */

      sections={[
        {
          title: "Personal & Education",

          items: [
            {
              value: applicant.location,
            },
            {
              value: applicant.education,
            },
            {
              value: applicant.experience,
            },
            {
              value: applicant.preferredTrack,
            },
            {
              value: applicant.documents,
              highlight: true,
            },
          ],
        },

        {
          title: "Application Summary",

          items: [
            {
              value: applicant.submissionSummary,
            },
            {
              value: applicant.responses,
            },
            {
              value: applicant.assessmentSummary,
            },
            {
              value: applicant.assignedMentor,
            },
            {
              value: applicant.adminNote,
              highlight: true,
            },
          ],
        },
      ]}
      /* =====================================================
         ACTIVITY
      ====================================================== */

      activities={applicant.activities}
    />
  );
}
