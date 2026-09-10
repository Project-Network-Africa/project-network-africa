import { MatchingStep } from "./MentorshipMatching.types";

export const matchingSteps: MatchingStep[] = [
  {
    number: "01",
    title: "Tell us your goals",
    description:
      "Share your role interests, current skills, preferred working style and the areas where support would help most.",
    output: "OUTPUT · Mentorship profile",
  },
  {
    number: "02",
    title: "PN Africa reviews fit",
    description:
      "The team considers discipline, experience, availability and communication preferences.",
    output: "OUTPUT · Shortlisted match",
  },
  {
    number: "03",
    title: "Meet your mentor",
    description:
      "Start with a guided chemistry session to align expectations, boundaries and success goals.",
    output: "OUTPUT · Shared mentorship plan",
  },
  {
    number: "04",
    title: "Grow with structure",
    description:
      "Track agreed actions, bring real work to sessions and review progress at key cohort milestones.",
    output: "OUTPUT · Evidence of progress",
  },
];
