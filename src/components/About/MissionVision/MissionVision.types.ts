export interface MissionVisionCard {
  number: string;
  label: string;
  title: string;
  description: string;
  tag: string;
  variant: "dark" | "aqua";
}

export interface MissionVisionProps {
  eyebrow: string;
  title: string;
  cards: MissionVisionCard[];
  backgroundClassName?: string;
}
