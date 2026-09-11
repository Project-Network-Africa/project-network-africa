"use client";

import { useRouter } from "next/navigation";

import { mentorDashboardData } from "@/src/data/mentor/dashboard";
import MentorStats from "./MentorStats";
import AssignedMentees from "./AssignedMentees";
import MentorCalendar from "./MentorCalendar";
import PendingReviews from "./PendingReviews";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";

interface MentorDashboardProps {
  mentorState: "not-applied" | "pending" | "rejected" | "accepted";
  userName: string;
}

export default function MentorDashboard({
  mentorState,
  userName,
}: MentorDashboardProps) {
  const router = useRouter();

  const { stats, mentees, pendingReviews, recentActivity } =
    mentorDashboardData;

  const getAction = () => {
    if (mentorState === "not-applied") {
      return {
        label: "Apply to Become a Mentor",
        onClick: () => router.push("/mentor/apply"),
      };
    }

    if (mentorState === "pending" || mentorState === "rejected") {
      return {
        label: "View Application",
        onClick: () => router.push("/mentor/application-status"),
      };
    }

    return {
      label: "View Cohort",
      onClick: () => router.push("/mentor/cohort"),
    };
  };

  const action = getAction();

  return (
    <div className="space-y-4">
      {/* ================= WELCOME CARD ================= */}
      <div className="flex flex-col gap-4 rounded-2xl border border-[#E8E8E8] bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-[#171719]">
            Welcome back, {userName} 👋
          </h1>

          <p className="mt-1 text-sm text-[#5D5D61]">
            Here&apos;s what&apos;s happening with your mentor journey.
          </p>
        </div>

        <button
          type="button"
          onClick={action.onClick}
          className="w-fit rounded-lg bg-[#171719] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          {action.label}
        </button>
      </div>

      {/* ================= NOT APPLIED ================= */}
      {mentorState === "not-applied" && (
        <div className="rounded-2xl bg-white p-6">
          <h2 className="text-xl font-semibold text-[#171719]">
            Become a Mentor
          </h2>

          <p className="mt-2 text-sm text-[#5D5D61]">
            Share your knowledge and experience with the PN Africa community.
            Submit your mentor application to get started.
          </p>
        </div>
      )}

      {/* ================= PENDING ================= */}
      {mentorState === "pending" && (
        <div className="rounded-2xl bg-white p-6">
          <h2 className="text-xl font-semibold text-[#171719]">
            Mentor Application Under Review
          </h2>

          <p className="mt-2 text-sm text-[#5D5D61]">
            Your mentor application has been submitted and is currently being
            reviewed by our team.
          </p>
        </div>
      )}

      {/* ================= REJECTED ================= */}
      {mentorState === "rejected" && (
        <div className="rounded-2xl bg-white p-6">
          <h2 className="text-xl font-semibold text-[#171719]">
            Mentor Application
          </h2>

          <p className="mt-2 text-sm text-[#5D5D61]">
            Your mentor application was not approved. You can view your
            application for more information.
          </p>
        </div>
      )}

      {/* ================= ACCEPTED ================= */}
      {mentorState === "accepted" && (
        <>
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
        </>
      )}
    </div>
  );
}
