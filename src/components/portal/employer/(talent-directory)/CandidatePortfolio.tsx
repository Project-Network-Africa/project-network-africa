import { Candidate } from "@/src/types/candidate";
import Image from "next/image";
interface CandidatePortfolioProps {
  candidate: Candidate;
}

export default function CandidatePortfolio({
  candidate,
}: CandidatePortfolioProps) {
  return (
    <div className="flex w-full flex-col gap-5">
      <h1 className="text-[24px] font-bold leading-none text-[#1F1F25]">
        {candidate.name} — Portfolio
      </h1>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {candidate.portfolio.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-[14px] border border-[#E5E5EB] bg-white shadow-[0px_2px_8px_0px_#0000000A]"
          >
            <div className="relative h-[180px] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="px-[22px] py-[18px]">
              <h2 className="text-[14px] font-semibold text-[#1F1F25]">
                {project.title}
              </h2>

              <p className="mt-3 text-[12px] leading-[1.4] text-[#5D5D61]">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
