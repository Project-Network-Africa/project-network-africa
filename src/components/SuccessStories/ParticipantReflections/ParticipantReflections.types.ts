export interface ParticipantReflection {
  quote: string;
  name: string;
  role: string;
  tags: string;
  highlighted?: boolean;
}

export interface ParticipantReflectionsProps {
  eyebrow?: string;
  title?: string;
  reflections: ParticipantReflection[];
  backgroundClassName?: string;
}
