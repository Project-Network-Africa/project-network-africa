import {
  FAQ,
  SupportTicket,
} from "@/src/components/portal/applicant/(help-support)/help.types";

export const faqs: FAQ[] = [
  {
    id: "reschedule",
    question: "How do I reschedule a mentor session?",
    answer:
      "Go to Mentorship → Schedule a Session and pick a new time. Your mentor will be notified automatically.",
  },
  {
    id: "tuition",
    question: "When is my next tuition payment due?",
    answer:
      "Check the Payments page or your Calendar — upcoming installments are listed with due dates.",
  },
  {
    id: "team-switch",
    question: "Can I switch project teams mid-cohort?",
    answer:
      "Team changes are handled case-by-case. Message your mentor or contact support below to request one.",
  },
];

export const supportTickets: SupportTicket[] = [
  {
    id: "payment-receipt",
    title: "Payment receipt missing",
    status: "Resolved",
  },
  {
    id: "cohort-transfer",
    title: "Question about cohort transfer",
    status: "In Progress",
  },
];
