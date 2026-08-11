import { Section } from "../../ui";

import InstructorStatCard from "./InstructorStat";

import { Instructor } from "../../../types/program";
// import { InstructorBioProps } from "./instructor-bio.types";

export default function InstructorBio({
  role,
  initials,
  avatarBg,
  name,
  bio,
  stats,
}: Instructor) {
  return (
    <Section className="bg-white">
      <div className="rounded-2xl bg-[#FFFFFF] p-8">
        <div className="flex flex-col gap-8 lg:flex-row items-center">
          {/* Avatar */}

          <div
            className="flex h-[88px] w-[88px] items-center justify-center rounded-full text-[32px] font-bold text-white "
            style={{
              backgroundColor: avatarBg,
            }}
          >
            {initials}
          </div>

          {/* Content */}

          <div className="flex flex-1 flex-col gap-6">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[1px] text-[#00B6CE]">
                {role}
              </p>

              <h2 className="mb-4 text-xl font-bold text-[#1F1F25]">{name}</h2>

              <p className="max-w-[1000px] text-[13px] leading-7 text-[#5D5D61]">
                {bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-10">
              {stats.map((stat) => (
                <InstructorStatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
