import { applicantNavItems } from "./applicant-nav.data";
import { dashboardData } from "./applicant-dashboard-data";

import DashboardLayout from "../../shared/DashboardLayout/DashboardLayout";
import WelcomeBanner from "./WelcomeBanner";
import CourseProgress from "./CourseProgress";
import AssignedMentor from "./AssignedMentor";
import CohortSummary from "./CohortSummary";
import AssignedTeam from "./AssignedTeam";
import UpcomingDeadlines from "./UpcomingDeadlines";
import CurrentProject from "./CurrentProject";
import Notifications from "./Notifications";
export default function ApplicantDashboard() {
  const {
    userInitials,
    notificationCount,
    welcome,
    courseProgress,
    mentor,
    cohortSummary,
    team,
    deadlines,
    currentProject,
    notifications,
  } = dashboardData;

  return (
    <DashboardLayout
      navItems={applicantNavItems}
      pageTitle="Dashboard"
      userInitials={userInitials}
      notificationCount={notificationCount}
    >
      <WelcomeBanner {...welcome} />

      <div className="flex gap-5">
        <CourseProgress {...courseProgress} />
        <AssignedMentor {...mentor} />
      </div>

      <div className="flex gap-5">
        <CohortSummary {...cohortSummary} />
        <AssignedTeam {...team} />
        <UpcomingDeadlines deadlines={deadlines} />
      </div>

      <div className="flex gap-5">
        <CurrentProject {...currentProject} />
        <Notifications notifications={notifications} />
      </div>
    </DashboardLayout>
  );
}
