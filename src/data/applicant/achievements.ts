import {
  Badge,
  Certificate,
} from "@/src/components/portal/applicant/(achievements)/achievements.types";

export const badges: Badge[] = [
  {
    id: "fastStarter",
    icon: "⚡",
    label: "Fast Starter",
  },
  {
    id: "teamPlayer",
    icon: "🤝",
    label: "Team Player",
  },
  {
    id: "module1",
    icon: "✓",
    label: "Module 1 Complete",
  },
  {
    id: "module2",
    icon: "✓",
    label: "Module 2 Complete",
  },
  {
    id: "perfectAttendance",
    icon: "★",
    label: "Perfect Attendance",
  },
];

export const certificate: Certificate = {
  title: "Product Design Bootcamp Certificate",
  description: "Unlocks at 100% course completion — you're at 68%.",
  completionPercentage: 68,
  isUnlocked: false,
};
