// ================= HERO =================

export interface Hero {
  // breadcrumb: string;
  title: string;
  description: string;
  programName: string;

  stats: HeroStat[];

  buttonText: string;
  buttonHref: string;

  mentorText: string;

  mentors: MentorAvatar[];
}

export interface HeroStat {
  label: string;
  value: string;
}
export interface ProgramStat {
  label: string;
  value: string;
}

export interface MentorAvatar {
  initials: string;
  avatarBg: string;
}

// ================= LEARNING OUTCOMES =================
export interface LearningOutcome {
  text: string;
}

export interface LearningOutcomesSection {
  label: string;
  title: string;
  outcomes: LearningOutcome[];
}
// ================= INSTRUCTOR =================

export interface Instructor {
  role: string;

  initials: string;
  avatarBg: string;

  name: string;

  bio: string;

  stats: InstructorStat[];
}

export interface InstructorStat {
  value: string;
  label: string;
}

// ================= REQUIREMENTS =================

export interface Requirement {
  text: string;
}

// ================= CURRICULUM =================

export interface CurriculumItem {
  number: number;
  weeks: string;
  title: string;
  description: string;
  accent: "cyan" | "dark";
}

// ================= FAQ =================

export interface FAQ {
  question: string;
  answer: string;
}

export interface CapstoneProject {
  image: string;
  description: string;
  quote: string;
}

// ================= CTA =================
export interface CareerOutcome {
  initials: string;
  name: string;
  role: string;
  company: string;
  avatarBg: string;
  image?: string;
}

export interface CTA {
  title: string;
  buttonText: string;
  buttonHref: string;
  nextCohortDate: string;
  applicationDeadline: string;
}

export interface Program {
  id: number;
  slug: string;

  title: string;
  category: string;
  image: string;
  description: string;
}
export interface ProgramDetails extends Program {
  hero: Hero;

  learningOutcomes: LearningOutcomesSection;

  instructor: Instructor;

  requirements: Requirement[];

  curriculum: CurriculumItem[];

  faqs: FAQ[];
  capstoneProject: CapstoneProject;
  careerOutcomes: CareerOutcome[];

  cta: CTA;
}
