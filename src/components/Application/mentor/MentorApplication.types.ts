export interface MentorApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  whatsappNumber: string;

  currentRole: string;
  yearsOfExperience: string;
  expertise: string;

  projectImpact: string;
  mentoringExperience: string;
  motivation: string;
  mentoringHours: string;
  timezone: string;
  availabilityDuration: string;

  comfortableCertifying: string;
  understandsModel: string;
  additionalInformation: string;
  readyForResponsibility: string;

  linkedinOrPortfolio: string;

  agreedToTerms: boolean;
}

export interface MentorApplicationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  whatsappNumber?: string;

  currentRole?: string;
  yearsOfExperience?: string;
  expertise?: string;

  projectImpact?: string;
  mentoringExperience?: string;
  motivation?: string;
  mentoringHours?: string;
  timezone?: string;
  availabilityDuration?: string;

  comfortableCertifying?: string;
  understandsModel?: string;
  additionalInformation?: string;
  readyForResponsibility?: string;

  linkedinOrPortfolio?: string;

  agreedToTerms?: string;
}
