export interface MentorshipValueItem {
  number: string;
  title: string;
  description: string;
}

export interface MentorshipValueProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: MentorshipValueItem[];
  backgroundClassName?: string;
}
