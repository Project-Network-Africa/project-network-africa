import MissionVision from "./MissionVision";
import CoreValues from "./CoreValues";
import History from "./History";
import PeopleSection from "../Shared/People";
import StatsSection from "../Shared/StatsSection";
import CTA from "../Home/CTA";
import { leadership } from "./Leadership/leadership.data";
import { impactData } from "../Home/Impact/impact-card.data";
export default function ProgramsPage() {
  return (
    <>
      <main className="bg-[#F8F8F8]">
        <MissionVision />
        <CoreValues />
        <History />
        <PeopleSection
          label="LEADERSHIP"
          title="The team behind PN Africa"
          people={leadership}
          columns={3}
          backgroundClass="bg-[#F8F8F8];
"
        />
        <StatsSection
          label="OUR IMPACT"
          title="Numbers that speak for the network"
          stats={impactData}
          columns={3}
        />
        <CTA
          title="Join the movement to close Africa's tech talent gap"
          primaryText="Apply Now"
          primaryHref="/apply"
        />
      </main>
    </>
  );
}
