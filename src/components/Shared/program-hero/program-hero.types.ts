import { ReactNode } from "react";

export interface ProgramHeroProps {
  label: string;
  title: string;
  description: string;
  duration: string;
  format: string;
  eligibility: string;
  buttonText?: string;
  buttonHref?: string;
  children: ReactNode;
}
