"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/PortalHeader";
import { DashboardLayoutProps } from "./dashboard-layout";

import { checkAuth } from "@/src/services/auth";
import { getMyApplicantProfile } from "@/src/services/applicants";
import { getMyMentorProfile } from "@/src/services/mentors";
type ApplicantState = "not-applied" | "pending" | "rejected" | "admitted";
type MentorState = "not-applied" | "pending" | "rejected" | "accepted";
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
  const [applicantState, setApplicantState] =
    useState<ApplicantState>("not-applied");
  const [mentorState, setMentorState] = useState<MentorState>("not-applied");
  const [userInitials, setUserInitials] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const verifyAuth = async () => {
      setCheckingAuth(true);

      try {
        const response = await checkAuth();
        const user = response.user;

        console.log("DASHBOARD AUTH:", response);

        const initials =
          `${user.firstName?.charAt(0) || ""}${user.lastName?.charAt(0) || ""}`.toUpperCase();

        setUserInitials(initials);

        const role = user.role;

        // =========================
        // ROLE PROTECTION
        // =========================

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

        // =========================
        // APPLICANT STATE
        // =========================

        if (role === "Applicant") {
          try {
            const applicantResponse = await getMyApplicantProfile();
            const applicant = applicantResponse?.applicant;

            // No applicant profile means the applicant has not applied yet.
            if (!applicant) {
              setApplicantState("not-applied");
              return;
            }

            // Use Applicant admissionStatus as the source of truth.
            if (applicant.admissionStatus === "Admitted") {
              setApplicantState("admitted");
              return;
            }

            if (applicant.admissionStatus === "Rejected") {
              setApplicantState("rejected");
              return;
            }

            if (applicant.admissionStatus === "Pending") {
              setApplicantState("pending");
              return;
            }

            // If no recognised status exists.
            setApplicantState("not-applied");
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (error) {
            console.log("NO APPLICANT PROFILE YET");
            setApplicantState("not-applied");
          }
        }

        // =========================
        // MENTOR STATE
        // =========================

        if (role === "Mentor") {
          try {
            const mentorResponse = await getMyMentorProfile();
            const mentor = mentorResponse?.mentor;

            if (!mentor) {
              setMentorState("not-applied");
              return;
            }

            if (mentor.status === "Accepted") {
              setMentorState("accepted");
              return;
            }

            if (mentor.status === "Rejected") {
              setMentorState("rejected");
              return;
            }

            if (mentor.status === "Pending") {
              setMentorState("pending");
              return;
            }

            setMentorState("not-applied");
          } catch (error) {
            console.log("NO MENTOR PROFILE YET");
            setMentorState("not-applied");
          }
        }
      } catch (error) {
        console.log("DASHBOARD AUTH FAILED:", error);
        router.replace("/login");
        return;
      } finally {
        setCheckingAuth(false);
      }
    };

    verifyAuth();
  }, [router, pathname]);

  const title = getPageTitle(pathname, pageTitle);
  const isApplicant = pathname.startsWith("/applicant");

  // IMPORTANT:
  // Do not render the dashboard, sidebar, or route protection
  // until authentication and applicant state have been checked.
  if (checkingAuth) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-[#F8F8F8]">
        <p className="text-[13px] text-[#5D5D61]">Loading...</p>
      </div>
    );
  }

  // =========================
  // APPLICANT SIDEBAR
  // =========================

  let visibleNavItems = navItems;

  if (isApplicant) {
    if (applicantState === "not-applied") {
      visibleNavItems = navItems.filter(
        (item) =>
          item.href === "/applicant/dashboard" ||
          item.href === "/applicant/settings" ||
          item.href === "/logout" ||
          item.href === "/applicant/settings/deactivate",
      );
    } else if (applicantState === "pending" || applicantState === "rejected") {
      visibleNavItems = navItems.filter(
        (item) =>
          item.href === "/applicant/dashboard" ||
          item.href === "/applicant/profile" ||
          item.href === "/applicant/profile/edit" ||
          item.href === "/applicant/application-status" ||
          item.href === "/applicant/settings" ||
          item.href === "/logout" ||
          item.href === "/applicant/settings/deactivate",
      );
    } else if (applicantState === "admitted") {
      visibleNavItems = navItems;
    }
  }

  // =========================
  // ROUTE PROTECTION
  // =========================

  if (isApplicant && applicantState === "not-applied") {
    const allowedRoutes = [
      "/applicant/dashboard",
      "/applicant/settings",
      "/applicant/settings/deactivate",
      "/logout",
    ];

    if (!allowedRoutes.includes(pathname)) {
      router.replace("/applicant/dashboard");
      return null;
    }
  }

  if (
    isApplicant &&
    (applicantState === "pending" || applicantState === "rejected")
  ) {
    const allowedRoutes = [
      "/applicant/dashboard",
      "/applicant/profile",
      "/applicant/profile/edit",
      "/applicant/application-status",
      "/applicant/settings",
      "/applicant/settings/deactivate",
      "/logout",
    ];

    if (!allowedRoutes.includes(pathname)) {
      router.replace("/applicant/dashboard");
      return null;
    }
  }

  const isMentor = pathname.startsWith("/mentor");

  if (isMentor) {
    if (mentorState === "not-applied") {
      visibleNavItems = navItems.filter(
        (item) =>
          item.href === "/mentor/dashboard" ||
          item.href === "/mentor/settings" ||
          item.href === "/logout",
      );
    }
  }
  //mentor route protection
  if (isMentor && mentorState === "not-applied") {
    const allowedRoutes = ["/mentor/dashboard", "/mentor/settings", "/logout"];

    if (!allowedRoutes.includes(pathname)) {
      router.replace("/mentor/dashboard");
      return null;
    }
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
