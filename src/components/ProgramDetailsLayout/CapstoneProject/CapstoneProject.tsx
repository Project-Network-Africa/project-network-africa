import Image from "next/image";

import SectionHeader from "../../ui/SectionHeader";
import MentorQuote from "./MentorQuote";

import { ProgramDetails } from "../../../types/program";

interface CapstoneProjectProps {
  program: ProgramDetails;
}

export default function CapstoneProject({ program }: CapstoneProjectProps) {
  const { capstoneProject, instructor } = program;

  return (
    <section className="w-full bg-[#F8F8F8] px-5 py-12 sm:px-8 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
        {/* Image */}

        <div className="relative w-full overflow-hidden rounded-2xl lg:h-[340px] lg:w-[520px] lg:shrink-0">
          <Image
            src={capstoneProject.image}
            alt={`${program.title} capstone project`}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
        </div>

        {/* Content */}

        <div className="flex w-full flex-col gap-[18px] lg:w-[712px]">
          <SectionHeader label="CAPSTONE PROJECT" title="What you'll build" />

          <p className="text-sm leading-7 text-[#5D5D61]">
            {capstoneProject.description}
          </p>

          <MentorQuote
            initials={instructor.initials}
            name={instructor.name}
            role={instructor.role}
            avatarBg={instructor.avatarBg}
            quote={capstoneProject.quote}
          />
        </div>
      </div>
    </section>
  );
}
