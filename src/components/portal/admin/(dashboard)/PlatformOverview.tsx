import DashboardHeader from "./DashboardHeader";
import StatCards from "./StatCards";
import ApplicationFunnel from "./ApplicationFunnel";
import UrgentActions from "./UrgentActions";
import CohortHealth from "./CohortHealth";
import MentorCapacity from "./MentorCapacity";
import EmployerActivity from "./EmployerActivity";
import PaymentsSummary from "./PaymentsSummary";
import OperationalAlerts from "./OperationalAlerts";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";
import { stats } from "./dashboard-data";
export default function PlatformOverview() {
  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] text-[#1F1F25]">
      <div className="mx-auto w-full max-w-[1440px]   ">
        {/* Header */}
        <DashboardHeader />

        {/* KPI Cards */}
        <StatCards stats={stats} />

        {/* Application Funnel + Urgent Actions */}
        <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)]">
          <ApplicationFunnel />
          <UrgentActions />
        </section>

        {/* Cohort / Mentor / Employer */}
        <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-[minmax(0,1.5fr)_minmax(220px,0.75fr)_minmax(220px,0.75fr)]">
          <CohortHealth />
          <MentorCapacity />
          <EmployerActivity />
        </section>

        {/* Payments + Alerts */}
        <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <PaymentsSummary />
          <OperationalAlerts />
        </section>

        {/* Activity + Quick Actions */}
        <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(280px,0.9fr)] font-body">
          <RecentActivity />
          <QuickActions />
        </section>
      </div>
    </main>
  );
}
