import Image from "next/image";

import { ProjectValidation } from "@/src/types/mentor/project-validation";

interface ProjectSubmissionProps {
  submission: ProjectValidation;
}

export default function ProjectSubmission({
  submission,
}: ProjectSubmissionProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Submission
      </p>

      <div className="mt-[13px]">
        <div className="relative h-[220px] w-full overflow-hidden rounded-[12px] bg-[#F6F6F7]">
          <Image
            src={submission.imageUrl}
            alt={`${submission.title} submission`}
            fill
            className="object-cover"
          />
        </div>

        <p className="mt-[14px] text-[12px] text-[#5D5D61]">
          Submitted by{" "}
          <span className="font-medium text-[#5D5D61]">
            {submission.submittedBy}
          </span>{" "}
          · {submission.submittedAt}
        </p>
      </div>
    </section>
  );
}
