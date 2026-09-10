export interface CohortExperienceItem {
  number: string;
  title: string;
  description: string;
}

export interface CohortExperienceProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: CohortExperienceItem[];
  backgroundClassName?: string;
}
