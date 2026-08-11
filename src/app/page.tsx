import Navbar from "../components/layout/Navbar/index";
import Footer from "../components/layout/Footer";

import {
  Hero,
  ChoosePath,
  TrustedPartners,
  WhyPNAfrica,
  ProgramsOverview,
  HowItWorks,
  RealProjectExperience,
  Testimonials,
  EmployerPartnership,
  CTA,
} from "../components/Home";
import PeopleSection from "./../components/Shared/People";
import StatsSection from "./../components/Shared/StatsSection";
import { mentors } from "../components/Home/MentorshipNetwork/mentor-card.data";

import { impactData } from "../components/Home/Impact/impact-card.data";
import FAQ from "../components/Home/Faq";
import { homeFaqData } from "../data/faq/faq";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ChoosePath />
      <TrustedPartners />
      <WhyPNAfrica />
      <ProgramsOverview />
      <HowItWorks />
      <RealProjectExperience />
      <PeopleSection
        label="FEATURED MENTORS"
        title="Meet some of our mentors"
        people={mentors}
        columns={4}
      />
      <Testimonials />
      <StatsSection
        label="OUR IMPACT"
        title="Numbers that speak for the network"
        stats={impactData}
      />
      <EmployerPartnership />
      <FAQ
        label="COHORT SELECTION"
        title="Common questions about choosing a cohort"
        items={homeFaqData}
      />
      <CTA
        title="Ready to start your journey with PN Africa?"
        primaryText="Apply Now"
        primaryHref="/apply"
        secondaryText="Talk to an Advisor"
        secondaryHref="/contact"
      />
      <Footer />
    </>
  );
}
