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
  Faq,
  CTA,
} from "../components/Home";
import PeopleSection from "./../components/Shared/People";
import StatsSection from "./../components/Shared/StatsSection";
import { mentors } from "../components/Home/MentorshipNetwork/mentor-card.data";
import { faqData } from "../components/Home/Faq/faq.data";
import { impactData } from "../components/Home/Impact/impact-card.data";

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
      <Faq items={faqData} />
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
