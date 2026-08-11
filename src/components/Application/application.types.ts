export type ApplicationStep = 1 | 2 | 3 | 4;

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  agreedToTerms: boolean;
}

export interface ApplicationData extends PersonalInformation {
  program: string;
  cohort: string;
  experience: string;
  portfolioUrl: string;
}

export interface ApplicationStepItem {
  number: ApplicationStep;
  title: string;
}
