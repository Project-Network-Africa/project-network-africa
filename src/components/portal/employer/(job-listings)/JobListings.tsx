"use client";
import { Button } from "@/src/components/ui";
import JobTable from "./JobTable";
import { useEffect, useState } from "react";
import { getJobs } from "@/src/services/employer/job";
import { Job } from "@/src/types/employer/job";

export default function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setJobs(getJobs());
  }, []);

  return (
    <>
      <JobTable jobs={jobs} setJobs={setJobs} />

      <Button
        variant="primary"
        href="/employer/create-job"
        className="h-[35px] w-[110px] rounded-[8px] px-4 text-[12px] font-semibold"
      >
        + New Job
      </Button>
    </>
  );
}
