import { BioSkillsProps } from "./profile";

export default function BioSkills({ bio, skills }: BioSkillsProps) {
  return (
    <div className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-5 py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <div>
        <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
          Bio
        </p>

        <p className="mt-3 text-[13px] text-[#1F1F25]">{bio}</p>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
          Skills
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-[20px] bg-[#E5FAFC] px-3 py-[6px] text-[11px] font-semibold text-[#00B6CE]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
