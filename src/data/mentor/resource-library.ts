import { ResourceSection } from "@/src/types/mentor/resource-library";

export const resourceSections: ResourceSection[] = [
  {
    id: "review-rubrics",
    title: "Review Rubrics",
    resources: [
      {
        id: "wireframe-review-rubric",
        title: "Wireframe Review Rubric",
        downloadUrl: "#",
      },
      {
        id: "capstone-grading-rubric",
        title: "Capstone Grading Rubric",
        downloadUrl: "#",
      },
      {
        id: "code-review-checklist",
        title: "Code Review Checklist",
        downloadUrl: "#",
      },
    ],
  },

  {
    id: "feedback-templates",
    title: "Feedback Templates",
    resources: [
      {
        id: "constructive-feedback-framework",
        title: "Constructive Feedback Framework",
        downloadUrl: "#",
      },
      {
        id: "session-notes-template",
        title: "1:1 Session Notes Template",
        downloadUrl: "#",
      },
    ],
  },

  {
    id: "mentoring-guides",
    title: "Mentoring Guides",
    resources: [
      {
        id: "supporting-struggling-mentee",
        title: "Supporting a Struggling Mentee",
        downloadUrl: "#",
      },
      {
        id: "effective-kickoff-call",
        title: "Running an Effective Kickoff Call",
        downloadUrl: "#",
      },
    ],
  },
];
