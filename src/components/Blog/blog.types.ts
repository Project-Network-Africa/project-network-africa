export type BlogCategory =
  | "Career Tips"
  | "Alumni Stories"
  | "Community"
  | "Product"
  | "Events";

export interface BlogPost {
  id: number;
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  image: string;
  author: BlogAuthor;
  date: string;
  readTime: string;
  content: BlogContentBlock[];
  tags: string[];
}

export interface BlogAuthor {
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  image?: string;
}

export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "checklist";
      title: string;
      items: string[];
    };
