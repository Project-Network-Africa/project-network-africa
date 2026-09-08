"use client";

import { useEffect, useState } from "react";

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
import { getMyCohortApplication } from "@/src/services/applicants";

export default function ApplicantDashboardContent() {
  const [name, setName] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("");
  const [progressSummary, setProgressSummary] = useState(
    "Your application is currently being reviewed.",
  );

  const { welcome, notifications } = dashboardData;

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const [userResponse, applicationResponse] = await Promise.all([
          checkAuth(),
          getMyCohortApplication(),
        ]);

        const application = applicationResponse.application;
        const status = application?.applicationStatus || "";

        setName(userResponse.user.firstName);
        setApplicationStatus(status);

        if (status === "Pending") {
          setProgressSummary(
            "Your application is currently under review. We'll let you know once there's an update.",
          );
        } else if (status === "Accepted") {
          setProgressSummary(
            "You're 68% through the Product Design Bootcamp — Cohort 6",
          );
        } else if (status === "Rejected") {
          setProgressSummary(
            "Your application was not accepted. You can view your application status for more details.",
          );
        }
      } catch (error) {
        console.error("FAILED TO GET DASHBOARD DATA:", error);
      }
    };

    getDashboardData();
  }, []);

  const isAccepted = applicationStatus === "Accepted";

  return (
    <>
      <WelcomeBanner
        name={name}
        progressSummary={progressSummary}
        buttonText={isAccepted ? welcome.buttonText : undefined}
        buttonHref={isAccepted ? welcome.buttonHref : undefined}
      />

      {!isAccepted ? (
        <div className="rounded-[12px] bg-white p-6">
          <h2 className="text-[16px] font-semibold text-[#1F1F25]">
            Application Status
          </h2>

          <p className="mt-2 text-[13px] text-[#5D5D61]">
            {applicationStatus === "Rejected"
              ? "Your application was not accepted."
              : "Your application is currently being reviewed."}
          </p>

          <a
            href="/applicant/application-status"
            className="mt-4 inline-block text-[13px] font-semibold text-[#00B6CE]"
          >
            View application status
          </a>
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
