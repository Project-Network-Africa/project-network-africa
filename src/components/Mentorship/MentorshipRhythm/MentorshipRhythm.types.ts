export interface RhythmStep {
  number: string;
  title: string;
  description: string;
}

export interface MentorshipRhythmProps {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  cadence: string;
  cardEyebrow: string;
  cardTitle: string;
  steps: RhythmStep[];
  backgroundClassName?: string;
}
