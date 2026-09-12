"use client";

import { useEffect, useState } from "react";
import {
  getAdminCohortApplications,
  getAdminDashboard,
  getAdminPayments,
} from "@/src/services/admin";

import DashboardHeader from "./DashboardHeader";
import StatCards from "./StatCards";
import ApplicationFunnel from "./ApplicationFunnel";
import UrgentActions from "./UrgentActions";
import CohortHealth from "./CohortHealth";
import MentorCapacity from "./MentorCapacity";
// import EmployerActivity from "./EmployerActivity";
import PaymentsSummary from "./PaymentsSummary";
import OperationalAlerts from "./OperationalAlerts";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";

export default function PlatformOverview() {
  type AdminCohortApplication = {
    applicant?: {
      admissionStatus?: "Pending" | "Accepted" | "Rejected" | "Admitted";
    };
  };
  const [funnelData, setFunnelData] = useState({
    submitted: 0,
    pending: 0,
    admitted: 0,
    rejected: 0,
    paid: 0,
  });

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const applicationsResponse = await getAdminCohortApplications();
        const applications: AdminCohortApplication[] =
          applicationsResponse.applications ?? [];

        const paymentsResponse = await getAdminPayments();
        const payments = paymentsResponse.payments ?? [];

        const submitted = applications.length;

        const pending = applications.filter(
          (application) => application.applicant?.admissionStatus === "Pending",
        ).length;

        const admitted = applications.filter(
          (application) =>
            application.applicant?.admissionStatus === "Admitted",
        ).length;

        const rejected = applications.filter(
          (application) =>
            application.applicant?.admissionStatus === "Rejected",
        ).length;

        setFunnelData({
          submitted,
          pending,
          admitted,
          rejected,
          paid: payments.length,
        });
      } catch (error) {
        console.error("ADMIN FUNNEL DATA ERROR:", error);
      }
    };

    fetchAdminData();
  }, []);

  const [dashboard, setDashboard] = useState({
    totalApplicants: 0,
    totalCohortApplications: 0,
    totalCohorts: 0,
    totalMentors: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const fetchAdminDashboard = async () => {
      try {
        const response = await getAdminDashboard();
        setDashboard(response.dashboard);
      } catch (error) {
        console.error("ADMIN DASHBOARD ERROR:", error);
      }
    };

    fetchAdminDashboard();
  }, []);

  const stats = [
    {
      label: "Total Applicants",
      value: String(dashboard.totalApplicants),
    },
    {
      label: "Cohort Applications",
      value: String(dashboard.totalCohortApplications),
    },
    {
      label: "Total Cohorts",
      value: String(dashboard.totalCohorts),
    },
    {
      label: "Total Mentors",
      value: String(dashboard.totalMentors),
    },
    {
      label: "Total Users",
      value: String(dashboard.totalUsers),
    },
  ];
  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] text-[#1F1F25]">
      <div className="mx-auto w-full max-w-[1440px]">
        <DashboardHeader />

        <div className="mt-5 w-full">
          <StatCards stats={stats} columns={5} />
        </div>

        <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)]">
          <ApplicationFunnel funnelData={funnelData} />
          <UrgentActions />
        </section>

        {/* <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-[minmax(0,1.5fr)_minmax(220px,0.75fr)_minmax(220px,0.75fr)]">
          <CohortHealth />
          <MentorCapacity />
          <EmployerActivity />
        </section> */}
        <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-[minmax(0,1.5fr)_minmax(220px,0.75fr)]">
          <CohortHealth />
          <MentorCapacity />
        </section>

        <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <PaymentsSummary />
          <OperationalAlerts />
        </section>

        <section className="mt-4 grid grid-cols-1 gap-4 font-body xl:grid-cols-[minmax(0,2fr)_minmax(280px,0.9fr)]">
          <RecentActivity />
          <QuickActions />
        </section>
      </div>
    </main>
  );
}
