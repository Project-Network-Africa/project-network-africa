import { ProgramDetails } from "../../types/program";

export const productDesign: ProgramDetails = {
  id: 3,
  slug: "product-design",

  title: "Product Design",
  category: "Design",
  image: "/images/programs/product-design.png",
  description:
    "Learn UX research, UI design, prototyping and design systems while solving real business problems.",

  hero: {
    programName: "Product Design",

    title: "Become a Product Designer in 12 weeks",

    description:
      "Learn the complete product design process from research to high-fidelity interfaces while building a professional portfolio.",

    stats: [
      { label: "Duration", value: "12 Weeks" },
      { label: "Modules", value: "8" },
      { label: "Projects", value: "5" },
      { label: "Certificate", value: "Included" },
    ],

    buttonText: "Apply to this Program",
    buttonHref: "/apply",

    mentorText: "Learn from experienced product designers",

    mentors: [
      { initials: "FA", avatarBg: "#00B6CE" },
      { initials: "MI", avatarBg: "#1F1F25" },
      { initials: "AN", avatarBg: "#00B6CE" },
    ],
  },

  learningOutcomes: {
    label: "LEARNING OUTCOMES",
    title: "What you'll learn",

    outcomes: [
      { text: "Conduct effective user research." },
      { text: "Create user flows and wireframes." },
      { text: "Design beautiful interfaces in Figma." },
      { text: "Build reusable design systems." },
      { text: "Prototype and test user experiences." },
      { text: "Present portfolio-ready case studies." },
    ],
  },

  instructor: {
    role: "Lead Mentor",

    initials: "FA",

    avatarBg: "#1F1F25",

    name: "Fawaz Kareem",

    bio: "Senior Product Designer helping startups design products used by thousands of users across Africa.",

    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "20", label: "Products Designed" },
      { value: "Google", label: "Certified" },
    ],
  },

  requirements: [
    { text: "No prior design experience required." },
    { text: "Laptop and internet connection." },
    { text: "Willingness to learn design thinking." },
    { text: "6–8 hours weekly commitment." },
  ],

  curriculum: [
    {
      number: 1,
      weeks: "WEEKS 1–3",
      title: "Design Foundations",
      description:
        "Design principles, user research, problem framing, and understanding the product design process.",
      accent: "cyan",
    },
    {
      number: 2,
      weeks: "WEEKS 4–7",
      title: "UX & UI Practice",
      description:
        "User flows, wireframes, information architecture, visual design, and high-fidelity interfaces.",
      accent: "dark",
    },
    {
      number: 3,
      weeks: "WEEKS 8–10",
      title: "Testing & Iteration",
      description:
        "Usability testing, design feedback, prototyping, and improving solutions through iteration.",
      accent: "cyan",
    },
    {
      number: 4,
      weeks: "WEEKS 11–12",
      title: "Case Study & Launch",
      description:
        "Complete a product design case study and prepare your portfolio for presentation and launch.",
      accent: "dark",
    },
  ],
  capstoneProject: {
    image: "/images/programs/product-design.jpg",

    description:
      "A complete product design case study — from user research and problem definition to wireframes, UI design, prototyping, and a polished final product experience.",

    quote:
      "You'll learn that great design isn't about making things look good — it's about solving the right problem for the right people.",
  },
  careerOutcomes: [
    {
      initials: "FA",
      name: "Fatima A.",
      role: "Product Designer",
      company: "Flutterwave",
      avatarBg: "#1F1F25",
    },
    {
      initials: "TO",
      name: "Tomi O.",
      role: "UX Designer",
      company: "Interswitch",
      avatarBg: "#00B6CE",
    },
    {
      initials: "NM",
      name: "Ngozi M.",
      role: "Product Designer",
      company: "Andela",
      avatarBg: "#1F1F25",
    },
  ],
  faqs: [],

  cta: {
    title: "Ready to turn your ideas into products people love to use?",
    buttonText: "Apply Now",
    buttonHref: "/apply",
    nextCohortDate: "August 24, 2026",
    applicationDeadline: "Applications close Aug 20",
  },
};
