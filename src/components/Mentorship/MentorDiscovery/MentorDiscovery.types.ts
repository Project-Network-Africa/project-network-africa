export interface MentorDiscoveryItem {
  id: string;
  name: string;
  role: string;
  location: string;
  category: string;
  expertise: string;
  image: string;
  status?: string;
}

export interface MentorDiscoveryProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  mentors: MentorDiscoveryItem[];
  categories?: string[];
  buttonText?: string;
  buttonHref?: string;
  backgroundClassName?: string;
}
