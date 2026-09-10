export interface MatchingStep {
  number: string;
  title: string;
  description: string;
  output: string;
}

export interface MentorshipMatchingProps {
  eyebrow: string;
  title: string;
  description: string;
  matchTimeLabel: string;
  matchTime: string;
  steps: MatchingStep[];
  backgroundClassName?: string;
}
