import { CohortHeroStat, CohortAvailability } from "./CohortsHero.types";

export const cohortHeroStats: CohortHeroStat[] = [
  {
    value: "9",
    label: "Career programmes",
  },
  {
    value: "12–14 weeks",
    label: "Structured learning",
  },
  {
    value: "1:1",
    label: "Mentor support",
  },
];

export const cohortAvailability: CohortAvailability[] = [
  {
    programme: "Product Design",
    seatsLabel: "6 seats left",
    seatsClassName: "text-[#00B64F]",
  },
  {
    programme: "Software Engineering",
    seatsLabel: "2 seats left",
    seatsClassName: "text-[#F5A623]",
  },
];
