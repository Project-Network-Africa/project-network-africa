"use client";

import { usePathname } from "next/navigation";

import DashboardLayout from "../shared/DashboardLayout";
import { SidebarNavItem } from "../shared/Sidebar/portalsidebar";

interface PortalShellProps {
  children: React.ReactNode;
  navItems: SidebarNavItem[];
  userInitials: string;
  notificationCount?: number;
  defaultPageTitle?: string;
}

export default function PortalShell({
  children,
  navItems,
  userInitials,
  notificationCount = 0,
  defaultPageTitle = "Dashboard",
}: PortalShellProps) {
  const pathname = usePathname();

  const currentNavItem = navItems.find(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );

  return (
    <DashboardLayout
      navItems={navItems}
      pageTitle={currentNavItem?.label ?? defaultPageTitle}
      userInitials={userInitials}
      notificationCount={notificationCount}
    >
      {children}
    </DashboardLayout>
  );
}
