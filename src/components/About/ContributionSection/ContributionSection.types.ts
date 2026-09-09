export interface ContributionOption {
  number: string;
  label: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  highlighted?: boolean;
}

export interface ContributionSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  options: ContributionOption[];
  backgroundClassName?: string;
}
