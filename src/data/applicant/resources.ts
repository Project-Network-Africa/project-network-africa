export type ResourceType = "Video" | "PDF" | "Doc";

export interface LearningResource {
  id: string;
  title: string;
  type: ResourceType;
  meta: string;
  icon: "design" | "portfolio" | "handbook";
}

export const learningResources: LearningResource[] = [
  {
    id: "design-systems-101",
    title: "Design Systems 101",
    type: "Video",
    meta: "42 min",
    icon: "design",
  },
  {
    id: "portfolio-review-checklist",
    title: "Portfolio Review Checklist",
    type: "PDF",
    meta: "8 pages",
    icon: "portfolio",
  },
  {
    id: "cohort-6-handbook",
    title: "Cohort 6 Handbook",
    type: "Doc",
    meta: "24 pages",
    icon: "handbook",
  },
];
