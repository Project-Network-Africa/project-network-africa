export type ProjectCategory =
  | "Design"
  | "Engineering"
  | "Product"
  | "Data"
  | "Security"
  | "Cloud"
  | "Marketing"
  | "Mobile";

export interface ProjectExample {
  id: string;
  category: ProjectCategory;
  title: string;
  image: string;
  mentorInitials: string;
  mentorName: string;
}
