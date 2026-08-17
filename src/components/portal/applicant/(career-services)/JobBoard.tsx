import { Button } from "@/src/components/ui";
import { Job } from "./career-services.types";

interface JobBoardProps {
  jobs: Job[];
}

export default function JobBoard({ jobs }: JobBoardProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-[14px] text-[10px] font-semibold uppercase text-[#5D5D61]">
        Job Board — Curated for Product Design Alumni
      </p>

      <div className="flex flex-col gap-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex min-h-[50px] items-center justify-between gap-4 rounded-[10px] bg-[#F9F9FA] px-4 py-2"
          >
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-[#1F1F25]">
                {job.title} · {job.company}
              </p>

              <p className="text-[11px] text-[#5D5D61]">{job.location}</p>
            </div>

            <Button
              variant="light"
              href={`/applicant/career-services/${job.slug}`}
              className="shrink-0 rounded-[8px] px-4 py-[8px] text-[12px] font-semibold"
            >
              View Job
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
