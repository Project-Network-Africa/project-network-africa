import { Candidate } from "@/src/types/candidate";

export const candidates: Candidate[] = [
  {
    id: "amara-okafor",
    name: "Amara Okafor",
    initials: "AO",
    role: "Product Designer",
    cohort: "Cohort 6",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    endorsement:
      "Amara consistently produces polished, user-centered work and communicates design decisions clearly. — Senior Product Designer, Mentor",

    portfolio: [
      {
        id: "fintech-onboarding",
        title: "Fintech Onboarding Redesign",
        description:
          "Reduced signup drop-off by 30% through a simplified KYC flow.",
        image: "/images/portfolio/fintech-onboarding.png",
      },
      {
        id: "ecommerce-checkout",
        title: "E-commerce Checkout Flow",
        description: "Streamlined checkout from 6 steps to 3.",
        image: "/images/portfolio/ecommerce-checkout.png",
      },
      {
        id: "healthcare-appointment",
        title: "Healthcare Appointment App",
        description: "Designed a booking flow for a partner clinic network.",
        image: "/images/portfolio/healthcare-appointment.png",
      },
    ],
  },

  {
    id: "tunde-bello",
    name: "Tunde Bello",
    initials: "TB",
    role: "Backend Engineer",
    cohort: "Cohort 5",
    skills: [],
    endorsement: "",
    portfolio: [],
  },

  {
    id: "zainab-musa",
    name: "Zainab Musa",
    initials: "ZM",
    role: "Data Analyst",
    cohort: "Cohort 6",
    skills: [],
    endorsement: "",
    portfolio: [],
  },

  {
    id: "kwame-asante",
    name: "Kwame Asante",
    initials: "KA",
    role: "Product Manager",
    cohort: "Cohort 5",
    skills: [],
    endorsement: "",
    portfolio: [],
  },
];
