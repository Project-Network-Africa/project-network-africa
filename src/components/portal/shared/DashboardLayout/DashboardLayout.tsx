"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/PortalHeader";
import { DashboardLayoutProps } from "./dashboard-layout";

function getPageTitle(pathname: string, defaultTitle: string) {
  if (pathname === "/applicant/projects") {
    return "Projects";
  }

  if (pathname.startsWith("/applicant/projects/")) {
    return "Project Details";
  }

  if (pathname === "/applicant/profile") {
    return "Profile";
  }

  if (pathname === "/applicant/application-status") {
    return "Application Status";
  }

  return defaultTitle;
}

export default function DashboardLayout({
  navItems,
  pageTitle,
  userInitials,
  notificationCount,
  children,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const title = getPageTitle(pathname, pageTitle);

  return (
    <div className="min-h-screen w-full bg-[#F8F8F8]">
      <Sidebar
        navItems={navItems}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="min-h-screen lg:ml-[248px]">
        <div className="flex min-h-screen flex-col gap-5 bg-[#F8F8F8] px-4 py-5 sm:px-6 lg:px-9 lg:py-8">
          <Topbar
            title={title}
            userInitials={userInitials}
            notificationCount={notificationCount}
            onMenuClick={() => setSidebarOpen(true)}
          />

          {children}
        </div>
      </main>
    </div>
  );
}
