// import { dashboardData } from "./applicant-dashboard.data";

import WelcomeBanner from "./WelcomeBanner";
import CourseProgress from "./CourseProgress";
import AssignedMentor from "./AssignedMentor";
import CohortSummary from "./CohortSummary";
import AssignedTeam from "./AssignedTeam";
import UpcomingDeadlines from "./UpcomingDeadlines";
import CurrentProject from "./CurrentProject";
import Notifications from "./Notifications";
import { dashboardData } from "./applicant-dashboard-data";

export default function ApplicantDashboardContent() {
  const {
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
    <>
      <WelcomeBanner {...welcome} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
        <CourseProgress {...courseProgress} />
        <AssignedMentor {...mentor} />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <CohortSummary {...cohortSummary} />
        <AssignedTeam {...team} />
        <UpcomingDeadlines deadlines={deadlines} />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <CurrentProject {...currentProject} />
        <Notifications notifications={notifications} />
      </div>
    </>
  );
}
