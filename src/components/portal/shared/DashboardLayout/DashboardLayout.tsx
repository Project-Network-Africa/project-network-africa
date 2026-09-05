"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/PortalHeader";
import { DashboardLayoutProps } from "./dashboard-layout";

import { checkAuth } from "@/src/services/auth";

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
  const [checkingAuth, setCheckingAuth] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        // awai t checkAuth();
        const response = await checkAuth();
        console.log("DASHBOARD AUTH:", response);
        setCheckingAuth(false);
      } catch (error) {
        console.log("DASHBOARD AUTH FAILED:", error);
        router.replace("/login");
      }
    };

    verifyAuth();
  }, [router]);

  //use this for the final production

  // useEffect(() => {
  //   const verifyAuth = async () => {
  //     try {
  //       const response = await checkAuth();
  //       const role = response.user.role;

  //       if (pathname.startsWith("/applicant") && role !== "Applicant") {
  //         router.replace("/login");
  //         return;
  //       }

  //       if (pathname.startsWith("/mentor") && role !== "Mentor") {
  //         router.replace("/login");
  //         return;
  //       }

  //       if (pathname.startsWith("/admin") && role !== "Admin") {
  //         router.replace("/login");
  //         return;
  //       }

  //       setCheckingAuth(false);
  //     } catch {
  //       router.replace("/login");
  //     }
  //   };

  //   verifyAuth();
  // }, [router, pathname]);
  const title = getPageTitle(pathname, pageTitle);
  if (checkingAuth) {
    return <div>Loading...</div>;
  }

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
