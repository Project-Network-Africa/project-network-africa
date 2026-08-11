import { ProgramDetails } from "../../types/program";

export const dataAnalytics: ProgramDetails = {
  id: 4,
  slug: "data-analytics",

  title: "Data Analytics",
  category: "Data",
  image: "/images/programs/data-analytics.png",
  description:
    "Learn Excel, SQL, Power BI and Python to transform data into business insights.",

  hero: {
    programName: "Data Analytics",

    title: "Become a Data Analyst in 14 weeks",

    description:
      "Master data cleaning, analysis, visualization and storytelling while working on business datasets and real-world projects.",

    stats: [
      { label: "Duration", value: "14 Weeks" },
      { label: "Modules", value: "9" },
      { label: "Projects", value: "6" },
      { label: "Certificate", value: "Included" },
    ],

    buttonText: "Apply to this Program",
    buttonHref: "/apply",

    mentorText: "Mentored by experienced data professionals",

    mentors: [
      { initials: "AK", avatarBg: "#00B6CE" },
      { initials: "EO", avatarBg: "#1F1F25" },
      { initials: "MA", avatarBg: "#00B6CE" },
    ],
  },

  learningOutcomes: {
    label: "LEARNING OUTCOMES",
    title: "Skills you'll gain",

    outcomes: [
      { text: "Analyze business data using Excel and SQL." },
      { text: "Clean and transform datasets." },
      { text: "Create dashboards using Power BI." },
      { text: "Use Python for data analysis." },
      { text: "Communicate insights with compelling visualizations." },
      { text: "Build a professional analytics portfolio." },
    ],
  },

  instructor: {
    role: "Lead Mentor",

    initials: "AK",

    avatarBg: "#1F1F25",

    name: "Aisha Kamara",

    bio: "Lead Data Analyst with extensive experience building dashboards and analytics solutions for global organizations.",

    stats: [
      { value: "11+", label: "Years Experience" },
      { value: "40+", label: "Dashboards Built" },
      { value: "Microsoft", label: "Certified" },
    ],
  },

  requirements: [
    { text: "Basic computer skills." },
    { text: "Laptop with internet access." },
    { text: "Comfort using spreadsheets." },
    { text: "6–8 hours weekly commitment." },
  ],

  curriculum: [
    {
      number: 1,
      weeks: "WEEKS 1–3",
      title: "Analytics Foundations",
      description:
        "Data fundamentals, spreadsheets, data cleaning, SQL basics, and understanding analytical problems.",
      accent: "cyan",
    },
    {
      number: 2,
      weeks: "WEEKS 4–7",
      title: "Analysis & Visualization",
      description:
        "Explore datasets using SQL and spreadsheets, create visualizations, and communicate meaningful insights.",
      accent: "dark",
    },
    {
      number: 3,
      weeks: "WEEKS 8–10",
      title: "Testing & Insights",
      description:
        "Validate findings, analyze business scenarios, build dashboards, and turn data into actionable recommendations.",
      accent: "cyan",
    },
    {
      number: 4,
      weeks: "WEEKS 11–12",
      title: "Capstone & Presentation",
      description:
        "Complete an end-to-end analytics project and present your findings through a polished portfolio case study.",
      accent: "dark",
    },
  ],
  capstoneProject: {
    image: "/images/programs/data-analytics.jpg",

    description:
      "A full data analytics project — from data cleaning and exploration to visualization and insight presentation — using a real-world dataset to solve a practical business problem.",

    quote:
      "The goal isn't just to find numbers — it's to turn messy data into insights that can actually guide decisions.",
  },
  careerOutcomes: [
    {
      initials: "DA",
      name: "Damilola A.",
      role: "Data Engineeer",
      company: "Flutterwave",
      avatarBg: "#1F1F25",
    },
    {
      initials: "TO",
      name: "Tope O.",
      role: "Data Analyst",
      company: "Interswitch",
      avatarBg: "#00B6CE",
    },
    {
      initials: "CA",
      name: "Chioma A.",
      role: "Data Scientist",
      company: "Andela",
      avatarBg: "#1F1F25",
    },
  ],
  faqs: [],

  cta: {
    title: "Ready to turn data into insights that drive real decisions?",
    buttonText: "Apply Now",
    buttonHref: "/apply",
    nextCohortDate: "September 7, 2026",
    applicationDeadline: "Applications close Aug 31",
  },
};
