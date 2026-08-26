import { Feedback, FeedbackMentee } from "@/src/types/mentor/feedback";

export const feedbackMentees: FeedbackMentee[] = [
  {
    id: "mentee-1",
    name: "Amara Okafor",
  },
  {
    id: "mentee-2",
    name: "Tunde Bello",
  },
  {
    id: "mentee-3",
    name: "Zainab Musa",
  },
];

export const feedbackHistory: Feedback[] = [
  {
    id: "feedback-1",
    menteeName: "Amara Okafor",
    message: "Great progress on the wireframes — tighten spacing on step 2.",
    date: "Jul 14",
  },
  {
    id: "feedback-2",
    menteeName: "Tunde Bello",
    message: "Please resubmit with updated API documentation.",
    date: "Jul 10",
  },
];
