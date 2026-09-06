"use client";

import AdminDetailPage from "../DetailPage/AdminDetailPage";

import { Project } from "./projects.types";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const isAtRisk = project.review === "At risk";
  const isApproved = project.review === "Approved";

  return (
    <AdminDetailPage
      /* =====================================================
         HEADER
      ====================================================== */
      header={{
        backHref: "/admin/projects",
        backLabel: "Back to Projects",

        title: project.project,

        avatar: getInitials(project.project),

        name: project.project,

        subtitle: `${project.employer} · ${project.cohort} · ${project.team}`,

        status: isAtRisk ? "At risk" : isApproved ? "Approved" : "Active",

        statusClassName: isAtRisk
          ? "bg-[#FCE9E9] text-[#DC2727]"
          : isApproved
            ? "bg-[#E1F3EC] text-[#008F58]"
            : "bg-[#E1F3EC] text-[#008F58]",

        actions: [
          {
            label: "Edit project",
            variant: "primary",
            onClick: () => {
              console.log("Edit project:", project.project);
            },
          },

          {
            label: "Assign mentor",
            variant: "light",
            onClick: () => {
              console.log("Assign mentor:", project.project);
            },
          },

          {
            label: "Mark complete",
            variant: "light",
            onClick: () => {
              console.log("Mark complete:", project.project);
            },
          },
        ],
      }}
      /* =====================================================
         STATS
      ====================================================== */

      stats={[
        {
          value: project.progress,
          label: "Overall progress",
        },

        {
          value: "5 / 7",
          label: "Milestones complete",
        },

        {
          value: project.deadline.replace(" 2026", ""),
          label: "Final deadline",
        },

        {
          value: isAtRisk ? "At risk" : "On track",
          label: "Project health",

          valueClassName: isAtRisk ? "text-[#DC2727]" : "text-[#008F58]",
        },
      ]}
      /* =====================================================
         DETAILS
      ====================================================== */

      sections={[
        {
          title: "Project Brief & Deliverables",

          items: [
            {
              value: project.description ?? "Project description not provided.",
            },

            ...(project.deliverables ?? []).map((deliverable) => ({
              value: deliverable,
            })),

            {
              value: `Success metric: ${
                project.successMetric ?? "Not provided"
              }`,
            },

            {
              value: `Employer owner: ${
                project.employerOwner ?? "Not provided"
              }`,

              highlight: true,
            },
          ],
        },

        {
          title: "Team & Milestones",

          items: [
            {
              value: `Mentor: ${project.mentor}`,
            },

            {
              value: `${project.team} · ${
                project.teamParticipants ?? 0
              } participants`,
            },

            {
              value: `Current milestone: ${
                project.currentMilestone ?? "Not provided"
              }`,
            },

            {
              value: `Next review: ${project.nextReview ?? "Not scheduled"}`,
            },

            {
              value: `Files: ${project.files?.join(" · ") ?? "None"}`,

              highlight: true,
            },
          ],
        },
      ]}
      /* =====================================================
         ACTIVITY
      ====================================================== */

      activities={project.activities ?? []}
      auditLabel="View full audit log"
    />
  );
}

/* =========================================================
   INITIALS
========================================================= */

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
