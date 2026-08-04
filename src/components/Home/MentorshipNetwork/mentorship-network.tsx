import { Button, Section, SectionHeader } from "../../ui";
import MentorCard from "./mentor-card";
import { mentors } from "./mentor-card.data";

export default function MentorshipNetwork() {
  return (
    <Section className="bg-[#F8F8F8]">
      <div className="flex flex-col gap-6 lg:gap-9">
        <SectionHeader
          label="MENTORSHIP NETWORK"
          title="Learn directly from industry professionals"
        />

        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {mentors.map((mentor) => (
            <MentorCard key={mentor.name} {...mentor} />
          ))}
        </div>

        <div className="flex justify-center lg:justify-start">
          <Button
            href="/mentors"
            className="w-full rounded-[10px] bg-[#1F1F25] px-6 py-[14px] text-sm font-semibold hover:bg-black sm:w-fit"
          >
            Meet Our Mentors
          </Button>
        </div>
      </div>
    </Section>
  );
}
