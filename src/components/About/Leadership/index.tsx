import { Section, SectionHeader } from "../../ui";
import LeadershipCard from "./LeadershipCard";
import { leadership } from "./leadership.data";

export default function Leadership() {
  return (
    <Section className="bg-[#F8F8F8]">
      <div className="flex flex-col gap-8">
        <SectionHeader label="LEADERSHIP" title="The team behind PN Africa" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {leadership.map((member) => (
            <LeadershipCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </Section>
  );
}
