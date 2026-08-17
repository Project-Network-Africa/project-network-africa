import { Conversation } from "@/src/components/portal/applicant/(messages)/messages.types";

export const conversations: Conversation[] = [
  {
    id: "amara",
    name: "Amara Okafor",
    initials: "AO",
    role: "Senior Product Designer · Mentor",
    preview: "Great work on the wireframes!",
    time: "2m",
    unread: true,
    messages: [
      {
        id: "1",
        text: "Hey! Just looked over your wireframes for the onboarding flow.",
        sender: "them",
      },
      {
        id: "2",
        text: "Great work — the step-by-step flow reads really clearly.",
        sender: "them",
      },
    ],
  },

  {
    id: "team-alpha",
    name: "Team Alpha",
    initials: "TA",
    preview: "Tunde: pushed the latest build",
    time: "1h",
    unread: true,
    messages: [],
  },

  {
    id: "tunde",
    name: "Tunde Bello",
    initials: "TB",
    preview: "Can you review my PR?",
    time: "3h",
    unread: false,
    messages: [],
  },
];
