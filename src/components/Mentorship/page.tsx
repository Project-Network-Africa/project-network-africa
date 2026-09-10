import BecomeMentor from "./BecomeMentor/BecomeMentor";
import { becomeMentorData } from "./BecomeMentor/become-mentor-data";
import MentorDiscovery from "./MentorDiscovery/MentorDiscovery";
import { mentorDiscoveryData } from "./MentorDiscovery/mentor-discovery-data";
import MentorshipHero from "./MentorshipHero/MentorshipHero";
import { mentorshipHeroStats } from "./MentorshipHero/mentorship-hero-data";
import MentorshipMatching from "./MentorshipMatching/MentorshipMatching";
import { matchingSteps } from "./MentorshipMatching/mentorship-matching-data";
import MentorshipOutcomes from "./MentorshipOutcomes/MentorshipOutcomes";
import { mentorshipOutcomesData } from "./MentorshipOutcomes/mentorship-outcomes-data";
import MentorshipRhythm from "./MentorshipRhythm/MentorshipRhythm";
import { mentorshipRhythmData } from "./MentorshipRhythm/mentorship-rhythm-data";
import MentorshipValue from "./MentorshipValue/MentorshipValue";
import { mentorshipValueItems } from "./MentorshipValue/mentorship-value-data";

export default function ProgramsPage() {
  return (
    <>
      <main className="bg-[#F8F8F8]">
        <MentorshipHero
          image="/images/mentors/hero.jpg"
          stats={mentorshipHeroStats}
        />
        <MentorshipValue items={mentorshipValueItems} />

        <MentorDiscovery mentors={mentorDiscoveryData} />
        <MentorshipMatching
          eyebrow="HOW MATCHING WORKS"
          title="A thoughtful match, not a random introduction"
          description="Your goals, discipline and learning needs shape the mentor relationship from day one."
          matchTimeLabel="TYPICAL MATCH TIME"
          matchTime="Within your cohort onboarding"
          steps={matchingSteps}
        />
        {/* <MentorshipRhythm
          eyebrow={mentorshipRhythmData.eyebrow}
          title={mentorshipRhythmData.title}
          description={mentorshipRhythmData.description}
          points={mentorshipRhythmData.points}
          cadence={mentorshipRhythmData.cadence}
          cardEyebrow={mentorshipRhythmData.cardEyebrow}
          cardTitle={mentorshipRhythmData.cardTitle}
          steps={mentorshipRhythmData.steps}
        /> */}
        <MentorshipRhythm {...mentorshipRhythmData} />
        <BecomeMentor {...becomeMentorData} />
        <MentorshipOutcomes {...mentorshipOutcomesData} />
      </main>
    </>
  );
}
