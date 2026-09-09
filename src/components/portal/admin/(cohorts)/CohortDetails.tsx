"use client";

import AdminDetailPage from "../DetailPage/AdminDetailPage";
import { Cohort } from "./cohorts.types";

interface CohortDetailsProps {
  cohort: Cohort;
}

export default function CohortDetails({ cohort }: CohortDetailsProps) {
  const isDraft = cohort.status === "Draft";

  const initials = cohort.cohort.replace("Cohort ", "C").trim();

  return (
    <AdminDetailPage
      header={{
        backHref: "/admin/cohorts",
        backLabel: "Back to Cohorts",
        title: `${cohort.cohort} — ${cohort.programme}`,
        avatar: initials,
        name: `${cohort.cohort} — ${cohort.programme}`,
        subtitle: `${cohort.start} – ${cohort.end} · Programme · Status: ${cohort.status}`,
        status: cohort.status,
        statusClassName: isDraft
          ? "bg-[#FFF0E5] text-[#F26B21]"
          : cohort.status === "Active"
            ? "bg-[#E1F3EC] text-[#008F58]"
            : "bg-[#EAF9FC] text-[#00B6CE]",
        actions: [
          {
            label: "Edit cohort",
            variant: "primary",
            onClick: () => {
              console.log("Edit cohort:", cohort.id);
            },
          },
          {
            label: "Send announcement",
            variant: "light",
            onClick: () => {
              console.log("Send announcement:", cohort.id);
            },
          },
          {
            label: cohort.isOpen ? "Close cohort" : "Open cohort",
            variant: "light",
            onClick: () => {
              console.log("Toggle cohort:", cohort.id);
            },
          },
        ],
      }}
      stats={[
        {
          value: `${cohort.enrolled} / ${cohort.capacity}`,
          label: "Learners enrolled",
        },
        {
          value: String(cohort.mentors?.length ?? 0),
          label: "Mentors assigned",
        },
        {
          value: String(cohort.applicants?.length ?? 0),
          label: "Applications",
        },
        {
          value: cohort.status,
          label: "Cohort status",
        },
      ]}
      sections={[
        {
          title: "Cohort Configuration",
          items: [
            {
              value: `Programme: ${cohort.programme}`,
            },
            {
              value: `Start date: ${cohort.start}`,
            },
            {
              value: `End date: ${cohort.end}`,
            },
            {
              value: `Capacity: ${cohort.capacity} learners`,
            },
            {
              value: `Applications: ${cohort.applicants?.length ?? 0}`,
            },
          ],
        },
        {
          title: "Cohort Details",
          items: [
            {
              value: `Status: ${cohort.status}`,
            },
            {
              value: `Open for applications: ${cohort.isOpen ? "Yes" : "No"}`,
            },
            {
              value: cohort.mentors?.length
                ? `Mentors assigned: ${cohort.mentors.length}`
                : "No mentors assigned",
            },
            {
              value: cohort.description || "No description provided",
              highlight: true,
            },
          ],
        },
      ]}
      activities={cohort.activities ?? []}
      auditLabel="View full audit log"
    />
  );
}
