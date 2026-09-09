export interface HowPNWorksStep {
  number: string;
  label: string;
  title: string;
  description: string;
  tag: string;
}

export interface HowPNWorksHighlight {
  label: string;
  text: string;
}

export interface HowPNWorksProps {
  eyebrow: string;
  title: string;
  description: string;
  steps: HowPNWorksStep[];
  highlights: HowPNWorksHighlight[];
  backgroundClassName?: string;
}
