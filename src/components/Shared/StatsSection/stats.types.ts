export interface Stat {
  value: string;
  label: string;
  color: string;
}

export interface StatsSectionProps {
  label: string;
  title: string;
  stats: Stat[];
  backgroundClass?: string;
  columns?: 2 | 3 | 4;
}
