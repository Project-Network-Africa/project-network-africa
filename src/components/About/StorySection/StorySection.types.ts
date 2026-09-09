export interface StoryGap {
  number: string;
  title: string;
  description: string;
}

export interface StorySectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  subbody: string;
  bridgeLabel: string;
  bridgeText: string;
  gapsTitle: string;
  gaps: StoryGap[];
  backgroundClassName?: string;
}
