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
  MentorshipNetwork,
  Testimonials,
  Impact,
  EmployerPartnership,
  Faq,
  CTA,
} from "../components/Home";

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
      <MentorshipNetwork />
      <Testimonials />
      <Impact />
      <EmployerPartnership />
      <Faq />
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
