// content.types.ts

export type ContentStatus =
  | "Published"
  | "Draft"
  | "Scheduled"
  | "Needs review";

export type ContentType =
  | "Program Update"
  | "Programme Bootcamp"
  | "Project Example"
  | "Payment Update"
  | "Resource Content"
  | "Article / News";

export type ContentEditorMode = "create" | "edit" | "view" | "review";

export interface ContentActivity {
  text: string;
  time: string;
}
export interface ContentVersion {
  version: string;
  author: string;
  date: string;
  action?: string;
}
// export interface ContentItem {
//   id: number;
//   title: string;
//   type: ContentType;
//   category: string;
//   author: string;
//   status: ContentStatus;
//   featured: boolean;
//   updated: string;
//   publishDate: string;
//   action: "Edit" | "Review" | "View";
// }

export interface ContentItem {
  id: number;

  title: string;

  slug: string;

  type: ContentType;

  category: string;

  author: string;

  status: ContentStatus;

  excerpt: string;

  body: string;

  publishDate: string;

  visibility: string;

  featuredImage?: string;

  featuredImageName?: string;

  featuredImageSize?: string;

  altText?: string;

  searchTitle: string;

  metaDescription: string;

  previewUrl?: string;

  activities: ContentActivity[];

  versions?: ContentVersion[];

  updatedAt?: string;

  featured?: boolean;
}

export interface ContentTypeNavItem {
  label: string;
  count: number;
}

export interface ContentManagementStats {
  label: string;
  value: string;
  helper: string;
}

export interface ContentFilters {
  contentType: string;
  category: string;
  author: string;
  publishStatus: string;
  dateRange: string;
  sort: string;
}
