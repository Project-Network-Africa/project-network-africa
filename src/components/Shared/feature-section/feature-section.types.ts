export interface FeatureContentProps {
  label: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  buttonClassName?: string;
}

export interface FeatureVisualProps {
  children: React.ReactNode;
}
export interface FeatureCardProps {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}
export interface FeatureSectionProps {
  label?: string;
  title: string;
  features: FeatureCardProps[];
  centered?: boolean;
  columns?: 2 | 3 | 4;
}
