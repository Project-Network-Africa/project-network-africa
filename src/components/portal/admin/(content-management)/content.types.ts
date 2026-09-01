export type ContentStatus =
  | "Published"
  | "Draft"
  | "Scheduled"
  | "Needs review";

export type FeaturedStatus = "Yes" | "No";

export type ContentAction = "Edit" | "Review" | "View";

export interface ContentItem {
  id: number;

  contentItem: string;

  type: string;

  category: string;

  author: string;

  status: ContentStatus;

  featured: FeaturedStatus;

  updated: string;

  publishDate: string;

  action: ContentAction;
}

export interface ContentStat {
  label: string;

  value: string;

  helper: string;

  helperColor?: string;
}

export interface ContentFilter {
  label: string;

  value?: string;
}
