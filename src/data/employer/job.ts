import { Job } from "@/src/types/employer/job";

export const initialJobs: Job[] = [
  {
    id: "junior-product-designer",
    title: "Junior Product Designer",
    location: "Lagos, NG",
    employmentType: "Full-time",
    description:
      "We are looking for a Junior Product Designer to join our growing team and help create intuitive and engaging digital experiences.",
    requirements:
      "Experience with Figma, user research, wireframing, prototyping and product design.",
    status: "Active",
    postedDate: "Jul 20, 2026",

    applicants: [
      {
        id: "amara-okafor",
        name: "Amara Okafor",
        initials: "AO",
        appliedDate: "Jul 18, 2026",
        stage: "Shortlisted",
      },
      {
        id: "ifeoma-chukwu",
        name: "Ifeoma Chukwu",
        initials: "IC",
        appliedDate: "Jul 20, 2026",
        stage: "Interviewing",
      },
      {
        id: "bayo-ogundele",
        name: "Bayo Ogundele",
        initials: "BO",
        appliedDate: "Jul 22, 2026",
        stage: "Applied",
      },
      {
        id: "kemi-adeyemi",
        name: "Kemi Adeyemi",
        initials: "KA",
        appliedDate: "Jul 24, 2026",
        stage: "Applied",
      },
    ],
  },

  {
    id: "backend-engineer-node",
    title: "Backend Engineer (Node)",
    location: "Remote",
    employmentType: "Full-time",
    description:
      "We are looking for a Backend Engineer to build scalable APIs and services.",
    requirements:
      "Experience with Node.js, TypeScript, REST APIs, databases and authentication.",
    status: "Active",
    postedDate: "Jul 18, 2026",

    applicants: [
      {
        id: "ifeoma-chukwu",
        name: "Ifeoma Chukwu",
        initials: "IC",
        appliedDate: "Jul 19, 2026",
        stage: "Interviewing",
      },
    ],
  },

  {
    id: "data-analyst-intern-1",
    title: "Data Analyst Intern",
    location: "Nairobi, KE",
    employmentType: "Internship",
    description: "Support the team with data analysis and reporting.",
    requirements: "Basic SQL, Excel and data visualization experience.",
    status: "Closed",
    postedDate: "Jun 20, 2026",

    applicants: [
      {
        id: "bayo-ogundele",
        name: "Bayo Ogundele",
        initials: "BO",
        appliedDate: "Jun 25, 2026",
        stage: "Applied",
      },
    ],
  },

  {
    id: "data-analyst-intern-2",
    title: "Data Analyst Intern",
    location: "Nairobi, KE",
    employmentType: "Internship",
    description: "Support the team with data analysis and reporting.",
    requirements: "Basic SQL, Excel and data visualization experience.",
    status: "Closed",
    postedDate: "Jun 18, 2026",

    applicants: [],
  },

  {
    id: "data-analyst-intern-3",
    title: "Data Analyst Intern",
    location: "Nairobi, KE",
    employmentType: "Internship",
    description: "Support the team with data analysis and reporting.",
    requirements: "Basic SQL, Excel and data visualization experience.",
    status: "Closed",
    postedDate: "Jun 15, 2026",

    applicants: [],
  },
];
