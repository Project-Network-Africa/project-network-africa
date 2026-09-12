import { ContentTypeNavItem } from "./content.types";

// /* =========================================================
//    CONTENT TYPE NAVIGATION
// ========================================================= */

// export const contentTypeNavItems: ContentTypeNavItem[] = [
//   {
//     label: "All content",
//     count: 89,
//   },
//   {
//     label: "Program updates",
//     count: 12,
//   },
//   {
//     label: "Bootcamps",
//     count: 8,
//   },
//   {
//     label: "Projects",
//     count: 16,
//   },
//   {
//     label: "Payments",
//     count: 9,
//   },
//   {
//     label: "Resources",
//     count: 21,
//   },
// ];

// /* =========================================================
//    STATS
// ========================================================= */

// export const contentStats: ContentManagementStats[] = [
//   {
//     label: "Published items",
//     value: "64",
//     helper: "Across website",
//   },
//   {
//     label: "Drafts",
//     value: "12",
//     helper: "5 awaiting review",
//   },
//   {
//     label: "Scheduled posts",
//     value: "8",
//     helper: "Next: 22 Aug",
//   },
//   {
//     label: "Needs review",
//     value: "5",
//     helper: "Assigned to editors",
//   },
// ];

// /* =========================================================
//    CONTENT
// ========================================================= */

// export const contentItems: ContentItem[] = [
//   {
//     id: 1,
//     title: "Building Your Portfolio",
//     type: "Blog post",
//     category: "Career Tips",
//     author: "Amina Yusuf",
//     status: "Published",
//     featured: true,
//     updated: "18 Aug 2026",
//     publishDate: "18 Aug 2026",
//     action: "Edit",
//   },

//   {
//     id: 2,
//     title: "From Learner to Lead",
//     type: "Success story",
//     category: "Alumni",
//     author: "Chidi Nwosu",
//     status: "Draft",
//     featured: true,
//     updated: "17 Aug 2026",
//     publishDate: "—",
//     action: "Review",
//   },

//   {
//     id: 3,
//     title: "Product Design Guide",
//     type: "Resource",
//     category: "Product",
//     author: "Amina Yusuf",
//     status: "Scheduled",
//     featured: false,
//     updated: "16 Aug 2026",
//     publishDate: "22 Aug 2026",
//     action: "Edit",
//   },

//   {
//     id: 4,
//     title: "Community Demo Day",
//     type: "Event",
//     category: "Community",
//     author: "Femi Cole",
//     status: "Published",
//     featured: true,
//     updated: "14 Aug 2026",
//     publishDate: "14 Aug 2026",
//     action: "View",
//   },

//   {
//     id: 5,
//     title: "Mentorship FAQs",
//     type: "FAQ",
//     category: "Mentorship",
//     author: "Chidi Nwosu",
//     status: "Needs review",
//     featured: false,
//     updated: "12 Aug 2026",
//     publishDate: "—",
//     action: "Review",
//   },

//   {
//     id: 6,
//     title: "How to Prepare for Interviews",
//     type: "Blog post",
//     category: "Career Tips",
//     author: "Amina Yusuf",
//     status: "Published",
//     featured: false,
//     updated: "10 Aug 2026",
//     publishDate: "10 Aug 2026",
//     action: "Edit",
//   },

//   {
//     id: 7,
//     title: "Cohort 6 Showcase",
//     type: "Event",
//     category: "Community",
//     author: "Femi Cole",
//     status: "Scheduled",
//     featured: true,
//     updated: "8 Aug 2026",
//     publishDate: "29 Aug 2026",
//     action: "Edit",
//   },

//   {
//     id: 8,
//     title: "Frontend Engineering Resources",
//     type: "Resource",
//     category: "Engineering",
//     author: "David Mensah",
//     status: "Published",
//     featured: false,
//     updated: "6 Aug 2026",
//     publishDate: "6 Aug 2026",
//     action: "View",
//   },
// ];

// export const contentCategories = {
//   "Program Update": [
//     "Cohort Announcement",
//     "Schedule Change",
//     "Curriculum Update",
//     "Eligibility",
//     "Programme Information",
//   ],

//   "Programme Bootcamp": [
//     "Product Design",
//     "Software Engineering",
//     "Data Analysis",
//     "Product Management",
//     "Career Development",
//   ],

//   "Project Example": [
//     "Product Design",
//     "Software Development",
//     "Data Analytics",
//     "Product Management",
//     "Employer Project",
//   ],

//   "Payment Update": [
//     "Cohort Fee",
//     "Payment Deadline",
//     "Instalment Plan",
//     "Payment Method",
//     "Refund Information",
//   ],

//   "Resource Content": [
//     "Learning Material",
//     "Template & Checklist",
//     "Portfolio Guide",
//     "Career Resource",
//     "Interview Preparation",
//   ],

//   "Article / News": [
//     "PN Africa News",
//     "Community",
//     "Events",
//     "Partnerships",
//     "Success Stories",
//   ],
// } as const;

// export type ContentType = keyof typeof contentCategories;

// export const contentTypes = Object.keys(contentCategories) as ContentType[];
import { ContentItem, ContentType } from "./content.types";

