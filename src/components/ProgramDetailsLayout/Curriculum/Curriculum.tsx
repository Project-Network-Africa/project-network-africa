import { Section } from "../../ui";
import { CurriculumItem } from "../../../types/program";
import CurriculumCard from "./CurriculumCard";

interface CurriculumProps {
  curriculum: CurriculumItem[];
}

export default function Curriculum({ curriculum }: CurriculumProps) {
  return (
    <Section className="bg-white">
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[1px] text-[#00B6CE]">
            CURRICULUM
          </p>

          <h2 className="text-2xl font-bold text-[#1F1F25]">
            How the 12 weeks break down
          </h2>
        </div>

        {/* Curriculum Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {curriculum.map((item) => (
            <CurriculumCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
