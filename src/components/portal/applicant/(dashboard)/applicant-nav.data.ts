import { SidebarNavItem } from "../../shared/Sidebar/portalsidebar";

export const applicantNavItems: SidebarNavItem[] = [
  { label: "Dashboard", href: "/applicant/dashboard" },
  { label: "Application Status", href: "/applicant/application-status" },
  { label: "Onboarding Checklist", href: "/applicant/onboarding-checklist" },
  { label: "Profile", href: "/applicant/profile" },
  { label: "Projects", href: "/applicant/projects" },
  { label: "Team Workspace", href: "/applicant/team-workspace" },
  { label: "Mentorship", href: "/applicant/mentorship" },

  // { label: "Messages", href: "/applicant/messages" },
  { label: "Calendar", href: "/applicant/calendar" },
  { label: "Payments", href: "/applicant/payments" },
  {
    label: "Payment Confirmation",
    href: "/applicant/payments/payment-confirmation",
  },
  { label: "Learning Resources", href: "/applicant/learning-resources" },
  { label: "Career Services", href: "/applicant/career-services" },
  { label: "Achievements", href: "/applicant/achievements" },
  { label: "Referral Program", href: "/applicant/referral-program" },
  { label: "Notifications", href: "/applicant/notifications" },
  { label: "Help & Support", href: "/applicant/help-support" },
  { label: "Settings", href: "/applicant/settings" },
  { label: "Confirm Deactivation", href: "/applicant/settings/deactivate" },
  { label: "Logout", href: "/applicant/logout" },
];
