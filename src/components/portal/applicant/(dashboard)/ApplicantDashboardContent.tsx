// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// import WelcomeBanner from "./WelcomeBanner";
// import Notifications from "./Notifications";
// import CohortSummary from "./CohortSummary";
// import AssignedTeam from "./AssignedTeam";
// import UpcomingDeadlines from "./UpcomingDeadlines";
// import CurrentProject from "./CurrentProject";
// import AssignedMentor from "./AssignedMentor";
// import CourseProgress from "./CourseProgress";

// import { dashboardData } from "./applicant-dashboard-data";
// import { checkAuth } from "@/src/services/auth";
// import { getMyApplicantProfile } from "@/src/services/applicants";
// import LoadingState from "@/src/components/ui/Loading/LoadingState";

// type ApplicantState =
//   | "not-applied"
//   | "pending"
//   | "rejected"
//   | "accepted"
//   | "admitted";

// export default function ApplicantDashboardContent() {
//   const [name, setName] = useState("");
//   const [applicantState, setApplicantState] =
//     useState<ApplicantState>("not-applied");
//   const [loading, setLoading] = useState(true);

//   const { welcome, notifications } = dashboardData;

//   useEffect(() => {
//     const getDashboardData = async () => {
//       try {
//         const userResponse = await checkAuth();

//         setName(userResponse.user.firstName || "");

//         try {
//           const applicantResponse = await getMyApplicantProfile();
//           const applicant = applicantResponse?.applicant;

//           if (!applicant) {
//             setApplicantState("not-applied");
//             return;
//           }

//           // Applicant admissionStatus is the source of truth.
//           if (applicant.admissionStatus === "Admitted") {
//             setApplicantState("admitted");
//             return;
//           }
//           if (applicant.admissionStatus === "Accepted") {
//             setApplicantState("accepted");
//             return;
//           }
//           if (applicant.admissionStatus === "Rejected") {
//             setApplicantState("rejected");
//             return;
//           }

//           if (applicant.admissionStatus === "Pending") {
//             setApplicantState("pending");
//             return;
//           }

//           setApplicantState("not-applied");
//           // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         } catch (error) {
//           console.log("NO APPLICANT PROFILE YET");
//           setApplicantState("not-applied");
//         }
//       } catch (error) {
//         console.error("FAILED TO GET DASHBOARD DATA:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getDashboardData();
//   }, []);

//   // Do not render Apply Now/Application Status
//   // until we know the applicant state.
//   if (loading) {
//     return (
//       <main className="flex min-h-[300px] items-center justify-center">
//         <LoadingState />
//       </main>
//     );
//   }

//   const progressSummary =
//     applicantState === "not-applied"
//       ? "Start your journey with PN Africa by applying to one of our programmes."
//       : applicantState === "pending"
//         ? "Your application is currently under review. We'll let you know once there's an update."
//         : applicantState === "rejected"
//           ? "Your application was not accepted. You can view your application status for more details."
//           : "You're 68% through the Product Design Bootcamp — Cohort 6";

//   const isAdmitted = applicantState === "admitted";

//   const hasApplied =
//     applicantState === "pending" || applicantState === "rejected";

//   return (
//     <>
//       <WelcomeBanner
//         name={name}
//         progressSummary={progressSummary}
//         buttonText={
//           applicantState === "not-applied"
//             ? "Apply Now"
//             : isAdmitted
//               ? welcome.buttonText
//               : undefined
//         }
//         buttonHref={
//           applicantState === "not-applied"
//             ? "/apply"
//             : isAdmitted
//               ? welcome.buttonHref
//               : undefined
//         }
//       />

//       {!isAdmitted ? (
//         <div className="rounded-[12px] bg-white p-6">
//           <h2 className="text-[16px] font-semibold text-[#1F1F25]">
//             {hasApplied ? "Application Status" : "Get Started"}
//           </h2>

//           <p className="mt-2 text-[13px] text-[#5D5D61]">
//             {applicantState === "not-applied"
//               ? "You haven't submitted an application yet. Apply to a programme to get started."
//               : applicantState === "rejected"
//                 ? "Your application was not accepted."
//                 : "Your application is currently being reviewed."}
//           </p>

//           {applicantState === "not-applied" ? (
//             <Link
//               href="/apply"
//               className="mt-4 inline-block rounded-[8px] bg-[#00B6CE] px-5 py-2.5 text-[13px] font-semibold text-white"
//             >
//               Apply Now
//             </Link>
//           ) : (
//             <Link
//               href="/applicant/application-status"
//               className="mt-4 inline-block text-[13px] font-semibold text-[#00B6CE]"
//             >
//               View application status
//             </Link>
//           )}
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
//             <CourseProgress {...dashboardData.courseProgress} />
//             <AssignedMentor {...dashboardData.mentor} />
//           </div>

//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
//             <CohortSummary {...dashboardData.cohortSummary} />
//             <AssignedTeam {...dashboardData.team} />
//             <UpcomingDeadlines deadlines={dashboardData.deadlines} />
//           </div>

