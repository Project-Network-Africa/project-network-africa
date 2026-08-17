import { JobStatus } from "@/src/types/employer/job";

interface JobStatusBadgeProps {
  status: JobStatus;
}

const statusStyles: Record<JobStatus, string> = {
  Active: "bg-[#E0F7ED] text-[#1A804D]",
  "Closing Soon": "bg-[#FFF3E0] text-[#B86B00]",
  Closed: "bg-[#E5E5ED] text-[#595961]",
};

export default function JobStatusBadge({ status }: JobStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-[10px] py-[4px] text-[10px] font-semibold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
