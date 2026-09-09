"use client";

import { useMemo, useState } from "react";
import ProgramsHero from "./ProgramsHero/ProgramHero";
import ProgrammeFinder from "./ProgrammeFinder/ProgrammeFinder";
import ProgrammeCatalogue from "./ProgrammeCatalogue/ProgrammeCatalogue";
import { programmes } from "./programmes-data";
import ApplicationJourney from "./ApplicationJourney/ApplicationJourney";
import { applicationJourneySteps } from "./ApplicationJourney/application-journey-data";
import ProgrammeBenefits from "./ProgrammeBenefits/ProgrammeBenefits";
import { programmeBenefits } from "./ProgrammeBenefits/programme-benefits-data";
import CareerPathHelper from "./CareerPathHelper/CareerPathHelper";
import { careerPathOptions } from "./CareerPathHelper/career-path-helper-data";
import LearnerOutcomes from "./LearnerOutcomes/LearnerOutcomes";
import { learnerOutcomeStats } from "./LearnerOutcomes/learner-outcomes-data";
import FAQ from "../Home/Faq";
import { programmesFaq } from "@/src/data/faq/faq";
import { CTA } from "../Home";

export default function ProgramsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All programmes");

  const filteredProgrammes = useMemo(() => {
    return programmes.filter((programme) => {
      const matchesCategory =
        category === "All programmes" ||
        (category === "Business & Growth"
          ? ["Business", "Growth"].includes(programme.category)
          : programme.category.toLowerCase() === category.toLowerCase());

      const searchTerm = search.toLowerCase().trim();

      const matchesSearch =
        !searchTerm ||
        programme.title.toLowerCase().includes(searchTerm) ||
        programme.description.toLowerCase().includes(searchTerm) ||
        programme.category.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      <ProgramsHero />

      <ProgrammeFinder
        programmeCount={filteredProgrammes.length}
        totalProgrammeCount={programmes.length}
        categories={["Design", "Engineering", "Data", "Business & Growth"]}
        search={search}
        activeCategory={category}
        onSearch={setSearch}
        onCategoryChange={setCategory}
      />

      <div id="programmes">
        <ProgrammeCatalogue programmes={filteredProgrammes} />
      </div>
      <CareerPathHelper options={careerPathOptions} />
      <ProgrammeBenefits benefits={programmeBenefits} />
      <ApplicationJourney steps={applicationJourneySteps} />
      <LearnerOutcomes stats={learnerOutcomeStats} />
      <FAQ
        label="PROGRAMME QUESTIONS"
        title="What to know before choosing a programme"
        description="Review the most common questions about eligibility, delivery, applications and joining a future cohort."
        items={programmesFaq}
        helper={{
          title: "Still deciding?",
          description:
            "Contact the programme team for guidance on the best track for your goals.",
          linkText: "Ask a programme question",
          href: "/contact",
        }}
      />
      <CTA
        eyebrow="READY WHEN YOU ARE"
        title="Your next career chapter can start here"
        description="Choose a programme, review the next cohort and submit an application when the timing is right."
        primaryText="Get Started"
        primaryHref="/register"
        secondaryText="View cohorts"
        secondaryHref="/cohorts"
        backgroundClassName="bg-[#00B6CE]"
        titleClassName="text-[#1F1F25] text-[38px]"
        descriptionClassName="text-[#1F1F25]"
        primaryButtonClassName="bg-[#1F1F25] text-white"
        secondaryButtonClassName="bg-white text-black"
      />
    </>
  );
}
