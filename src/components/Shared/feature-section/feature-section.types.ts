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
