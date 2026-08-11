import { ProgramDetails } from "../../types/program";

export const softwareEngineering: ProgramDetails = {
  id: 2,
  slug: "software-engineering",

  title: "Software Engineering",
  category: "Engineering",
  image: "/images/programs/software-engineering.png",
  description:
    "Learn frontend, backend, databases and deployment while building production-ready applications.",

  hero: {
    programName: "Software Engineering",
    title: "Become a job-ready Software Engineer in 16 weeks",

    description:
      "Master modern web development using JavaScript, React, Next.js, Node.js, databases, APIs and deployment through hands-on projects and mentor-led sessions.",

    stats: [
      { label: "Duration", value: "16 Weeks" },
      { label: "Modules", value: "10" },
      { label: "Projects", value: "6" },
      { label: "Certificate", value: "Included" },
    ],

    buttonText: "Apply to this Program",
    buttonHref: "/apply",

    mentorText: "Mentored by senior software engineers",

    mentors: [
      { initials: "OA", avatarBg: "#00B6CE" },
      { initials: "JD", avatarBg: "#1F1F25" },
      { initials: "MK", avatarBg: "#00B6CE" },
    ],
  },

  learningOutcomes: {
    label: "LEARNING OUTCOMES",
    title: "What you'll build and master",

    outcomes: [
      {
        text: "Build responsive web applications using React and Next.js.",
      },
      {
        text: "Design scalable backend APIs with Node.js and Express.",
      },
      {
        text: "Work with SQL and NoSQL databases effectively.",
      },
      {
        text: "Implement authentication and authorization securely.",
      },
      {
        text: "Deploy applications using modern cloud platforms.",
      },
      {
        text: "Build a production-ready portfolio with real projects.",
      },
    ],
  },

  instructor: {
    role: "Lead Mentor",

    initials: "OA",
    avatarBg: "#1F1F25",

    name: "Oluwaseyi Adebayo",

    bio: "Senior Software Engineer with over 12 years building enterprise products across fintech and SaaS companies.",

    stats: [
      { value: "12+", label: "Years Experience" },
      { value: "15", label: "Bootcamps Led" },
      { value: "AWS", label: "Certified" },
    ],
  },

  requirements: [
    { text: "Basic computer literacy." },
    { text: "Laptop with reliable internet." },
    { text: "Commitment of 8–10 hours weekly." },
    { text: "Passion for solving problems." },
  ],

  curriculum: [
    {
      number: 1,
      weeks: "WEEKS 1–3",
      title: "Engineering Foundations",
      description:
        "Programming fundamentals, Git, development workflows, databases, and software engineering principles.",
      accent: "cyan",
    },
    {
      number: 2,
      weeks: "WEEKS 4–7",
      title: "Full-Stack Development",
      description:
        "Build frontend and backend applications with React, APIs, databases, authentication, and modern development practices.",
      accent: "dark",
    },
    {
      number: 3,
      weeks: "WEEKS 8–10",
      title: "Testing & Deployment",
      description:
        "Testing, debugging, API integration, performance, CI/CD, and deploying applications to production.",
      accent: "cyan",
    },
    {
      number: 4,
      weeks: "WEEKS 11–12",
      title: "Capstone & Launch",
      description:
        "Build and deploy a complete software project while applying the full development workflow end-to-end.",
      accent: "dark",
    },
  ],
  capstoneProject: {
    image: "/images/programs/software-engineering.jpg",

    description:
      "A full-stack product build — from planning and architecture to frontend, backend, API integration, testing, and deployment — giving you experience building a production-ready application.",

    quote:
      "The capstone is where everything comes together — you'll build, debug, collaborate, and ship something you're proud to put in your portfolio.",
  },
  careerOutcomes: [
    {
      initials: "AO",
      name: "Amaka O.",
      role: "Frontend Developer",
      company: "Flutterwave",
      avatarBg: "#1F1F25",
    },
    {
      initials: "DO",
      name: "David O.",
      role: "Software Engineer",
      company: "Interswitch",
      avatarBg: "#00B6CE",
    },
    {
      initials: "YA",
      name: "Yusuf A.",
      role: "Full-Stack Developer",
      company: "Andela",
      avatarBg: "#1F1F25",
    },
  ],
  faqs: [],

  cta: {
    title: "Ready to build, ship, and launch real software?",
    buttonText: "Apply Now",
    buttonHref: "/apply",
    nextCohortDate: "August 18, 2026",
    applicationDeadline: "Applications close Aug 25",
  },
};
