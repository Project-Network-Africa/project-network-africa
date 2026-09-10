import {
  Hero,
  ChoosePath,
  WhyPNAfrica,
  ProgramsOverview,
  HowItWorks,
  RealProjectExperience,
  CTA,
  Community,
} from "../../components/Home";

import StatsSection from "../../components/Shared/StatsSection";

import { impactData } from "../../components/Home/Impact/impact-card.data";
import FAQ from "../../components/Home/Faq";
import { homeFaqData } from "../../data/faq/faq";
import MentorshipNetwork from "@/src/components/Home/MentorshipNetwork/MentorshipNetwork";
import Testimonial from "@/src/components/Home/Testimonials/Testimonial";
import CommunityRoles from "@/src/components/Home/CommunityRoles";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CommunityRoles />
      <ChoosePath />
      <WhyPNAfrica />
      <ProgramsOverview />
      <HowItWorks />

      <RealProjectExperience />
      <MentorshipNetwork />

      <Testimonial />
      <StatsSection
        label="OUR IMPACT"
        title="A growing network of learners, mentors, and employers building Africa’s digital talent pipeline."
        stats={impactData}
      />
      <Community />
      <FAQ label="FAQ" title="Common questions" items={homeFaqData} />

      <CTA
        title="Ready to start your journey with PN Africa?"
        primaryText="Apply Now"
        primaryHref="/cohorts"
        secondaryText="Talk to an Advisor"
        secondaryHref="/contact"
        titleClassName="text-[#FFFFFF]"
        secondaryButtonClassName="bg"
      />
    </>
  );
}
