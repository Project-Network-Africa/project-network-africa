"use client";

import Link from "next/link";

import { Button } from "@/src/components/ui";
import { Job } from "@/src/types/employer/job";
import JobStatusBadge from "./JobStatusBadge";

interface JobDetailsHeaderProps {
  job: Job;
}

export default function JobDetailsHeader({ job }: JobDetailsHeaderProps) {
  return (
    <div className="flex flex-col gap-[14px]">
      <Link
        href="/employer/job-listings"
        className="w-fit text-[12px] font-semibold text-[#1F1F25] transition hover:opacity-70"
      >
        ← Back to Job Listings
      </Link>

      <h1 className="text-[24px] font-semibold text-[#1F1F25]">{job.title}</h1>

      <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[13px] text-[#5D5D61]">
              {job.location}
              {" · "}
              {job.employmentType}
              {" · "}
              Posted {job.postedDate}
            </p>

            <div className="mt-[20px] flex gap-[10px]">
              <Button
                variant="light"
                className="h-[35px] rounded-[8px] border border-[#E5E5EB] px-4 text-[12px] font-semibold"
              >
                Edit Job
              </Button>

              <Button
                variant="light"
                className="h-[35px] rounded-[8px] px-4 text-[12px]  text-[#C83C3C] font-semibold"
              >
                Close Job
              </Button>
            </div>
          </div>

          <JobStatusBadge status={job.status} />
        </div>
      </section>
    </div>
  );
}
