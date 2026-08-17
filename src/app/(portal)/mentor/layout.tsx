"use client";

import { mentorNavItems } from "@/src/components/portal/mentor/(dashboard)/mentor-nav.data";
import DashboardLayout from "@/src/components/portal/shared/DashboardLayout";
import { usePathname } from "next/navigation";

interface MentorShellProps {
  children: React.ReactNode;
}

export default function MentorShell({ children }: MentorShellProps) {
  const pathname = usePathname();

  const currentNavItem = mentorNavItems.find((item) => item.href === pathname);

  return (
    <DashboardLayout
      navItems={mentorNavItems}
      pageTitle={currentNavItem?.label ?? "Dashboard"}
      userInitials="MT"
      notificationCount={3}
    >
      {children}
    </DashboardLayout>
  );
}
