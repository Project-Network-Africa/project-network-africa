import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MissionVision from "./MissionVision";
import CoreValues from "./CoreValues";
import History from "./History";
import Leadership from "./Leadership";
import Impact from "../Home/Impact";
import CTA from "../Home/CTA";
export default function ProgramsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F8F8]">
        <MissionVision />
        <CoreValues />
        <History />
        <Leadership />
        <Impact />
        <CTA
          title="Join the movement to close Africa's tech talent gap"
          primaryText="Apply Now"
          primaryHref="/apply"
        />
      </main>

      <Footer />
    </>
  );
}
