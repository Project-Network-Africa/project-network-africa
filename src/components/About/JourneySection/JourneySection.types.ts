export interface JourneyItem {
  date: string;
  label: string;
  description: string;
  highlighted?: boolean;
}

export interface JourneyGoal {
  label: string;
  text: string;
  linkText?: string;
}

export interface JourneySectionProps {
  eyebrow: string;
  title: string;
  description: string;
  milestones: JourneyItem[];
  goal: JourneyGoal;
  backgroundClassName?: string;
}
