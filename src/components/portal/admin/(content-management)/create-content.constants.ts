import { ContentType } from "./create-content.types";

export const CONTENT_TYPES: ContentType[] = [
  "Programme",
  "Program Update",
  "Project Example",
  "Payment Update",
  "Resource Content",
  "Article / News",
];

export const CONTENT_CATEGORIES: Record<ContentType, string[]> = {
  Programme: [
    "Product Design",
    "Software Engineering",
    "Data Analysis",
    "Product Management",
    "Career Development",
  ],

  "Program Update": [
    "Cohort Announcement",
    "Schedule Change",
    "Curriculum Update",
    "Eligibility",
    "Programme Information",
  ],

  "Project Example": [
    "Product Design",
    "Software Development",
    "Data Analytics",
    "Product Management",
    "Employer Project",
  ],

  "Payment Update": [
    "Cohort Fee",
    "Payment Deadline",
    "Instalment Plan",
    "Payment Method",
    "Refund Information",
  ],

  "Resource Content": [
    "Learning Material",
    "Template & Checklist",
    "Portfolio Guide",
    "Career Resource",
    "Interview Preparation",
  ],

  "Article / News": [
    "PN Africa News",
    "Community",
    "Events",
    "Partnerships",
    "Success Stories",
  ],
};

export const AUTHORS = ["Amina Yusuf", "Chioma Nwosu", "Femi Cole", "Admin"];

export const PROGRAMMES = [
  "Product Design",
  "Software Engineering",
  "Data Analysis",
  "Product Management",
];

export const COHORTS = ["Cohort 6", "Cohort 7", "Cohort 8"];
