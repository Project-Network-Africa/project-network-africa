import { Candidate } from "@/src/types/candidate";
import Link from "next/link";
import Image from "next/image";

interface CandidateCardProps {
  candidate: Candidate;
}

export default function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <div className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-5 py-[18px] shadow-[0px_2px_8px_0px_#0000000A]">
      <Link href={`/employer/talent/${candidate.id}`} className="block">
        <div className="flex flex-col items-center">
          {candidate.profileImage ? (
            <Image
              src={candidate.profileImage}
              alt={candidate.name}
              width={52}
              height={52}
              className="h-[52px] w-[52px] rounded-full object-cover"
            />
          ) : (
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#00B6CE]">
              <span className="text-[18.72px] font-bold leading-none text-white">
                {candidate.initials}
              </span>
            </div>
          )}

          <p className="mt-3 text-center text-[14px] font-semibold leading-none text-[#1F1F25]">
            {candidate.name}
          </p>

          <p className="mt-2 text-center text-[11px] leading-none text-[#5D5D61]">
            {candidate.role} · {candidate.cohort}
          </p>
        </div>
      </Link>

      <div className="mt-3 flex gap-2">
        <button
          type="button"
          className="flex h-[31px] flex-1 items-center justify-center rounded-[8px] border border-[#E5E5EB] bg-white px-[14px] text-[11px] font-semibold text-[#1F1F25]"
        >
          Save
        </button>

        <Link
          href={`/employer/talent-directory/${candidate.id}`}
          className="flex h-[31px] flex-1 items-center justify-center rounded-[8px] bg-[#1F1F25] px-[14px] text-[11px] font-semibold text-white"
        >
          View
        </Link>
      </div>
    </div>
  );
}
