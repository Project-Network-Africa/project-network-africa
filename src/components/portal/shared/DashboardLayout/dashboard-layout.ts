import { ReactNode } from "react";
import { SidebarNavItem } from "../Sidebar/portalsidebar";

export interface DashboardLayoutProps {
  navItems: SidebarNavItem[];
  pageTitle: string;
  userInitials: string;
  notificationCount?: number;
  children: ReactNode;
}
