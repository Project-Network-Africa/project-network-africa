"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/PortalHeader";

import { DashboardLayoutProps } from "./dashboard-layout";

import { checkAuth } from "@/src/services/auth";
import { getMyCohortApplication } from "@/src/services/applicants";

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

  if (pathname === "/applicant/profile/edit") {
    return "Edit Profile";
  }

  if (pathname === "/applicant/settings") {
    return "Settings";
  }

  if (pathname === "/applicant/application-status") {
    return "Application Status";
  }

  return defaultTitle;
}

export default function DashboardLayout({
  navItems,
  pageTitle,
  notificationCount,
  children,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [applicationStatus, setApplicationStatus] = useState("");
  const [userInitials, setUserInitials] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await checkAuth();
        const user = response.user;

        console.log("DASHBOARD AUTH:", response);

        const initials =
          `${user.firstName?.charAt(0) || ""}${user.lastName?.charAt(0) || ""}`.toUpperCase();

        setUserInitials(initials);

        const role = user.role;

        if (role === "Applicant") {
          try {
            const applicationResponse = await getMyCohortApplication();

            const status =
              applicationResponse.application?.applicationStatus || "";

            setApplicationStatus(status);

            if (
              pathname.startsWith("/applicant/") &&
              status !== "Accepted" &&
              pathname !== "/applicant/dashboard" &&
              pathname !== "/applicant/profile" &&
              pathname !== "/applicant/profile/edit" &&
              pathname !== "/applicant/settings" &&
              pathname !== "/applicant/application-status"
            ) {
              router.replace("/applicant/application-status");
              return;
            }
          } catch (error) {
            console.error("FAILED TO GET APPLICATION:", error);
          }
        }

        if (pathname.startsWith("/applicant") && role !== "Applicant") {
          router.replace("/login");
          return;
        }

        if (pathname.startsWith("/mentor") && role !== "Mentor") {
          router.replace("/login");
          return;
        }

        if (pathname.startsWith("/admin") && role !== "Admin") {
          router.replace("/login");
          return;
        }

        setCheckingAuth(false);
      } catch (error) {
        console.log("DASHBOARD AUTH FAILED:", error);
        router.replace("/login");
      }
    };

    verifyAuth();
  }, [router, pathname]);

  const title = getPageTitle(pathname, pageTitle);

  const isApplicantRestricted =
    pathname.startsWith("/applicant") && applicationStatus !== "Accepted";

  const visibleNavItems = isApplicantRestricted
    ? navItems.filter(
        (item) =>
          item.href === "/applicant/dashboard" ||
          item.href === "/applicant/profile" ||
          item.href === "/applicant/application-status" ||
          item.href === "/applicant/settings" ||
          item.href === "/logout",
      )
    : navItems;

  if (checkingAuth) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen w-full bg-[#F8F8F8]">
      <Sidebar
        navItems={visibleNavItems}
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
