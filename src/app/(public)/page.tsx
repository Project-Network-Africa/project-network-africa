import {
  Hero,
  ChoosePath,
  WhyPNAfrica,
  ProgramsOverview,
  HowItWorks,
  RealProjectExperience,
  EmployerPartnership,
  CTA,
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
      {/* <PeopleSection
        label="FEATURED MENTORS"
        title="Meet some of our mentors"
        people={mentors}
        columns={4}
      />
      <Testimonials /> */}
      <Testimonial />
      <StatsSection
        label="OUR IMPACT"
        title="A growing network of learners, mentors, and employers building Africa’s digital talent pipeline."
        stats={impactData}
      />
      <EmployerPartnership />
      <FAQ label="FAQ" title="Common questions" items={homeFaqData} />
      <CTA
        title="Ready to start your journey with PN Africa?"
        primaryText="Apply Now"
        primaryHref="/apply"
        secondaryText="Talk to an Advisor"
        secondaryHref="/contact"
      />
    </>
  );
}
