"use client";

import { Button } from "@/src/components/ui";
import { Job } from "./career-services.types";

interface JobDetailProps {
  job: Job;
}

export default function JobDetail({ job }: JobDetailProps) {
  const handleApply = () => {
    console.log("Applying for:", job.title);
  };

  return (
    <div className="flex w-full flex-col gap-5">
      {/* Header */}
      <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
        <div className="flex items-start justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#1F1F25] text-[20px] font-bold text-[#FFFFFF]">
              {job.companyInitial}
            </div>

            <div>
              <h1 className="text-[15px] font-bold text-[#1F1F25]">
                {job.company}
              </h1>

              <p className="mt-1 text-[12.5px] text-[#5D5D61]">
                {" "}
                {job.location} . {job.employmentType}. {job.posted}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#E5FAFC] px-3 py-1 text-[11px] font-medium text-[#006D7C]"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button
          variant="primary"
          onClick={handleApply}
          className="w-fit rounded-[8px] px-4 py-[10px] mt-5 text-[12px] font-semibold"
        >
          Apply for this Job
        </Button>
      </section>

      {/* About */}
      <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
        <p className="mb-3 text-[10px] font-semibold uppercase text-[#5D5D61]">
          About the Role
        </p>

        <p className="text-[13px] leading-[1.6] text-[#5D5D61]">{job.about}</p>
      </section>

      {/* Requirements */}
      <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
        <p className="mb-3 text-[10px] font-semibold uppercase text-[#5D5D61]">
          Requirements
        </p>

        <div className="flex flex-col gap-3">
          {job.requirements.map((requirement) => (
            <div key={requirement} className="flex items-start gap-[10px]">
              <span className="mt-2 h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#00B6CE]" />

              <p className="text-[12px] leading-5 text-[#1F1F25]">
                {requirement}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Company */}
      <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
        <p className="mb-3 text-[10px] font-semibold uppercase text-[#5D5D61]">
          About {job.company}
        </p>

        <p className="text-[13px] leading-[1.6] text-[#5D5D61]">
          {job.companyAbout}
        </p>
      </section>

      <Button
        variant="primary"
        onClick={handleApply}
        className="w-fit rounded-[8px] px-4 py-[10px]  text-[12px] font-semibold"
      >
        Apply for this Job
      </Button>
    </div>
  );
}
