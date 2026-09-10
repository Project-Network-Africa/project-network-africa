export interface ExperienceOutcome {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceOutcomesProps {
  eyebrow?: string;
  title?: string;
  outcomes: ExperienceOutcome[];
  backgroundClassName?: string;
}
