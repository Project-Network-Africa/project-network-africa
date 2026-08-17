import { mentorDashboardData } from "@/src/data/mentor/dashboard";
import MentorStats from "./MentorStats";
import AssignedMentees from "./AssignedMentees";
import MentorCalendar from "./MentorCalendar";
import PendingReviews from "./PendingReviews";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";

export default function MentorDashboard() {
  const { stats, mentees, pendingReviews, recentActivity } =
    mentorDashboardData;

  return (
    <div className="space-y-4">
      <MentorStats stats={stats} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_0.9fr]">
        <AssignedMentees mentees={mentees} />
        <MentorCalendar />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_1.1fr_0.55fr]">
        <PendingReviews reviews={pendingReviews} />

        <RecentActivity activities={recentActivity} />

        <QuickActions />
      </div>
    </div>
  );
}
