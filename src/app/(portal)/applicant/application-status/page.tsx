import ApplicationTimeline from "@/src/components/portal/applicant/(application-status)/ApplicationTimeline";
import NextSteps from "@/src/components/portal/applicant/(application-status)/NextSteps";

const applicationTimeline = [
  {
    title: "Application Submitted",
    date: "Jul 2, 2026",
    completed: true,
  },
  {
    title: "Application Review",
    date: "Jul 5, 2026",
    completed: true,
  },
  {
    title: "Interview Scheduled",
    date: "Jul 10, 2026",
    completed: true,
  },
  {
    title: "Cohort Match",
    date: "Jul 14, 2026",
    completed: true,
  },
  {
    title: "Onboarding",
    completed: false,
  },
];

export default function ApplicationStatusPage() {
  return (
    <div className="flex w-full flex-col gap-5">
      <ApplicationTimeline items={applicationTimeline} />

      <NextSteps
        description="Complete your onboarding checklist to activate your dashboard access."
        href="/applicant/onboarding-checklist"
      />
    </div>
  );
}
