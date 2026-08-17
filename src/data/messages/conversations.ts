import {
  Conversation,
  MessageUser,
} from "@/src/components/portal/shared/Messages/messages.types";

export const messageUsers: MessageUser[] = [
  {
    id: "amara-okafor",
    name: "Amara Okafor",
    initials: "AO",
    role: "applicant",
  },
  {
    id: "tunde-bello",
    name: "Tunde Bello",
    initials: "TB",
    role: "applicant",
  },
  {
    id: "jane-adeyemi",
    name: "Jane Adeyemi",
    initials: "JA",
    role: "employer",
  },
  {
    id: "fawaz-kareem",
    name: "Fawaz Kareem",
    initials: "FK",
    role: "mentor",
  },
];

export const conversations: Conversation[] = [
  {
    id: "conversation-1",
    participants: ["jane-adeyemi", "amara-okafor"],
    messages: [
      {
        id: "message-1",
        senderId: "amara-okafor",
        receiverId: "jane-adeyemi",
        content: "Thanks for reaching out!",
        timestamp: "2026-08-16T18:20:00",
        read: true,
      },
      {
        id: "message-2",
        senderId: "jane-adeyemi",
        receiverId: "amara-okafor",
        content: "Thanks for reaching out about the Product Designer role!",
        timestamp: "2026-08-16T18:22:00",
        read: true,
      },
      {
        id: "message-3",
        senderId: "amara-okafor",
        receiverId: "jane-adeyemi",
        content:
          "We'd love to schedule a call this week — what times work for you?",
        timestamp: "2026-08-16T18:25:00",
        read: true,
      },
    ],
  },

  {
    id: "conversation-2",
    participants: ["jane-adeyemi", "tunde-bello"],
    messages: [
      {
        id: "message-4",
        senderId: "tunde-bello",
        receiverId: "jane-adeyemi",
        content: "When can I start the interview process?",
        timestamp: "2026-08-16T17:40:00",
        read: false,
      },
    ],
  },

  {
    id: "conversation-3",
    participants: ["amara-okafor", "fawaz-kareem"],
    messages: [
      {
        id: "message-5",
        senderId: "fawaz-kareem",
        receiverId: "amara-okafor",
        content:
          "Your portfolio is looking great. Keep refining your case studies.",
        timestamp: "2026-08-16T16:00:00",
        read: true,
      },
    ],
  },
];
