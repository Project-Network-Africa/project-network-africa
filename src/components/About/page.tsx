import AboutHero from "./AboutHero/AboutHero";
import ImpactAtAGlance from "./ImpactAtGlance";
import HowPNWorks from "./HowPNWorks";
import MissionVision from "./MissionVision";
import StorySection from "./StorySection";
import PrinciplesSection from "./Values";
import JourneySection from "./JourneySection";
import LeadershipSection from "./LeadershipSection";
import ContributionSection from "./ContributionSection";
export default function ProgramsPage() {
  return (
    <>
      <main className="bg-[#F8F8F8]">
        <AboutHero />
        <ImpactAtAGlance />
        <StorySection />
        <MissionVision />
        <HowPNWorks />
        <PrinciplesSection />
        <JourneySection />
        <LeadershipSection />
        <ContributionSection />
      </main>
    </>
  );
}
