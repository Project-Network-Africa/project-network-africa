import { ContentItem, ContentStat, ContentFilter } from "./content.types";

/* =========================================================
   STATS
========================================================= */

export const contentStats: ContentStat[] = [
  {
    label: "Published items",
    value: "64",
    helper: "Across website",
    helperColor: "text-[#00B6CE]",
  },
  {
    label: "Drafts",
    value: "12",
    helper: "5 awaiting review",
    helperColor: "text-[#00B6CE]",
  },
  {
    label: "Scheduled posts",
    value: "8",
    helper: "Next: 22 Aug",
    helperColor: "text-[#00B6CE]",
  },
  {
    label: "Needs review",
    value: "5",
    helper: "Assigned to editors",
    helperColor: "text-[#00B6CE]",
  },
];

/* =========================================================
   FILTERS
========================================================= */

export const contentFilters: ContentFilter[] = [
  {
    label: "Content type",
    value: "all",
  },
  {
    label: "Category",
    value: "all",
  },
  {
    label: "Publish status",
    value: "all",
  },
];

/* =========================================================
   CONTENT
========================================================= */

export const contentItems: ContentItem[] = [
  {
    id: 1,
    contentItem: "Building Your Portfolio",
    type: "Blog post",
    category: "Career Tips",
    author: "Amina Yusuf",
    status: "Published",
    featured: "Yes",
    updated: "18 Aug 2026",
    publishDate: "18 Aug 2026",
    action: "Edit",
  },

  {
    id: 2,
    contentItem: "From Learner to Lead",
    type: "Success story",
    category: "Alumni",
    author: "Chidi Nwosu",
    status: "Draft",
    featured: "Yes",
    updated: "17 Aug 2026",
    publishDate: "—",
    action: "Review",
  },

  {
    id: 3,
    contentItem: "Product Design Guide",
    type: "Resource",
    category: "Product",
    author: "Amina Yusuf",
    status: "Scheduled",
    featured: "No",
    updated: "16 Aug 2026",
    publishDate: "22 Aug 2026",
    action: "Edit",
  },

  {
    id: 4,
    contentItem: "Community Demo Day",
    type: "Event",
    category: "Community",
    author: "Femi Cole",
    status: "Published",
    featured: "Yes",
    updated: "14 Aug 2026",
    publishDate: "14 Aug 2026",
    action: "View",
  },

  {
    id: 5,
    contentItem: "Mentorship FAQs",
    type: "FAQ",
    category: "Mentorship",
    author: "Chidi Nwosu",
    status: "Needs review",
    featured: "No",
    updated: "12 Aug 2026",
    publishDate: "—",
    action: "Review",
  },

  {
    id: 6,
    contentItem: "How to Prepare for Interviews",
    type: "Blog post",
    category: "Career Tips",
    author: "Amina Yusuf",
    status: "Published",
    featured: "No",
    updated: "11 Aug 2026",
    publishDate: "11 Aug 2026",
    action: "Edit",
  },

  {
    id: 7,
    contentItem: "Engineering Career Guide",
    type: "Resource",
    category: "Engineering",
    author: "David Mensah",
    status: "Draft",
    featured: "No",
    updated: "10 Aug 2026",
    publishDate: "—",
    action: "Review",
  },

  {
    id: 8,
    contentItem: "PN Africa Community Meetup",
    type: "Event",
    category: "Community",
    author: "Femi Cole",
    status: "Scheduled",
    featured: "Yes",
    updated: "9 Aug 2026",
    publishDate: "25 Aug 2026",
    action: "Edit",
  },

  {
    id: 9,
    contentItem: "Mentor Spotlight: Amara Okafor",
    type: "Success story",
    category: "Mentorship",
    author: "Chidi Nwosu",
    status: "Published",
    featured: "Yes",
    updated: "8 Aug 2026",
    publishDate: "8 Aug 2026",
    action: "View",
  },

  {
    id: 10,
    contentItem: "Data Analytics Learning Path",
    type: "Resource",
    category: "Data",
    author: "Amina Yusuf",
    status: "Published",
    featured: "No",
    updated: "7 Aug 2026",
    publishDate: "7 Aug 2026",
    action: "Edit",
  },
];
