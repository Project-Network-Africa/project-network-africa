export interface MentorCardProps {
  initials: string;
  name: string;
  role: string;
  avatarBg: string;
  onSchedule?: () => void;
}

export interface Session {
  type: string;
  date: string;
}

export interface SessionHistoryProps {
  sessions: Session[];
}

export interface MentorNotesProps {
  note: string;
}
