export interface Talent {
  id: string;
  initials: string;
  name: string;
  role: string;
  image: string;
}

export interface TalentStat {
  id: string;
  value: string;
  label: string;
  highlighted?: boolean;
}
