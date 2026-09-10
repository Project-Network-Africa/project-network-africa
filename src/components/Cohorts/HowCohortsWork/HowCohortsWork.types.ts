export interface CohortJourneyStep {
  number: string;
  label: string;
  title: string;
  description: string;
}

export interface HowCohortsWorkProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps: CohortJourneyStep[];
  backgroundClassName?: string;
}
