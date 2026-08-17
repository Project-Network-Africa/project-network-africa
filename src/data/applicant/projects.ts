export type ProjectStatus = "In Progress" | "Completed" | "Not Started";

export interface Project {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  status: ProjectStatus;
  brief: string;
  deliverables: string[];
  team: {
    initials: string;
    bg: string;
  }[];
  mentorFeedback: string;
}

export const projects: Project[] = [
  {
    slug: "project-alpha",
    title: "Project Alpha",
    description: "Fintech Onboarding Flow",
    imageSrc: "/images/projects/fintech-onboarding.jpg",
    status: "In Progress",

    brief:
      "Redesign the onboarding experience for a partner fintech app, focused on reducing drop-off during KYC verification.",

    deliverables: [
      "User flow diagram",
      "Low-fidelity wireframes",
      "High-fidelity prototype",
      "Usability test report",
    ],

    team: [
      { initials: "AO", bg: "#00B6CE" },
      { initials: "TB", bg: "#1F1F25" },
      { initials: "ZM", bg: "#5D5D61" },
      { initials: "KA", bg: "#00B6CE" },
    ],

    mentorFeedback:
      "Great progress on the wireframes — tighten spacing on step 2.",
  },

  {
    slug: "project-beta",
    title: "Project Beta",
    description: "E-commerce Checkout Redesign",
    imageSrc: "/images/projects/ecommerce-checkout.jpg",
    status: "Completed",

    brief:
      "Redesign the checkout experience to make the purchasing process simpler and easier to complete.",

    deliverables: [
      "Checkout user flow",
      "Low-fidelity wireframes",
      "High-fidelity prototype",
      "Usability test report",
    ],

    team: [
      { initials: "AO", bg: "#00B6CE" },
      { initials: "TB", bg: "#1F1F25" },
    ],

    mentorFeedback:
      "The checkout flow is looking strong. Good work on simplifying the experience.",
  },

  {
    slug: "project-gamma",
    title: "Project Gamma",
    description: "Healthcare Appointment App",
    imageSrc: "/images/projects/healthcare-appointment.jpg",
    status: "Not Started",

    brief:
      "Design a healthcare appointment experience that makes it easy for users to find and book appointments.",

    deliverables: [
      "User flow diagram",
      "Low-fidelity wireframes",
      "High-fidelity prototype",
    ],

    team: [
      { initials: "AO", bg: "#00B6CE" },
      { initials: "ZM", bg: "#5D5D61" },
    ],

    mentorFeedback: "This project has not started yet.",
  },
];
