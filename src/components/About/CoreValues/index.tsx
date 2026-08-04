import { Section, SectionHeader } from "../../ui";
import CoreValueCard from "./CoreValueCard";
import { coreValues } from "./core-values.data";

export default function CoreValues() {
  return (
    <Section className="bg-[#F8F8F8]">
      <div className="flex flex-col gap-8">
        <SectionHeader label="CORE VALUES" title="What guides how we operate" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {coreValues.map((value) => (
            <CoreValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </Section>
  );
}
