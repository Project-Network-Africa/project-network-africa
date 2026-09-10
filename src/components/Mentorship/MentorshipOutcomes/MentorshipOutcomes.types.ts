export interface MentorshipOutcome {
  number: string;
  title: string;
  description: string;
}

export interface MentorshipOutcomesProps {
  eyebrow: string;
  title: string;
  description: string;
  perspectiveLabel: string;
  quote: string;
  personName: string;
  personRole: string;
  personImage?: string;
  outcomes: MentorshipOutcome[];
  backgroundClassName?: string;
}
