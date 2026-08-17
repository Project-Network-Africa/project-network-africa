export type UserRole = "applicant" | "mentor" | "employer";

export interface MessageUser {
  id: string;
  name: string;
  initials: string;
  role: UserRole;
  profileImage?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  messages: Message[];
}
