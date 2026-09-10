export interface CohortHeroStat {
  value: string;
  label: string;
}

export interface CohortAvailability {
  programme: string;
  seatsLabel: string;
  seatsClassName?: string;
}

export interface CohortsHeroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  stats?: CohortHeroStat[];
  availabilityLabel?: string;
  availabilityDate?: string;
  availabilityDescription?: string;
  availabilityItems?: CohortAvailability[];
  backgroundClassName?: string;
}
