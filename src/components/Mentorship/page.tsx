import BecomeAmentor from "./BecomeAMentor";

import Testimonials from "./Testimonials";
import PeopleSection from "../Shared/People";
import Timeline from "../Shared/timeline";
import { mentorProcess } from "./MentorProcess/mentor-process.data";
import { featuredMentors } from "./featuredMentors.data";

export default function ProgramsPage() {
  return (
    <>
      <main className="bg-[#F8F8F8]">
        <BecomeAmentor />
        {/* <Mentorship /> */}
        <Timeline
          label="MENTOR PROCESS"
          title="How mentor matching works"
          items={mentorProcess}
          columns={4}
        />
        <PeopleSection
          label="FEATURED MENTORS"
          title="Meet some of our mentors"
          people={featuredMentors}
          columns={3}
          buttonText="Preview Mentor Portal"
          buttonHref="/mentorship"
        />
        <Testimonials />
      </main>
    </>
  );
}
