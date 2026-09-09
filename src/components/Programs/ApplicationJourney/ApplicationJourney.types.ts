export interface ApplicationJourneyStep {
  number: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface ApplicationJourneyProps {
  eyebrow?: string;
  title?: string;
  buttonLabel?: string;
  buttonHref?: string;
  steps: ApplicationJourneyStep[];
  backgroundClassName?: string;
}
