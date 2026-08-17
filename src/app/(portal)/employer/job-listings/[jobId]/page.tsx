"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getJobById } from "@/src/services/employer/job";
import { Job } from "@/src/types/employer/job";
import JobDetails from "@/src/components/portal/employer/(job-listings)/JobDetails";

export default function JobDetailsPage() {
  const params = useParams();

  const jobId = params.jobId as string;

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundJob = getJobById(jobId);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setJob(foundJob ?? null);
    setLoading(false);
  }, [jobId]);

  if (loading) {
    return (
      <div className="flex w-full items-center justify-center py-20">
        <p className="text-[13px] text-[#5D5D61]">Loading job...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex w-full flex-col items-center justify-center py-20">
        <h1 className="text-[20px] font-semibold text-[#1F1F25]">
          Job not found
        </h1>

        <p className="mt-2 text-[13px] text-[#5D5D61]">
          The job you are looking for does not exist.
        </p>
      </div>
    );
  }

  return <JobDetails job={job} />;
}
