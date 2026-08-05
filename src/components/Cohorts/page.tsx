import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import CurrentCohorts from "./CurrentCohort";
import PastCohorts from "./PastCohorts";
import CTA from "../Home/CTA";
import Timeline from "../Shared/timeline";
import { timelineSteps } from "./Timeline/timeline.data";
export default function ProgramsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F8F8]">
        <CurrentCohorts />
        <Timeline
          label="TIMELINE"
          title="How each cohort progresses"
          items={timelineSteps}
          columns={5}
        />
        ;
        <PastCohorts />
        <CTA
          title="Applications for Cohort 7 open soon"
          primaryText="Join the Waitlist"
          primaryHref="/apply"
        />
      </main>

      <Footer />
    </>
  );
}
