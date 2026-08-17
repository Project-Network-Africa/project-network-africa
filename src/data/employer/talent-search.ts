import {
  Talent,
  TalentStat,
} from "@/src/components/portal/employer/(talent-search)/talent-search.types";

export const talentStats: TalentStat[] = [
  {
    id: "active-jobs",
    value: "12",
    label: "Active Job Posts",
    highlighted: true,
  },
  {
    id: "candidates-viewed",
    value: "340",
    label: "Candidates Viewed",
  },
  {
    id: "shortlisted",
    value: "28",
    label: "Shortlisted",
    highlighted: true,
  },
  {
    id: "hired",
    value: "6",
    label: "Hired This Year",
  },
];

export const recommendedTalent: Talent[] = [
  {
    id: "amara-okafor",
    initials: "AO",
    name: "Amara Okafor",
    role: "Product Designer",
    image: "/images/talent/amara.jpg",
  },
  {
    id: "tunde-bello",
    initials: "TB",
    name: "Tunde Bello",
    role: "Backend Engineer",
    image: "/images/talent/tunde.jpg",
  },
  {
    id: "zainab-musa",
    initials: "ZM",
    name: "Zainab Musa",
    role: "Data Analyst",
    image: "/images/talent/zainab.jpg",
  },
];
