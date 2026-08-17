import { Button } from "@/src/components/ui";
import { Job } from "./career-services.types";

interface JobHeaderProps {
  job: Job;
}

export default function JobHeader({ job }: JobHeaderProps) {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <div className="flex flex-col gap-4">
        {/* Company */}
        <div className="flex items-center gap-[14px]">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] bg-[#1F1F25] text-[20px] font-bold text-white">
            {job.companyInitial}
          </div>

          <div className="flex flex-col gap-[2px]">
            <h2 className="text-[15px] font-semibold text-[#1F1F25]">
              {job.company}
            </h2>

            <p className="text-[12px] text-[#5D5D61]">
              {job.location} <span className="mx-1">·</span>{" "}
              {job.employmentType} <span className="mx-1">·</span> {job.posted}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#E5FAFC] px-3 py-[6px] text-[11px] font-semibold text-[#008EA3]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Apply */}
        <Button
          variant="primary"
          className="w-fit rounded-[8px] px-[22px] py-3 text-[13px] font-semibold"
          onClick={() => {
            console.log("Apply for:", job.slug);
          }}
        >
          Apply for this Job
        </Button>
      </div>
    </section>
  );
}