//           <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
//             <CurrentProject {...dashboardData.currentProject} />
//             <Notifications notifications={notifications} />
//           </div>
//         </>
//       )}
//     </>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import WelcomeBanner from "./WelcomeBanner";
import Notifications from "./Notifications";
import CohortSummary from "./CohortSummary";
import AssignedTeam from "./AssignedTeam";
import UpcomingDeadlines from "./UpcomingDeadlines";
import CurrentProject from "./CurrentProject";
import AssignedMentor from "./AssignedMentor";
import CourseProgress from "./CourseProgress";

import { dashboardData } from "./applicant-dashboard-data";
import { checkAuth } from "@/src/services/auth";
import { getMyApplicantProfile } from "@/src/services/applicants";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

type ApplicantState =
  | "not-applied"
  | "pending"
  | "rejected"
  | "accepted"
  | "admitted";

export default function ApplicantDashboardContent() {
  const [name, setName] = useState("");
  const [applicantState, setApplicantState] =
    useState<ApplicantState>("not-applied");
  const [loading, setLoading] = useState(true);

  const { welcome, notifications } = dashboardData;

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const userResponse = await checkAuth();

        setName(userResponse.user.firstName || "");

        try {
          const applicantResponse = await getMyApplicantProfile();
          const applicant = applicantResponse?.applicant;

          if (!applicant) {
            setApplicantState("not-applied");
            return;
          }

          if (applicant.admissionStatus === "Admitted") {
            setApplicantState("admitted");
            return;
          }

          if (applicant.admissionStatus === "Accepted") {
            setApplicantState("accepted");
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

          setApplicantState("not-applied");
        } catch (error) {
          console.log("NO APPLICANT PROFILE YET");
          setApplicantState("not-applied");
        }
      } catch (error) {
        console.error("FAILED TO GET DASHBOARD DATA:", error);
      } finally {
        setLoading(false);
      }
    };

    getDashboardData();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-[300px] items-center justify-center">
        <LoadingState />
      </main>
    );
  }

  const isAccepted = applicantState === "accepted";
  const isAdmitted = applicantState === "admitted";

  const hasApplied =
    applicantState === "pending" ||
    applicantState === "rejected" ||
    applicantState === "accepted";

  const progressSummary =
    applicantState === "not-applied"
      ? "Start your journey with PN Africa by applying to one of our programmes."
      : applicantState === "pending"
        ? "Your application is currently under review. We'll let you know once there's an update."
        : applicantState === "rejected"
          ? "Your application was not accepted. You can view your application status for more details."
          : applicantState === "accepted"
            ? "Congratulations! Your application has been accepted. Complete your payment to secure your place."
            : "You're 68% through the Product Design Bootcamp — Cohort 6";

  return (
    <>
      <WelcomeBanner
        name={name}
        progressSummary={progressSummary}
        buttonText={
          applicantState === "not-applied"
            ? "Apply Now"
            : isAccepted
              ? "Proceed to Payment"
              : isAdmitted
                ? welcome.buttonText
                : undefined
        }
        buttonHref={
          applicantState === "not-applied"
            ? "/apply"
            : isAccepted
              ? "/applicant/payments"
              : isAdmitted
                ? welcome.buttonHref
                : undefined
        }
      />

      {!isAdmitted ? (
        <div className="rounded-[12px] bg-white p-6">
          <h2 className="text-[16px] font-semibold text-[#1F1F25]">
            {applicantState === "accepted"
              ? "Application Accepted"
              : hasApplied
                ? "Application Status"
                : "Get Started"}
          </h2>

          <p className="mt-2 text-[13px] text-[#5D5D61]">
            {applicantState === "not-applied"
              ? "You haven't submitted an application yet. Apply to a programme to get started."
              : applicantState === "accepted"
                ? "Congratulations! Your application has been accepted. Complete your payment to secure your place."
                : applicantState === "rejected"
                  ? "Your application was not accepted."
                  : "Your application is currently being reviewed."}
          </p>

          {applicantState === "not-applied" ? (
            <Link
              href="/apply"
              className="mt-4 inline-block rounded-[8px] bg-[#00B6CE] px-5 py-2.5 text-[13px] font-semibold text-white"
            >
              Apply Now
            </Link>
          ) : applicantState === "accepted" ? (
            <Link
              href="/applicant/payments"
              className="mt-4 inline-block rounded-[8px] bg-[#00B6CE] px-5 py-2.5 text-[13px] font-semibold text-white"
            >
              Proceed to Payment
            </Link>
          ) : (
            <Link
              href="/applicant/application-status"
              className="mt-4 inline-block text-[13px] font-semibold text-[#00B6CE]"
            >
              View application status
            </Link>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            <CourseProgress {...dashboardData.courseProgress} />
            <AssignedMentor {...dashboardData.mentor} />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            <CohortSummary {...dashboardData.cohortSummary} />
            <AssignedTeam {...dashboardData.team} />
            <UpcomingDeadlines deadlines={dashboardData.deadlines} />
          </div>

          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
            <CurrentProject {...dashboardData.currentProject} />
            <Notifications notifications={notifications} />
          </div>
        </>
      )}
    </>
  );
}
