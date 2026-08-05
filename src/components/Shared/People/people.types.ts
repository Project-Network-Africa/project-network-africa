export interface Person {
  name: string;
  role: string;

  image?: string;
  initials?: string;
  avatarBg?: string;
}

export interface PeopleSectionProps {
  label: string;
  title: string;
  people: Person[];
  columns?: 2 | 3 | 4;
  backgroundClass?: string;
  buttonText?: string;
  buttonHref?: string;
}
