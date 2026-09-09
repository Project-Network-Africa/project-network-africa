export interface ProgrammeBenefit {
  number: string;
  title: string;
  description: string;
}

export interface ProgrammeBenefitsProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  benefits: ProgrammeBenefit[];
  backgroundClassName?: string;
}
