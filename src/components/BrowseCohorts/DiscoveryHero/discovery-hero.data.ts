import { cohorts } from "@/src/data/cohorts/cohorts";
import { DiscoveryHeroContent } from "./discovery-hero.types";

const programCount = new Set(cohorts.map((c) => c.category)).size;

export const browseCohortsHero: DiscoveryHeroContent = {
  // breadcrumb: "Homepage / Browse Cohorts",

  title: "Find your cohort",

  description: `Every open cohort across all ${programCount} programs, updated in real time. Filter by track, format, or start date to find the right fit.`,

  searchPlaceholder: "Search by program, cohort, or keyword...",

  buttonText: "Search",
};
