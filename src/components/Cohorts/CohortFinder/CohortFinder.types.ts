export interface CohortFinderItem {
  id: string;
  status: "OPEN" | "FILLING FAST";
  programme: string;
  category: "Design" | "Engineering" | "Product" | "Data";
  description: string;
  format: string;
  startDate: string;
  duration: string;
  tuition: string;
  filled: number;
  capacity: number;
  statusClassName?: string;
}

export interface CohortFinderProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  categories?: string[];
  cohorts: CohortFinderItem[];
  backgroundClassName?: string;
}
