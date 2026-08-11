import { Section, SectionHeader } from "../../ui";

import OutcomeCard from "./OutcomeCard";
import { LearningOutcomesSection } from "../../../types/program";
export default function LearningOutcomes({
  label,
  title,
  outcomes,
}: LearningOutcomesSection) {
  return (
    <Section className="bg-white">
      <div className="flex flex-col gap-7">
        <SectionHeader label={label} title={title} />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {outcomes.map((outcome, index) => (
            <OutcomeCard key={index} {...outcome} />
          ))}
        </div>
      </div>
    </Section>
  );
}
