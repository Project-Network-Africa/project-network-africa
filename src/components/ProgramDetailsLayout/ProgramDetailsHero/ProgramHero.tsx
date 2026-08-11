import Button from "../../ui/Button";

import MentorAvatars from "./MentorAvatars";
import ProgramStatCard from "./ProgramStats";

import { Hero } from "../../../types/program";

export default function ProgramDetailsHero({
  programName,
  title,
  description,
  stats,
  mentors,
  buttonHref,
  buttonText,
  mentorText,
}: Hero) {
  return (
    <section className="w-full bg-[#F8F8F8] px-5 py-12 sm:px-8 lg:px-20 lg:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
        {/* Breadcrumb */}
        <p className="text-sm text-[#1F1F25] sm:text-base">
          Program / <span className="text-[#00B6CE]">{programName}</span>
        </p>

        {/* Title */}
        <h1
          className=" max-w-[900px] text-[28px] font-bold leading-[118%] text-[#1F1F25] sm:text-[32px] lg:text-[40px]
          "
        >
          {title}
        </h1>

        {/* Description */}
        <div className="border-t border-[#1F1F25] pt-5">
          <p
            className="
              max-w-[1080px]
              text-sm
              leading-7
              text-[#1F1F25]
              sm:text-[15px]
              lg:text-base
            "
          >
            {description}
          </p>
        </div>

        {/* Stats */}
        <div className="border-t border-[#1F1F25] pt-5">
          <div
            className="
              grid
              grid-cols-2
              gap-6
              sm:grid-cols-2
              md:grid-cols-4
              md:gap-8
              lg:max-w-[700px]
            "
          >
            {stats.map((stat) => (
              <ProgramStatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
            md:max-w-[700px]
          "
        >
          <Button href={buttonHref}>{buttonText}</Button>

          <MentorAvatars mentors={mentors} text={mentorText} />
        </div>
      </div>
    </section>
  );
}
