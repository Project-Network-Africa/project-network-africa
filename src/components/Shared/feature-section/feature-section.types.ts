export interface FeatureDetail {
  label: string;
  value: string;
}

export interface FeatureContentProps {
  label?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  buttonClassName?: string;
  details?: FeatureDetail[];
}

import { ReactNode } from "react";

export interface FeatureVisualProps {
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
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
