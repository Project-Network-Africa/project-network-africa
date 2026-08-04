import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MissionVision from "./MissionVision";
export default function ProgramsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F8F8]">
        <MissionVision />
      </main>

      <Footer />
    </>
  );
}
