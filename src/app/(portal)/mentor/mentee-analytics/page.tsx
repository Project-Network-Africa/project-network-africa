import MenteeProgressCard from "@/src/components/portal/mentor/(mentee-analytics)/MenteeProgressCard";
import StatCard from "@/src/components/portal/mentor/(mentee-analytics)/StatCard";
import {
  mentorAnalyticsStats,
  menteeProgressOverTime,
} from "@/src/data/mentor/analytics";

// TODO: swap for real session data once auth is wired in

export default function MentorAnalyticsPage() {
  return (
    <main className="min-h-screen bg-white  pb-10 ">
      <div className=" max-w-[1120px]">
        <div className="mt-5 grid grid-cols-4 gap-4">
          {mentorAnalyticsStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        <div className="mt-5">
          <MenteeProgressCard entries={menteeProgressOverTime} />
        </div>
      </div>
    </main>
  );
}
