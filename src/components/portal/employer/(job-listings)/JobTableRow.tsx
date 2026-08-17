"use client";

import { useRouter } from "next/navigation";
import { Job, JobStatus } from "@/src/types/employer/job";
import JobStatusDropdown from "./JobStatusSelect";

interface JobTableRowProps {
  job: Job;
  onStatusChange: (jobId: string, status: JobStatus) => void;
}

export default function JobTableRow({ job, onStatusChange }: JobTableRowProps) {
  const router = useRouter();

  const handleRowClick = () => {
    router.push(`/employer/job-listings/${job.id}`);
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={handleRowClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleRowClick();
        }
      }}
      className="grid h-[48px] cursor-pointer grid-cols-4 items-center border-t border-[#E5E5EB] px-[22px] transition hover:bg-[#FAFAFA]"
    >
      {/* Role */}
      <p className="text-[12px] font-semibold text-[#1F1F25]">{job.title}</p>

      {/* Location */}
      <p className="text-[12px] font-semibold text-[#1F1F25]">{job.location}</p>

      {/* Applicants */}
      <p className="text-[12px] font-semibold text-[#1F1F25]">
        {job.applicants.length}
      </p>

      {/* Status */}
      <div className="flex items-center">
        <JobStatusDropdown
          value={job.status}
          onChange={(status) => onStatusChange(job.id, status)}
        />
      </div>
    </div>
  );
}
