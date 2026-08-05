export interface TimelineItem {
  step: number;
  title: string;
  color: string;
}

export interface TimelineProps {
  label: string;
  title: string;
  items: TimelineItem[];
  columns?: 2 | 3 | 4 | 5;
}
