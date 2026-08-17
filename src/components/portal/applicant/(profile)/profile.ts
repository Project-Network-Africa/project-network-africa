export interface ProfileHeaderProps {
  initials: string;
  name: string;
  cohort: string;
}

export interface BioSkillsProps {
  bio: string;
  skills: string[];
}

export interface ProfileDocument {
  label: string;
  href: string;
}

export interface LinksDocumentsProps {
  documents: ProfileDocument[];
}
