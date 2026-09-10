import { ApplicationJourneyStep } from "./ApplicationJourney.types";

export const applicationJourneySteps: ApplicationJourneyStep[] = [
  {
    number: "1",
    title: "Discover your fit",
    description:
      "Review programme focus, requirements, format and next start date.",
    linkText: "Explore programmes",
    href: "#explore-programmes",
  },
  {
    number: "2",
    title: "Prepare your profile",
    description:
      "Add your background, goals and any information required for review.",
    linkText: "Check requirements",
    href: "#explore-programmes",
  },
  {
    number: "3",
    title: "Apply to a cohort",
    description:
      "Choose an open cohort, submit your application and track its status.",
    linkText: "Start application",
    href: "/cohorts",
  },
];
