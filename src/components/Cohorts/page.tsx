import { cohortFaq } from "@/src/data/faq/faq";
import CTA from "../Home/CTA";
import FAQ from "../Home/Faq";
import { cohortExperienceItems } from "./CohortExperience/cohort-experience-data";
import CohortExperience from "./CohortExperience/CohortExperience";
import { cohortFinderData } from "./CohortFinder/cohort-finder-data";
import CohortFinder from "./CohortFinder/CohortFinder";
import {
  cohortOutcomeQuote,
  cohortOutcomeStats,
} from "./CohortOutcomes/cohort-outcomes-data";
import CohortOutcomes from "./CohortOutcomes/CohortOutcomes";
import {
  cohortAvailability,
  cohortHeroStats,
} from "./CohortsHero/cohorts-hero-data";

import CohortsHero from "./CohortsHero/CohortsHero";
import { cohortJourneySteps } from "./HowCohortsWork/how-cohorts-work-data";
import HowCohortsWork from "./HowCohortsWork/HowCohortsWork";
import { upcomingCohorts } from "./UpcomingCohorts/upcoming-cohorts-data";
import UpcomingCohorts from "./UpcomingCohorts/UpcomingCohorts";
export default function ProgramsPage() {
  return (
    <>
      <main className="bg-[#F8F8F8]">
        <CohortsHero
          stats={cohortHeroStats}
          availabilityItems={cohortAvailability}
        />

        <CohortFinder cohorts={cohortFinderData} />
        <CohortExperience items={cohortExperienceItems} />
        <HowCohortsWork steps={cohortJourneySteps} />

        <UpcomingCohorts cohorts={upcomingCohorts} />

        <CohortOutcomes stats={cohortOutcomeStats} quote={cohortOutcomeQuote} />
        <FAQ
          label="COHORT QUESTIONS"
          title="Common questions about joining a cohort"
          description="Answers about eligibility, practical project work, student participation, and cohort availability."
          items={cohortFaq}
        />

        <CTA
          title="Ready to join the next PN Africa cohort?"
          description="Choose your programme, check availability, and start your application today."
          primaryText="Explore Open Cohorts"
          primaryHref="#explore-cohorts"
          secondaryText="Talk to an Advisor"
          secondaryHref="/contact"
          primaryButtonClassName="px-[2px]"
          titleClassName="text-[#FFFFFF] font-body"
          descriptionClassName="text-[#FFFFFF]"
        />
      </main>
    </>
  );
}
