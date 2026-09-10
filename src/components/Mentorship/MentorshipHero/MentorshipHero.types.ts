export interface MentorshipHeroStat {
  value: string;
  label: string;
}

export interface MentorshipHeroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  note?: string;
  image: string;
  imageAlt?: string;
  stats: MentorshipHeroStat[];
  backgroundClassName?: string;
}
