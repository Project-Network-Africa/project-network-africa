import { ReactNode } from "react";

export interface ContentItem {
  title: string;
  href: string;

  description?: string;
  meta?: string;

  image?: string;
  gradient?: string;

  illustration?: ReactNode;
}

export interface ContentSectionProps {
  label: string;
  title: string;

  items: ContentItem[];

  columns?: 2 | 3 | 4;
}
