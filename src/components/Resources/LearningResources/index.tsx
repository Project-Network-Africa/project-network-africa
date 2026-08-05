import { Section, SectionHeader } from "../../ui";
import ResourceItem from "./ResourceItem";
import { resources } from "./resource.data";

export default function LearningResources() {
  return (
    <Section className="bg-[#F8F8F8]">
      <div className="flex flex-col gap-7">
        <SectionHeader
          label="LEARNING RESOURCES"
          title="Guides and materials"
        />

        <div className="flex flex-col gap-4">
          {resources.map((resource) => (
            <ResourceItem key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </Section>
  );
}
