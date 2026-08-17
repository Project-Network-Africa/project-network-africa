"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/src/components/ui";
import { ApplicantStage, Job } from "@/src/types/employer/job";

interface JobApplicantsTableProps {
  job: Job;
}

const stageStyles: Record<ApplicantStage, string> = {
  Applied: "bg-[#FFF0E0] text-[#B86B00]",

  Shortlisted: "bg-[#E0F7ED] text-[#1A804D]",

  Interviewing: "bg-[#EAE6FF] text-[#6246D9]",

  Offered: "bg-[#E0F7ED] text-[#1A804D]",

  Hired: "bg-[#E0F7ED] text-[#1A804D]",

  Rejected: "bg-[#FDE7E7] text-[#C62828]",
};

export default function JobApplicantsTable({ job }: JobApplicantsTableProps) {
  const router = useRouter();

  return (
    <div className="overflow-hidden rounded-[14px] border border-[#E5E5EB] bg-white shadow-[0px_2px_8px_0px_#0000000A]">
      {/* Header */}
      <div className="grid grid-cols-[2fr_1.1fr_1.1fr_1.1fr] items-center bg-[#F6F6F7] px-[21px] py-[12px]">
        <p className="text-[11px] font-semibold text-[#5D5D61]">Candidate</p>

        <p className="text-[11px] font-semibold text-[#5D5D61]">Applied</p>

        <p className="text-[11px] font-semibold text-[#5D5D61]">Stage</p>

        <div />
      </div>

      {job.applicants.map((applicant) => (
        <div
          key={applicant.id}
          className="grid min-h-[60px] grid-cols-[2fr_1.1fr_1.1fr_1.1fr] items-center border-t border-[#E5E5EB] px-[21px]"
        >
          {/* Candidate */}
          <div className="flex items-center gap-[12px]">
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#1F1F25] text-[10px] font-semibold text-white">
              {applicant.initials}
            </div>

            <p className="text-[12px] font-semibold text-[#1F1F25]">
              {applicant.name}
            </p>
          </div>

          {/* Applied */}
          <p className="text-[12px] text-[#5D5D61]">{applicant.appliedDate}</p>

          {/* Stage */}
          <div>
            <span
              className={`inline-flex rounded-full px-[10px] py-[4px] text-[10px] font-semibold ${stageStyles[applicant.stage]}`}
            >
              {applicant.stage}
            </span>
          </div>

          {/* View Profile */}
          <div className="flex justify-end">
            <Button
              variant="light"
              onClick={() =>
                router.push(`/employer/talent-directory/${applicant.id}`)
              }
              className="h-[31px] rounded-[8px] border border-[#E5E5EB] px-4 text-[11px] font-semibold"
            >
              View Profile
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
