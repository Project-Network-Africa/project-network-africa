"use client";

import JobDetailsHeader from "./JobDetailsHeader";
import JobStats from "./JobStats";
import JobApplicantsTable from "./JobApplicantsTable";

import { Job } from "@/src/types/employer/job";

interface JobDetailsProps {
  job: Job;
}

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <div className="flex w-full flex-col gap-[14px]">
      <JobDetailsHeader job={job} />

      <JobStats job={job} />

      <JobApplicantsTable job={job} />
    </div>
  );
}
