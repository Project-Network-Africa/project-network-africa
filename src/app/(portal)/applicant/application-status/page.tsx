// import ApplicationTimeline from "@/src/components/portal/applicant/(application-status)/ApplicationTimeline";
// import NextSteps from "@/src/components/portal/applicant/(application-status)/NextSteps";

// const applicationTimeline = [
//   {
//     title: "Application Submitted",
//     date: "Jul 2, 2026",
//     completed: true,
//   },
//   {
//     title: "Application Review",
//     date: "Jul 5, 2026",
//     completed: true,
//   },
//   {
//     title: "Interview Scheduled",
//     date: "Jul 10, 2026",
//     completed: true,
//   },
//   {
//     title: "Cohort Match",
//     date: "Jul 14, 2026",
//     completed: true,
//   },
//   {
//     title: "Onboarding",
//     completed: false,
//   },
// ];

// export default function ApplicationStatusPage() {
//   return (
//     <div className="flex w-full flex-col gap-5">
//       <ApplicationTimeline items={applicationTimeline} />

//       <NextSteps
//         description="Complete your onboarding checklist to activate your dashboard access."
//         href="/applicant/onboarding-checklist"
//       />
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import ApplicationTimeline from "@/src/components/portal/applicant/(application-status)/ApplicationTimeline";
import NextSteps from "@/src/components/portal/applicant/(application-status)/NextSteps";
import { getMyCohortApplication } from "@/src/services/applicants";
interface CohortApplication {
  submittedAt?: string;
  status?: string;
}
export default function ApplicationStatusPage() {
  const [application, setApplication] = useState<CohortApplication | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const data = await getMyCohortApplication();
        console.log("MY APPLICATION:", data);
        setApplication(data);
      } catch (error) {
        console.error("FAILED TO GET APPLICATION:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, []);

  if (loading) {
    return <div>Loading application status...</div>;
  }

  if (!application) {
    return <div>No application found.</div>;
  }

  return (
    <div className="flex w-full flex-col gap-5">
      <ApplicationTimeline
        items={[
          {
            title: "Application Submitted",
            date: application.submittedAt
              ? new Date(application.submittedAt).toLocaleDateString()
              : "",
            completed: true,
          },
          {
            title: "Application Review",
            completed: application.status !== "Pending",
          },
          {
            title: "Cohort Match",
            completed: false,
          },
          {
            title: "Payment",
            completed: false,
          },
          {
            title: "Admission",
            completed: false,
          },
        ]}
      />

      <NextSteps
        description="Your application is currently being reviewed."
        href="/applicant/application-status"
      />
    </div>
  );
}
