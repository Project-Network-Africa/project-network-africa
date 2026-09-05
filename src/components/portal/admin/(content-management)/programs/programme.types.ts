import { ReactNode } from "react";

export interface ProgrammeMentor {
  initials: string;
  name?: string;
  avatarBg: string;
}

export interface ProgrammeStat {
  label: string;
  value: string;
}

export interface ProgrammeDetails {
  programmeId: string;
  slug: string;
  category: string;
  title: string;
  image?: string;
  description: string;
}

export interface ProgrammeHero {
  title: string;
  programmeName: string;
  description: string;
  duration: string;
  format: string;
  level: string;
  buttonText: string;
  buttonLink: string;
  mentorText: string;
  mentors: ProgrammeMentor[];
}

export interface LearningOutcome {
  id: number;
  text: string;
}

export interface InstructorStat {
  label: string;
  value: string;
}

export interface Instructor {
  name: string;
  role: string;
  initials: string;
  avatarBackground: string;
  profileImage?: string;
  biography: string;
  experience: string;
  learnersMentored: string;
  productsShipped: string;
}

export interface Requirement {
  id: number;
  text: string;
}

export interface CurriculumModule {
  id: number;
  week: string;
  title: string;
  description: string;
  accent: "cyan" | "dark";
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  open?: boolean;
}

export interface CareerOutcome {
  id: number;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatarBackground: string;
  avatarStatus: string;
}

export interface CapstoneProject {
  image?: string;
  description: string;
  featuredQuote: string;
}

export interface FinalCTA {
  heading: string;
  buttonText: string;
  buttonLink: string;
  nextCohortDate: string;
  applicationDeadline: string;
}

export type ProgrammeStatus = "Draft" | "Published" | "Scheduled";

export interface ProgrammePublishing {
  status: ProgrammeStatus;
  visibility: "Public" | "Private";
  publishDate: string;
}

export interface ProgrammeSEO {
  searchTitle: string;
  metaDescription: string;
  previewUrl: string;
}

export interface ProgrammeVersion {
  version: string;
  action: string;
  author: string;
  date: string;
}

export interface ProgrammeActivity {
  text: string;
  time: string;
}

export interface ProgrammeData {
  id: number;

  details: ProgrammeDetails;
  hero: ProgrammeHero;
  learningOutcomes: LearningOutcome[];
  instructor: Instructor;
  requirements: Requirement[];
  curriculum: CurriculumModule[];
  faqs: FAQ[];
  capstone: CapstoneProject;
  careerOutcomes: CareerOutcome[];
  finalCTA: FinalCTA;

  publishing: ProgrammePublishing;
  seo: ProgrammeSEO;

  featuredImage?: string;
  featuredImageName?: string;
  featuredImageSize?: string;
  imageAltText: string;

  versions: ProgrammeVersion[];
  activities: ProgrammeActivity[];
}
