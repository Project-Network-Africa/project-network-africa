import { Candidate } from "@/src/types/candidate";
import Link from "next/link";
import Image from "next/image";
interface CandidateProfileProps {
  candidate: Candidate;
}

export default function CandidateProfile({ candidate }: CandidateProfileProps) {
  return (
    <div className="flex w-full flex-col gap-5">
      {/* Header */}
      <h1 className="text-[24px] font-bold leading-none text-[#1F1F25]">
        {candidate.name}
      </h1>

      {/* Candidate summary */}
      <section className="w-full max-w-[495px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-[18px] shadow-[0px_2px_8px_0px_#0000000A]">
        <div className="flex items-center gap-4">
          {candidate.profileImage ? (
            <Image
              src={candidate.profileImage}
              alt={candidate.name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#00B6CE]">
              <span className="text-[24px] font-bold text-white">
                {candidate.initials}
              </span>
            </div>
          )}

          <div className="min-w-0 flex-1">
            <p className="text-[14px] font-semibold text-[#1F1F25]">
              {candidate.name}
            </p>

            <p className="mt-1 text-[11px] text-[#5D5D61]">
              {candidate.role} · {candidate.cohort} Graduate
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-[8px] border border-[#E5E5EB] px-4 py-2 text-[11px] font-semibold text-[#1F1F25]"
            >
              Save
            </button>

            <button
              type="button"
              className="rounded-[8px] bg-[#1F1F25] px-4 py-2 text-[11px] font-semibold text-white"
            >
              Message
            </button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_340px]">
        {/* Skills / endorsement */}
        <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
          <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
            Skills
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {candidate.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#E5F9FC] px-3 py-[6px] text-[11px] font-semibold text-[#00A8BE]"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="mt-5 text-[10px] font-semibold uppercase text-[#5D5D61]">
            Mentor Endorsement
          </p>

          <p className="mt-3 text-[12px] leading-[1.4] text-[#1F1F25]">
            {candidate.endorsement}
          </p>
        </section>

        {/* Portfolio */}
        <section className="rounded-[14px] border border-[#E5E5EB] bg-white p-[22px] shadow-[0px_2px_8px_0px_#0000000A]">
          <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
            Portfolio
          </p>

          {candidate.portfolio.length > 0 ? (
            <>
              <Image
                src={candidate.portfolio[0].image}
                alt={candidate.portfolio[0].title}
                width={600}
                height={180}
                className="mt-3 h-[180px] w-full rounded-[12px] object-cover"
              />

              <Link
                href={`/employer/talent-directory/${candidate.id}/portfolio`}
                className="mt-3 inline-flex rounded-[8px] border border-[#E5E5EB] px-4 py-2 text-[11px] font-semibold text-[#1F1F25]"
              >
                View Full Portfolio
              </Link>
            </>
          ) : (
            <p className="mt-3 text-[12px] text-[#5D5D61]">
              No portfolio available.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
