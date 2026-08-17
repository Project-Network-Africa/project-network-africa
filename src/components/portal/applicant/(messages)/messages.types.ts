// export type MessageSender = "me" | "other";

export interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
}

export interface Conversation {
  id: string;
  name: string;
  initials: string;
  role?: string;
  preview: string;
  time: string;
  unread: boolean;
  messages: Message[];
}
