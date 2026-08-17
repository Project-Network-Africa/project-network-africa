"use client";

import { adminNavItems } from "@/src/components/portal/admin/(dashboard)/admin-nav.data";
import DashboardLayout from "@/src/components/portal/shared/DashboardLayout";
import { usePathname } from "next/navigation";

interface AdminShellProps {
  children: React.ReactNode;
}

export default function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();

  const currentNavItem = adminNavItems.find((item) => item.href === pathname);

  return (
    <DashboardLayout
      navItems={adminNavItems}
      pageTitle={currentNavItem?.label ?? "Dashboard"}
      userInitials="AD"
      notificationCount={3}
    >
      {children}
    </DashboardLayout>
  );
}
