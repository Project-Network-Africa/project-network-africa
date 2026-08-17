import MentorCard from "@/src/components/portal/applicant/(mentorship)/MentorCard";
import MentorNotes from "@/src/components/portal/applicant/(mentorship)/MentorNotes";
import SessionHistory from "@/src/components/portal/applicant/(mentorship)/SessionHistory";

const mentor = {
  initials: "AO",
  name: "Amara Okafor",
  role: "Senior Product Designer",
  avatarBg: "#1F1F25",
};

const sessions = [
  {
    type: "Weekly 1:1",
    date: "Jul 9, 2026 · Completed",
  },
  {
    type: "Portfolio Review",
    date: "Jul 2, 2026 · Completed",
  },
  {
    type: "Weekly 1:1",
    date: "Jun 25, 2026 · Completed",
  },
];

const mentorNote =
  "Focus on strengthening your case study writing before the capstone review.";

export default function MentorshipPage() {
  return (
    <div className="flex w-full flex-col gap-5">
      <MentorCard {...mentor} />

      <SessionHistory sessions={sessions} />

      <MentorNotes note={mentorNote} />
    </div>
  );
}
