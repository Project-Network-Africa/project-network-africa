import { CohortJourneyStep } from "./HowCohortsWork.types";

export const cohortJourneySteps: CohortJourneyStep[] = [
  {
    number: "01",
    label: "APPLICATION",
    title: "Apply & choose",
    description:
      "Submit your details, select a programme, and tell us about your goals.",
  },
  {
    number: "02",
    label: "MATCHING",
    title: "Assessment & match",
    description:
      "Complete the short assessment and receive your cohort placement.",
  },
  {
    number: "03",
    label: "LEARNING",
    title: "Core curriculum",
    description:
      "Follow weekly lessons, workshops, mentor sessions, and team check-ins.",
  },
  {
    number: "04",
    label: "BUILDING",
    title: "Capstone project",
    description:
      "Solve a real brief with a cross-functional team and present the outcome.",
  },
  {
    number: "05",
    label: "CAREER",
    title: "Graduate & grow",
    description:
      "Polish your portfolio, practise interviews, and access career opportunities.",
  },
];
