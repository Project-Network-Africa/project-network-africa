import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import ProgressCard from "./ProgressCard";
import MentorCard from "./MentorCard";
import DashboardStatCard from "./DashboardStatCard";
import ProjectPreview from "./ProjectPreview";
import NotificationsCard from "./NotificationsCard";

export default function DashboardPreview() {
  return (
    // <div className="flex min-h-[300px] w-full bg-white sm:min-h-[340px] lg:min-h-[390px]">
    <div className="flex h-[166.59px]  w-full max-w-[342px] overflow-hidden rounded-[9.8px] bg-white shadow-[0px_13.72px_27.44px_0px_#1F1F2547] sm:h-[240px] sm:max-w-full sm:rounded-[14px] lg:h-[350px] lg:w-[698px] lg:max-w-none lg:rounded-[20px] lg:shadow-[0px_28px_56px_0px_#1F1F2547]">
      {/* <div className=""> */}
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main dashboard */}
      <main className="min-w-0 flex-1 bg-white p-2.5 sm:p-3.5 lg:p-5 lg:w-[518.4000244140625px] w-[210.26px]">
        <DashboardHeader />

        {/* Progress + Mentor */}
        <div className="mt-2 grid grid-cols-1 gap-2 sm:mt-3 lg:grid-cols-12 lg:gap-3">
          <div className="lg:col-span-8">
            <ProgressCard />
          </div>

          <div className="hidden lg:col-span-4 lg:block">
            <MentorCard />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-2 grid grid-cols-3 gap-2 lg:gap-3">
          <DashboardStatCard value="6" label="Courses Progress" />

          <DashboardStatCard value="4" label="Assigned Team" />

          <DashboardStatCard value="2" label="Upcoming Deadlines" />
        </div>

        {/* Project + Notifications */}
        <div className="mt-2 grid grid-cols-1 gap-2 lg:grid-cols-12 lg:gap-3">
          <div className="lg:col-span-8">
            <ProjectPreview />
          </div>

          <div className="hidden lg:col-span-4 lg:block">
            <NotificationsCard />
          </div>
        </div>
      </main>
      {/* </div> */}
    </div>
  );
}
