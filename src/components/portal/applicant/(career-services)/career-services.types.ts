export interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  companyInitial: string;
  location: string;
  employmentType: string;
  posted: string;
  tags: string[];
  about: string;
  requirements: string[];
  companyAbout: string;
}

export interface JobBoardProps {
  jobs: Job[];
}

export interface CareerSupportCardProps {
  id: string;
  title: string;
  description: string;
  action: string;
  variant: "dark" | "light";
}
