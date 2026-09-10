export interface SuccessStoryPreview {
  initials: string;
  name: string;
  role: string;
  highlights: string;
  featured?: boolean;
}

export interface SuccessStoriesHeroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  stories: SuccessStoryPreview[];
  backgroundClassName?: string;
}
