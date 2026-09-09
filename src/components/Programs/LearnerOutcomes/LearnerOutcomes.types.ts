export interface LearnerOutcomeStat {
  value: string;
  label: string;
}

export interface LearnerOutcomesProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  stats: LearnerOutcomeStat[];
  linkText?: string;
  linkHref?: string;
  quote?: string;
  quoteLabel?: string;
  quoteAuthor?: string;
  backgroundClassName?: string;
}
