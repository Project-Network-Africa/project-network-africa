"use client";

import { AdminDetailPage } from "../DetailPage";
import { Mentor } from "./mentors.types";

interface MentorDetailsProps {
  mentor: Mentor;
}

export default function MentorDetails({ mentor }: MentorDetailsProps) {
  return (
    <AdminDetailPage
      header={{
        backHref: "/admin/mentors",
        backLabel: "Back to Mentors",

        title: mentor.name,

        avatar: mentor.name
          .split(" ")
          .map((name) => name[0])
          .join("")
          .slice(0, 2)
          .toUpperCase(),

        name: mentor.name,

        subtitle: `${mentor.expertise} · ${mentor.location} · Joined ${mentor.joined}`,

        status: mentor.verification,

        statusClassName:
          mentor.verification === "Verified"
            ? "bg-[#E1F3EC] text-[#008F58]"
            : "bg-[#FFF3E6] text-[#F26B21]",

        actions: [
          {
            label: "Message",
            variant: "primary",
          },
          {
            label: "Edit profile",
            variant: "light",
          },
          {
            label: "Suspend",
            variant: "light",
          },
        ],
      }}
      stats={[
        {
          value: mentor.rating,
          label: "Mentor rating",
        },
        {
          value: `${mentor.mentees} / ${mentor.capacity}`,
          label: "Mentee capacity",
        },
        {
          value: getCompletedSessions(mentor),
          label: "Sessions completed",
        },
        {
          value: String(mentor.overdue),
          label: "Overdue reviews",
        },
      ]}
      sections={[
        {
          title: "Professional Profile",

          items: [
            {
              value: `Expertise: ${mentor.expertise}`,
            },
            {
              value: mentor.yearsExperience,
            },
            {
              value: `Availability: ${mentor.availabilityHours}`,
            },
            {
              value: mentor.profileVerified,
            },
            {
              value: mentor.documents,
              highlight: true,
            },
          ],
        },

        {
          title: "Assignment & Performance",

          items: [
            {
              value: mentor.assignedCohort,
            },
            {
              value: mentor.feedbackTurnaround,
            },
            {
              value: mentor.attendance,
            },
            {
              value: mentor.completionRate,
            },
            {
              value: mentor.nextCapacityReview,
              highlight: true,
            },
          ],
        },
      ]}
      activities={mentor.activities}
    />
  );
}

/**
 * Temporary value until the backend provides
 * a sessionsCompleted field.
 */
function getCompletedSessions(mentor: Mentor): string {
  const sessionsByMentor: Record<number, string> = {
    1: "84",
    2: "76",
    3: "92",
    4: "38",
    5: "51",
    6: "80",
    7: "88",
    8: "45",
    9: "96",
    10: "67",
    11: "79",
    12: "42",
  };

  return sessionsByMentor[mentor.id] ?? "—";
}
