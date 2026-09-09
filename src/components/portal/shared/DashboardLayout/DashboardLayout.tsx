// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// import Sidebar from "../Sidebar/Sidebar";
// import Topbar from "../Topbar/PortalHeader";

// import { DashboardLayoutProps } from "./dashboard-layout";

// import { checkAuth } from "@/src/services/auth";
// import { getMyCohortApplication } from "@/src/services/applicants";

// function getPageTitle(pathname: string, defaultTitle: string) {
//   if (pathname === "/applicant/projects") {
//     return "Projects";
//   }

//   if (pathname.startsWith("/applicant/projects/")) {
//     return "Project Details";
//   }

//   if (pathname === "/applicant/profile") {
//     return "Profile";
//   }

//   if (pathname === "/applicant/profile/edit") {
//     return "Edit Profile";
//   }

//   if (pathname === "/applicant/settings") {
//     return "Settings";
//   }

//   if (pathname === "/applicant/application-status") {
//     return "Application Status";
//   }

//   return defaultTitle;
// }

// export default function DashboardLayout({
//   navItems,
//   pageTitle,
//   notificationCount,
//   children,
// }: DashboardLayoutProps) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [applicationStatus, setApplicationStatus] = useState("");
//   const [userInitials, setUserInitials] = useState("");

//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const verifyAuth = async () => {
//       try {
//         const response = await checkAuth();
//         const user = response.user;

//         console.log("DASHBOARD AUTH:", response);

//         const initials =
//           `${user.firstName?.charAt(0) || ""}${user.lastName?.charAt(0) || ""}`.toUpperCase();

//         setUserInitials(initials);

//         const role = user.role;

//         if (role === "Applicant") {
//           try {
//             const applicationResponse = await getMyCohortApplication();

//             const status =
//               applicationResponse.application?.applicationStatus || "";

//             setApplicationStatus(status);

//             if (
//               pathname.startsWith("/applicant/") &&
//               status !== "Accepted" &&
//               pathname !== "/applicant/dashboard" &&
//               pathname !== "/applicant/profile" &&
//               pathname !== "/applicant/profile/edit" &&
//               pathname !== "/applicant/settings" &&
//               pathname !== "/applicant/application-status"
//             ) {
//               router.replace("/applicant/application-status");
//               return;
//             }
//           } catch (error) {
//             console.error("FAILED TO GET APPLICATION:", error);
//           }
//         }

//         if (pathname.startsWith("/applicant") && role !== "Applicant") {
//           router.replace("/login");
//           return;
//         }

//         if (pathname.startsWith("/mentor") && role !== "Mentor") {
//           router.replace("/login");
//           return;
//         }

//         if (pathname.startsWith("/admin") && role !== "Admin") {
//           router.replace("/login");
//           return;
//         }

//         setCheckingAuth(false);
//       } catch (error) {
//         console.log("DASHBOARD AUTH FAILED:", error);
//         router.replace("/login");
//       }
//     };

//     verifyAuth();
//   }, [router, pathname]);

//   const title = getPageTitle(pathname, pageTitle);

//   const isApplicantRestricted =
//     pathname.startsWith("/applicant") && applicationStatus !== "Accepted";

//   const visibleNavItems = isApplicantRestricted
//     ? navItems.filter(
//         (item) =>
//           item.href === "/applicant/dashboard" ||
//           item.href === "/applicant/profile" ||
//           item.href === "/applicant/application-status" ||
//           item.href === "/applicant/settings" ||
//           item.href === "/logout",
//       )
//     : navItems;

//   if (checkingAuth) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen w-full bg-[#F8F8F8]">
//       <Sidebar
//         navItems={visibleNavItems}
//         isOpen={sidebarOpen}
//         onClose={() => setSidebarOpen(false)}
//       />

//       <main className="min-h-screen lg:ml-[248px]">
//         <div className="flex min-h-screen flex-col gap-5 bg-[#F8F8F8] px-4 py-5 sm:px-6 lg:px-9 lg:py-8">
//           <Topbar
//             title={title}
//             userInitials={userInitials}
//             notificationCount={notificationCount}
//             onMenuClick={() => setSidebarOpen(true)}
//           />

//           {children}
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/PortalHeader";
import { DashboardLayoutProps } from "./dashboard-layout";
import { checkAuth } from "@/src/services/auth";
import {
  getMyApplicantProfile,
  getMyCohortApplication,
} from "@/src/services/applicants";

type ApplicantState = "not-applied" | "pending" | "rejected" | "admitted";

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
          let applicantResponse;

          // First check if Applicant profile exists
          try {
            applicantResponse = await getMyApplicantProfile();
          } catch (error) {
            console.log("NO APPLICANT PROFILE YET:", error);
            setApplicantState("not-applied");
            setCheckingAuth(false);
            return;
          }

          const applicant = applicantResponse?.applicant;

          // No Applicant profile
          if (!applicant) {
            setApplicantState("not-applied");
            setCheckingAuth(false);
            return;
          }

          // Applicant has been admitted
          if (applicant.admissionStatus === "Admitted") {
            setApplicantState("admitted");
            setCheckingAuth(false);
            return;
          }

          // Applicant profile exists, so now check application
          try {
            const applicationResponse = await getMyCohortApplication();

            const application = applicationResponse?.application;

            const status = application?.applicationStatus;

            if (status === "Rejected") {
              setApplicantState("rejected");
            } else if (status === "Pending") {
              setApplicantState("pending");
            } else {
              setApplicantState("not-applied");
            }
          } catch (error) {
            console.log("NO COHORT APPLICATION YET:", error);
            setApplicantState("not-applied");
          }
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

  // =========================
  // APPLICANT SIDEBAR
  // =========================

  const isApplicant = pathname.startsWith("/applicant");

  let visibleNavItems = navItems;

  if (isApplicant) {
    if (applicantState === "not-applied") {
      // NEW USER
      visibleNavItems = navItems.filter(
        (item) =>
          item.href === "/applicant/dashboard" ||
          item.href === "/applicant/settings" ||
          item.href === "/logout" ||
          item.href === "/applicant/settings/deactivate",
      );
    } else if (applicantState === "pending" || applicantState === "rejected") {
      // APPLICANT WHO HAS SUBMITTED
      visibleNavItems = navItems.filter(
        (item) =>
          item.href === "/applicant/dashboard" ||
          item.href === "/applicant/profile" ||
          item.href === "/applicant/application-status" ||
          item.href === "/applicant/settings" ||
          item.href === "/logout" ||
          item.href === "/applicant/settings/deactivate",
      );
    } else if (applicantState === "admitted") {
      // ADMITTED APPLICANT
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
