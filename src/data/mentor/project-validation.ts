import { ProjectValidation } from "@/src/types/mentor/project-validation";

export const projectValidationData: ProjectValidation = {
  // id: "wireframe-submission-1",
  id: "review-1",
  title: "Wireframe Submission",
  submittedBy: "Amara Okafor",
  submittedAt: "Jul 14, 2026",

  // Replace this with the actual project/submission image
  imageUrl: "/images/project-validation/wireframe-submission.png",

  criteria: [
    {
      id: "brief-requirements",
      label: "Meets brief requirements",
      checked: true,
    },
    {
      id: "information-hierarchy",
      label: "Clear information hierarchy",
      checked: true,
    },
    {
      id: "component-usage",
      label: "Consistent component usage",
      checked: true,
    },
  ],

  decision: "pending",
};
