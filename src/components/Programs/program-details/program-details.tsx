import Image from "next/image";
import ProgramHero from "../../Shared/program-hero";

export default function ProgramDetails() {
  return (
    <ProgramHero
      label="PRODUCT DESIGN BOOTCAMP"
      title="Become a job-ready product designer in 12 weeks"
      description="A cohort-based program covering UX research, UI design, prototyping and a real-world capstone project reviewed by mentors and employer partners."
      duration="12 Weeks"
      format="Hybrid, cohort-based"
      eligibility="Open, no experience"
      buttonText="Apply to this Program"
    >
      <Image
        src="/images/programsoverview/product-design.png"
        alt="Mentorship"
        width={480}
        height={320}
        className="h-full w-full rounded-2xl object-cover"
      />
    </ProgramHero>
  );
}
