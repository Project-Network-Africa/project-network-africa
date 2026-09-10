import ExperienceOutcomes from "./ExperienceOutcomes/ExperienceOutcomes";
import { experienceOutcomes } from "./ExperienceOutcomes/experience-outcomes-data";
import ParticipantReflections from "./ParticipantReflections/ParticipantReflections";
import { participantReflections } from "./ParticipantReflections/participant-reflections-data";
import SuccessStoriesHero from "./SuccessStoriesHero/SuccessStoriesHero";
import { successStoryPreviews } from "./SuccessStoriesHero/success-stories-hero-data";

export default function ProgramsPage() {
  return (
    <>
      <main className="bg-[#F8F8F8]">
        <SuccessStoriesHero stories={successStoryPreviews} />
        <ParticipantReflections reflections={participantReflections} />
        <ExperienceOutcomes outcomes={experienceOutcomes} />
      </main>
    </>
  );
}
