// import { Mentee } from "@/src/types/mentor/mentees";
// import { DataTable } from "../../shared/DataTable";

// interface AssignedMenteesTableProps {
//   mentees: Mentee[];
// }

// const statusStyles: Record<Mentee["status"], string> = {
//   "On Track": "bg-[#E0F7ED] text-[#1A804D]",
//   "Needs Attention": "bg-[#FFE9DF] text-[#C84D19]",
// };

// export default function AssignedMenteesTable({
//   mentees,
// }: AssignedMenteesTableProps) {
//   return (
//     <DataTable
//       columns={["Mentee", "Program", "Status", "Last Activity"]}
//       rows={mentees.map((mentee) => [
//         <div
//           key={`${mentee.id}-name`}
//           className="flex min-w-0 items-center gap-[10px]"
//         >
//           <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[9px] font-bold text-white">
//             {mentee.initials}
//           </div>

//           <span className="truncate text-[12px] font-semibold text-[#1F1F25]">
//             {mentee.name}
//           </span>
//         </div>,

//         <p key={`${mentee.id}-program`} className="text-[12px] text-[#1F1F25]">
//           {mentee.program}
//         </p>,

//         <span
//           key={`${mentee.id}-status`}
//           className={`inline-flex h-[20px] items-center rounded-full px-[10px] text-[9px] font-semibold leading-none ${
//             statusStyles[mentee.status]
//           }`}
//         >
//           {mentee.status}
//         </span>,

//         <p key={`${mentee.id}-activity`} className="text-[12px] text-[#5D5D61]">
//           {mentee.lastActivity}
//         </p>,
//       ])}
//     />
//   );
// }
import Link from "next/link";

import { Mentee } from "@/src/types/mentor/mentees";
import { DataTable } from "../../shared/DataTable";

interface AssignedMenteesTableProps {
  mentees: Mentee[];
}

const statusStyles: Record<Mentee["status"], string> = {
  "On Track": "bg-[#E0F7ED] text-[#1A804D]",
  "Needs Attention": "bg-[#FFE9DF] text-[#C84D19]",
};

export default function AssignedMenteesTable({
  mentees,
}: AssignedMenteesTableProps) {
  return (
    <DataTable
      columns={["Mentee", "Program", "Status", "Last Activity"]}
      rows={mentees.map((mentee) => [
        <Link
          key={`${mentee.id}-name`}
          href={`/mentor/assigned-mentees/${mentee.id}`}
          className="flex min-w-0 items-center gap-[10px]"
        >
          <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[9px] font-bold text-white">
            {mentee.initials}
          </div>

          <span className="truncate text-[12px] font-semibold text-[#1F1F25] hover:underline">
            {mentee.name}
          </span>
        </Link>,

        <p key={`${mentee.id}-program`} className="text-[12px] text-[#1F1F25]">
          {mentee.program}
        </p>,

        <span
          key={`${mentee.id}-status`}
          className={`inline-flex h-[20px] items-center rounded-full px-[10px] text-[9px] font-semibold leading-none ${
            statusStyles[mentee.status]
          }`}
        >
          {mentee.status}
        </span>,

        <p key={`${mentee.id}-activity`} className="text-[12px] text-[#5D5D61]">
          {mentee.lastActivity}
        </p>,
      ])}
    />
  );
}
