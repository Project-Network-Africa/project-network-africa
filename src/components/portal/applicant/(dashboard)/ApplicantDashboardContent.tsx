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
import {
  getMyApplicantProfile,
  getMyCohortApplication,
} from "@/src/services/applicants";

type ApplicantState = "not-applied" | "pending" | "rejected" | "admitted";

export default function ApplicantDashboardContent() {
  const [name, setName] = useState("");
  const [applicantState, setApplicantState] =
    useState<ApplicantState>("not-applied");

  const { welcome, notifications } = dashboardData;

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const userResponse = await checkAuth();

        setName(userResponse.user.firstName);

        let applicantResponse;

        try {
          applicantResponse = await getMyApplicantProfile();
        } catch (error) {
          console.log("NO APPLICANT PROFILE YET:", error);
          setApplicantState("not-applied");
          return;
        }

        const applicant = applicantResponse.applicant;

        if (!applicant) {
          setApplicantState("not-applied");
          return;
        }

        if (applicant.admissionStatus === "Admitted") {
          setApplicantState("admitted");
          return;
        }

        try {
          const applicationResponse = await getMyCohortApplication();
          const application = applicationResponse.application;
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
      } catch (error) {
        console.error("FAILED TO GET DASHBOARD DATA:", error);
      }
    };

    getDashboardData();
  }, []);

  const progressSummary =
    applicantState === "not-applied"
      ? "Start your journey with PN Africa by applying to one of our programmes."
      : applicantState === "pending"
        ? "Your application is currently under review. We'll let you know once there's an update."
        : applicantState === "rejected"
          ? "Your application was not accepted. You can view your application status for more details."
          : "You're 68% through the Product Design Bootcamp — Cohort 6";

  const isAdmitted = applicantState === "admitted";
  const hasApplied =
    applicantState === "pending" || applicantState === "rejected";

  return (
    <>
      <WelcomeBanner
        name={name}
        progressSummary={progressSummary}
        buttonText={
          applicantState === "not-applied"
            ? "Apply Now"
            : isAdmitted
              ? welcome.buttonText
              : undefined
        }
        buttonHref={
          applicantState === "not-applied"
            ? "/apply"
            : isAdmitted
              ? welcome.buttonHref
              : undefined
        }
      />

      {!isAdmitted ? (
        <div className="rounded-[12px] bg-white p-6">
          <h2 className="text-[16px] font-semibold text-[#1F1F25]">
            {hasApplied ? "Application Status" : "Get Started"}
          </h2>

          <p className="mt-2 text-[13px] text-[#5D5D61]">
            {applicantState === "not-applied"
              ? "You haven't submitted an application yet. Apply to a programme to get started."
              : applicantState === "rejected"
                ? "Your application was not accepted."
                : "Your application is currently being reviewed."}
          </p>

          {applicantState === "not-applied" ? (
            <a
              href="/apply"
              className="mt-4 inline-block rounded-[8px] bg-[#00B6CE] px-5 py-2.5 text-[13px] font-semibold text-white"
            >
              Apply Now
            </a>
          ) : (
            <a
              href="/applicant/application-status"
              className="mt-4 inline-block text-[13px] font-semibold text-[#00B6CE]"
            >
              View application status
            </a>
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
