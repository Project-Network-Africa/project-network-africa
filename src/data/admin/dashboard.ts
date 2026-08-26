import {
  ApplicationData,
  PendingApproval,
  PlatformStat,
  PlatformUser,
} from "@/src/types/admin/dashboard";

export const platformStats: PlatformStat[] = [
  {
    id: "users",
    value: "4,820",
    label: "Total Users",
    highlighted: true,
  },
  {
    id: "applicants",
    value: "2,400",
    label: "Applicants",
  },
  {
    id: "mentors",
    value: "350",
    label: "Mentors",
    highlighted: true,
  },
  {
    id: "employers",
    value: "180",
    label: "Employers",
  },
  {
    id: "revenue",
    value: "₦48.2M",
    label: "Revenue (YTD)",
    highlighted: true,
  },
];

export const applicationsOverTime: ApplicationData[] = [
  {
    id: "jan",
    value: 42,
  },
  {
    id: "feb",
    value: 58,
  },
  {
    id: "mar",
    value: 49,
  },
  {
    id: "apr",
    value: 76,
  },
  {
    id: "may",
    value: 63,
  },
  {
    id: "jun",
    value: 88,
  },
  {
    id: "jul",
    value: 82,
  },
  {
    id: "aug",
    value: 94,
    highlighted: true,
  },
];

export const pendingApprovals: PendingApproval[] = [
  {
    id: "approval-1",
    title: "New Mentor Application",
    subtitle: "Kwame A.",
  },
  {
    id: "approval-2",
    title: "Employer Verification",
    subtitle: "Flutterwave",
  },
  {
    id: "approval-3",
    title: "Content Update",
    subtitle: "Programs Page",
  },
];

export const platformUsers: PlatformUser[] = [
  {
    id: "user-1",
    initials: "AO",
    name: "Amara Okafor",
    role: "Applicant",
    joined: "Jan 12, 2026",
  },
  {
    id: "user-2",
    initials: "KA",
    name: "Kwame Asante",
    role: "Mentor",
    joined: "Jun 2, 2026",
  },
  {
    id: "user-3",
    initials: "F",
    name: "Flutterwave",
    role: "Employer",
    joined: "Mar 8, 2025",
  },
];
