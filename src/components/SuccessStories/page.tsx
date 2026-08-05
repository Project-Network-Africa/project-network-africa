import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import PeopleSection from "../Shared/People";
import StatsSection from "../Shared/StatsSection";
import { successStories } from "./SuccessStories/success-stories.data";
import { graduateTestimonials } from "./GraduateTestimonials/graduateTestimonials.data";
import QuoteSection from "../Shared/QuoteSection";
import { employmentStatistics } from "./EmploymentStatistics/employment-statistics.data";
import ContentSection from "../Shared/ContentCard";
import { caseStudies } from "./caseStudies/case-studies.data";

export default function ProgramsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F8F8]">
        <PeopleSection
          label="SUCCESS STORIES"
          title="Graduates building careers across Africa's top companies"
          people={successStories}
          columns={3}
          backgroundClass="bg-white"
        />
        <ContentSection
          label="CASE STUDIES"
          title="Deeper looks at graduate journeys"
          items={caseStudies}
          columns={2}
        />
        <QuoteSection
          label="TESTIMONIALS"
          title="In their own words"
          quotes={graduateTestimonials}
          showAuthor={false}
        />
        <StatsSection
          label="EMPLOYMENT STATISTICS"
          title="Proven outcomes for our graduates"
          stats={employmentStatistics}
          columns={3}
        />
      </main>

      <Footer />
    </>
  );
}
