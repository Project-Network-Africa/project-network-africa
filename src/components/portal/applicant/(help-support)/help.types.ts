export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SupportTicket {
  id: string;
  title: string;
  status: "Resolved" | "In Progress";
}