/* =========================================================
   CONTENT TYPE → CATEGORY
========================================================= */

export const contentCategories: Record<ContentType, string[]> = {
  "Program Update": [
    "Cohort Announcement",
    "Schedule Change",
    "Curriculum Update",
    "Eligibility",
    "Programme Information",
  ],

  "Programme Bootcamp": [
    "Product Design",
    "Software Engineering",
    "Data Analysis",
    "Product Management",
    "Career Development",
  ],

  "Project Example": [
    "Product Design",
    "Software Development",
    "Data Analytics",
    "Product Management",
    "Employer Project",
  ],

  "Payment Update": [
    "Cohort Fee",
    "Payment Deadline",
    "Instalment Plan",
    "Payment Method",
    "Refund Information",
  ],

  "Resource Content": [
    "Learning Material",
    "Template & Checklist",
    "Portfolio Guide",
    "Career Resource",
    "Interview Preparation",
  ],

  "Article / News": [
    "PN Africa News",
    "Community",
    "Events",
    "Partnerships",
    "Success Stories",
  ],
};

/* =========================================================
   CONTENT TYPES
========================================================= */

export const contentTypes = Object.keys(contentCategories) as ContentType[];

/* =========================================================
   SAMPLE CONTENT
========================================================= */

// export const contentItems: ContentItem[] = [
//   {
//     id: 1,

//     title: "Building Your Portfolio",

//     slug: "building-your-portfolio",

//     type: "Resource Content",

//     category: "Portfolio Guide",

//     author: "Amina Yusuf",

//     status: "Published",

//     excerpt:
//       "A practical guide to turning your learning journey and project work into a portfolio that attracts employers.",

//     body: `
// <h2>Turn your projects into proof of ability</h2>

// <p>
// A strong portfolio does more than display finished screens.
// It helps employers understand how you think, the decisions you made
// and the value your work created.
// </p>

// <h3>What employers want to see</h3>

// <ul>
// <li>A clear problem and the people affected</li>
// <li>Evidence from research, testing or data</li>
// <li>Your design decisions and their trade-offs</li>
// <li>Measurable outcomes and lessons learned</li>
// </ul>

// <p>
// Tip: Show the process behind the work. A thoughtful explanation is
// often more valuable than a polished final screen.
// </p>
// `,

//     publishDate: "18 Aug 2026",

//     visibility: "Public",

//     featuredImage: "/images/portfolio-cover.jpg",

//     featuredImageName: "portfolio-cover.jpg",

//     featuredImageSize: "1600 × 900 • 428 KB",

//     altText: "Learner presenting a portfolio case study",

//     searchTitle: "How to Build a Strong Tech Portfolio",

//     metaDescription:
//       "Learn how to present your process, decisions and outcomes in a portfolio employers trust.",

//     previewUrl: "pnafrica.org/resources/portfolio",

//     featured: true,

//     updatedAt: "2 min ago",

//     activities: [
//       {
//         text: "Content updated",
//         time: "2 min ago",
//       },
//       {
//         text: "Featured image replaced",
//         time: "1 day ago",
//       },
//       {
//         text: "SEO metadata updated",
//         time: "3 days ago",
//       },
//       {
//         text: "Content published",
//         time: "18 Aug 2026",
//       },
//     ],

//     versions: [
//       {
//         version: "v3",
//         author: "Femi Cole",
//         date: "18 Aug 2026",
//         action: "Restore",
//       },
//       {
//         version: "v2",
//         author: "Amina Yusuf",
//         date: "15 Aug 2026",
//         action: "Restore",
//       },
//       {
//         version: "v1",
//         author: "Amina Yusuf",
//         date: "10 Aug 2026",
//         action: "Restore",
//       },
//     ],
//   },

//   {
//     id: 2,

//     title: "Cohort 6 Project Update",

//     slug: "cohort-6-project-update",

//     type: "Program Update",

//     category: "Cohort Announcement",

//     author: "Chidi Nwosu",

//     status: "Draft",

//     excerpt:
//       "An update for Cohort 6 learners about upcoming project milestones.",

//     body: `
// <h2>Cohort 6 project milestones</h2>

// <p>
// Learners in Cohort 6 are moving into the project experience phase.
// </p>

// <p>
// Project milestone reviews will take place throughout the programme.
// </p>
// `,

//     publishDate: "—",

//     visibility: "Public",

//     altText: "",

//     searchTitle: "Cohort 6 Project Update",

//     metaDescription: "Latest project milestone updates for Cohort 6 learners.",

//     activities: [
//       {
//         text: "Draft created",
//         time: "Yesterday",
//       },
//       {
//         text: "Content assigned to editor",
//         time: "2 days ago",
//       },
//     ],

//     versions: [],
//   },
// ];

//    CONTENT TYPE NAVIGATION

export const contentTypeNavItems: ContentTypeNavItem[] = [
  {
    label: "All content",
    count: 89,
  },
  {
    label: "Program updates",
    count: 12,
  },
  {
    label: "Bootcamps",
    count: 8,
  },
  {
    label: "Projects",
    count: 16,
  },
  {
    label: "Payments",
    count: 9,
  },
  {
    label: "Resources",
    count: 21,
  },
];
