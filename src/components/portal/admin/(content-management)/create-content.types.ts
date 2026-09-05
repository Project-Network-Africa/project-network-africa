// src/components/portal/admin/content/create/create-content.types.ts

export type ContentType =
  | "Programme"
  | "Program Update"
  | "Project Example"
  | "Payment Update"
  | "Resource Content"
  | "Article / News";

export type ContentStatus = "Draft" | "Published" | "Scheduled";

export interface BaseContentData {
  title: string;
  slug: string;
  contentType: ContentType | "";
  category: string;
  author: string;
  excerpt: string;
  body: string;

  status: ContentStatus;
  visibility: "Public" | "Private";
  publishDate: string;

  featuredImage: string;
  imageAltText: string;

  searchTitle: string;
  metaDescription: string;
}

export interface ProgrammeFormData {
  programmeId: string;
  slug: string;
  category: string;
  title: string;
  image: string;
  description: string;

  heroTitle: string;
  heroProgrammeName: string;
  heroDescription: string;
  duration: string;
  format: string;
  level: string;
  heroButtonText: string;
  heroButtonLink: string;
  mentorText: string;

  learningOutcomes: string[];

  instructorName: string;
  instructorRole: string;
  instructorInitials: string;
  instructorBackground: string;
  instructorImage: string;
  instructorBiography: string;
  instructorExperience: string;
  learnersMentored: string;
  productsShipped: string;

  requirements: string[];

  curriculum: {
    week: string;
    title: string;
    description: string;
    style: "cyan" | "dark";
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];

  capstoneImage: string;
  capstoneDescription: string;
  capstoneQuote: string;

  careerOutcomes: {
    name: string;
    role: string;
    company: string;
  }[];

  ctaHeading: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  nextCohortDate: string;
  applicationDeadline: string;
}

export interface ProgramUpdateFormData {
  title: string;
  slug: string;
  category: string;
  affectedProgramme: string;
  updateType: string;
  effectiveDate: string;
  newFee: string;
  paymentMethods: string;
  supportContact: string;
  summary: string;
  body: string;
  attachment: string;
}

export interface ProjectExampleFormData {
  title: string;
  slug: string;

  projectType: string;
  teamName: string;
  teamSize: string;

  description: string;

  disciplines: string[];
  duration: string;

  reviewStatus: string;
  creditType: string;

  outcome: string;

  projectImage: string;
  projectUrl: string;

  cohort: string;
  mentor: string;

  teamMembers: {
    name: string;
    role: string;
  }[];
}

export interface PaymentUpdateFormData {
  title: string;
  slug: string;

  affectedProgramme: string;
  cohort: string;
  updateType: string;

  effectiveDate: string;
  previousFee: string;
  newFee: string;

  paymentMethods: string;
  supportContact: string;

  summary: string;
  body: string;

  attachment: string;
}

export interface ResourceContentFormData {
  title: string;
  slug: string;

  category: string;
  format: string;

  access: string;
  audience: string;
  file: string;
  websiteSection: string;

  summary: string;
  body: string;

  coverImage: string;
  altText: string;
}

export interface ArticleNewsFormData {
  title: string;
  slug: string;

  category: string;
  author: string;

  excerpt: string;
  body: string;

  featuredImage: string;
  imageAltText: string;
}
