export interface Badge {
  id: string;
  icon: string;
  label: string;
}

export interface Certificate {
  title: string;
  description: string;
  completionPercentage: number;
  isUnlocked: boolean;
}
