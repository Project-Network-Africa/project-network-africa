export interface LeadershipMember {
  name: string;
  role: string;
  category: string;
  description: string;
  image: string;
}

export interface LeadershipSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  featured: LeadershipMember;
  members: LeadershipMember[];
  backgroundClassName?: string;
}
