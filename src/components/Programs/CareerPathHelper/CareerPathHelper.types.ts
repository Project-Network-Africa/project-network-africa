export interface CareerPathOption {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface CareerPathHelperProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  note?: string;
  options: CareerPathOption[];
  backgroundClassName?: string;
}
