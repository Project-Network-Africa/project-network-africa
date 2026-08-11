import { ProgramDetails } from "../../types/program";

export const productManagementProgram: ProgramDetails = {
  id: 1,
  slug: "product-management",
  title: "Product Management",
  image: "./images/programs/product-management.png",
  category: "Business",
  description: "...",
  hero: {
    // breadcrumb: "Programs / Product Management",

    programName: "Product Management",

    title: "Become a certified-ready product manager in 12 weeks",

    description:
      "A cohort-based program covering predictive, agile, and hybrid project delivery — modeled on PMP-style certification prep — plus a real-world capstone reviewed by mentors and employer partners.",

    stats: [
      {
        label: "Duration",
        value: "12 Weeks",
      },
      {
        label: "Modules",
        value: "8",
      },
      {
        label: "Topics",
        value: "40+",
      },
      {
        label: "Certificate",
        value: "Included",
      },
    ],

    buttonText: "Apply to this Program",

    buttonHref: "/apply",

    mentorText: "Reviewed by mentors & employer partners",

    mentors: [
      {
        initials: "AO",
        avatarBg: "#00B6CE",
      },
      {
        initials: "TB",
        avatarBg: "#1F1F25",
      },
      {
        initials: "ZM",
        avatarBg: "#00B6CE",
      },
    ],
  },

  learningOutcomes: {
    label: "LEARNING OUTCOMES",

    title: "What you'll walk away knowing",

    outcomes: [
      {
        text: "Apply predictive, agile, and hybrid project delivery approaches to real project scenarios.",
      },
      {
        text: "Build and manage a project charter, WBS, schedule, and budget from scratch.",
      },
      {
        text: "Facilitate stakeholder engagement, risk management, and quality assurance processes.",
      },
      {
        text: "Run agile ceremonies — sprint planning, standups, retrospectives — as a Scrum-style facilitator.",
      },
      {
        text: "Navigate project governance, scope changes, and cross-functional team communication.",
      },
      {
        text: "Prepare a portfolio-ready case study demonstrating end-to-end project leadership.",
      },
    ],
  },

  instructor: {
    role: "Lead Mentor",

    initials: "SA",

    avatarBg: "#1F1F25",

    name: "Segun Ade",

    bio: "15+ years leading project delivery across telecom, fintech, and construction. PMP-certified and author of a project management study guide used by cohorts across three countries.",

    stats: [
      {
        value: "15+",
        label: "Years Experience",
      },
      {
        value: "6",
        label: "Cohorts Mentored",
      },
      {
        value: "PMP",
        label: "Certified",
      },
    ],
  },

  requirements: [
    {
      text: "No prior project management experience required — just curiosity and commitment.",
    },
    {
      text: "A laptop and reliable internet access for weekly live sessions.",
    },
    {
      text: "Comfortable communicating in written and spoken English.",
    },
    {
      text: "6–8 hours per week for coursework, team projects, and mentor sessions.",
    },
  ],

  curriculum: [
    {
      number: 1,
      weeks: "WEEKS 1–3",
      title: "Foundations",
      description: "Project lifecycle, charters, and stakeholder mapping.",
      accent: "cyan",
    },
    {
      number: 2,
      weeks: "WEEKS 4–7",
      title: "Applied Practice",
      description: "Scheduling, budgeting, risk, and agile ceremonies.",
      accent: "dark",
    },
    {
      number: 3,
      weeks: "WEEKS 8–10",
      title: "Testing & Iteration",
      description: "Scenario-based decision making and mock assessments.",
      accent: "cyan",
    },
    {
      number: 4,
      weeks: "WEEKS 11–12",
      title: "Capstone & Launch",
      description: "Lead a full project simulation end-to-end.",
      accent: "dark",
    },
  ],

  faqs: [],
  capstoneProject: {
    image: "/images/programs/project-management-capstone.jpg",

    description:
      "A full project simulation — from charter to closeout — managing a real partner team's delivery timeline, budget, and risk register.",

    quote:
      "The simulation is deliberately messy — scope changes mid-project, just like real work.",
  },
  careerOutcomes: [
    {
      initials: "KA",
      name: "Kemi A.",
      role: "Project Coordinator",
      company: "Flutterwave",
      avatarBg: "#1F1F25",
    },
    {
      initials: "OT",
      name: "Obinna T.",
      role: "Associate PM",
      company: "Interswitch",
      avatarBg: "#00B6CE",
    },
    {
      initials: "HS",
      name: "Halima S.",
      role: "Delivery Manager",
      company: "Andela",
      avatarBg: "#1F1F25",
    },
  ],
  cta: {
    title: "Ready to build the skills that move projects forward?",
    buttonText: "Apply Now",
    buttonHref: "/apply",
    nextCohortDate: "September 1, 2026",
    applicationDeadline: "Applications close Aug 20",
  },
};
