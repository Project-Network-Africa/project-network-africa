import { Button, Section, SectionHeader } from "../../ui";
import MentorCard from "./mentor-card";
import { mentors } from "./mentor-card.data";

export default function MentorshipNetwork() {
  return (
    <Section className="bg-[#F8F8F8]">
      <div className="flex flex-col gap-9">
        <SectionHeader
          label="MENTORSHIP NETWORK"
          title="Learn directly from industry professionals"
        />

        <div className="grid grid-cols-4 gap-20">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.name} {...mentor} />
          ))}
        </div>

        <div className="flex ">
          <Button
            href="/mentors"
            className="rounded-[10px] bg-[#1F1F25] px-6 py-[14px] text-sm font-semibold hover:bg-black"
          >
            Meet Our Mentors
          </Button>
        </div>
      </div>
    </Section>
  );
}
