export interface CohortOutcomeStat {
  value: string;
  label: string;
}

export interface CohortOutcomeQuote {
  quote: string;
  name: string;
  role: string;
}

export interface CohortOutcomesProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  stats: CohortOutcomeStat[];
  quote: CohortOutcomeQuote;
  backgroundClassName?: string;
}
