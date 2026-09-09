export interface Principle {
  icon: string;
  title: string;
  description: string;
  footer: string;
  highlighted?: boolean;
}

export interface PrinciplesSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  principles: Principle[];
  backgroundClassName?: string;
}
