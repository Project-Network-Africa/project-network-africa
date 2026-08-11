import { Section } from "../../ui";
import { Requirement } from "../../../types/program";

interface ProgramRequirementsProps {
  requirements: Requirement[];
}

export default function ProgramRequirements({
  requirements,
}: ProgramRequirementsProps) {
  return (
    <Section className="bg-white">
      <div className="flex flex-col gap-5">
        {/* Section Header */}
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[1px] text-[#00B6CE]">
            Requirements
          </p>

          <h2 className="text-[26px] font-bold leading-[100%] text-[#1F1F25]">
            Who this program is for
          </h2>
        </div>

        {/* Requirements */}
        <div className="flex flex-col gap-4">
          {requirements.map((requirement, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-[5px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#00B6CE]" />

              <p className="text-[13px] leading-[100%] text-[#5D5D61]">
                {requirement.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
