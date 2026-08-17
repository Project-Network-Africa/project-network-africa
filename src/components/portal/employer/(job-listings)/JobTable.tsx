"use client";

import { Job, JobStatus } from "@/src/types/employer/job";
import { updateJobStatus } from "@/src/services/employer/job";
import JobTableRow from "./JobTableRow";

interface JobTableProps {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}

export default function JobTable({ jobs, setJobs }: JobTableProps) {
  const handleStatusChange = (jobId: string, status: JobStatus) => {
    const updatedJobs = updateJobStatus(jobId, status);
    setJobs(updatedJobs);
  };

  return (
    <div className="overflow-visible rounded-[14px] border border-[#E5E5EB] bg-white shadow-[0px_2px_8px_0px_#0000000A]">
      {/* Header */}
      <div className="grid h-[41px] grid-cols-4 items-center bg-[#F6F6F7] px-[22px]">
        <p className="text-[11px] font-semibold text-[#1F1F25]">Role</p>

        <p className="text-[11px] font-semibold text-[#1F1F25]">Location</p>

        <p className="text-[11px] font-semibold text-[#1F1F25]">Applicants</p>

        <p className="text-[11px] font-semibold text-[#1F1F25]">Status</p>
      </div>

      {/* Rows */}
      {jobs.map((job) => (
        <JobTableRow
          key={job.id}
          job={job}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
}
