export interface MentorCommunityStat {
  value: string;
  label: string;
}

export interface BecomeMentorProps {
  communityEyebrow: string;
  communityQuote: string;
  mentorImages: string[];
  communityStats: MentorCommunityStat[];
  eyebrow: string;
  title: string;
  description: string;
  requirements: string[];
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
  note: string;
  backgroundClassName?: string;
}
