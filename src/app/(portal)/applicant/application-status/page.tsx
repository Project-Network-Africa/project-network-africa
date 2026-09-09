// "use client";

// import { useEffect, useState } from "react";
// import ApplicationTimeline from "@/src/components/portal/applicant/(application-status)/ApplicationTimeline";
// import NextSteps from "@/src/components/portal/applicant/(application-status)/NextSteps";
// import { getMyCohortApplication } from "@/src/services/applicants";

// interface CohortApplication {
//   applicationStatus?: string;
//   createdAt?: string;
//   cohort?: string;
//   program?: string;
// }
// interface ApplicationResponse {
//   success?: boolean;
//   message?: string;
//   application?: CohortApplication;
// }

// export default function ApplicationStatusPage() {
//   const [application, setApplication] = useState<CohortApplication | null>(
//     null,
//   );
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchApplication = async () => {
//       try {
//         const response: ApplicationResponse = await getMyCohortApplication();

//         console.log("MY APPLICATION:", response);

//         setApplication(response.application ?? null);
//       } catch (error) {
//         console.error("FAILED TO GET APPLICATION:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplication();
//   }, []);

//   if (loading) {
//     return <div>Loading application status...</div>;
//   }

//   if (!application) {
//     return <div>No application found.</div>;
//   }

//   // const isReviewed =
//   //   application.status === "Accepted" || application.status === "Rejected";

//   // const isAdmitted = application.admissionStatus === "Admitted";

//   return (
//     <div className="flex w-full flex-col gap-5">
//       <ApplicationTimeline
//         items={[
//           {
//             title: "Application Submitted",
//             date: application.createdAt
//               ? new Date(application.createdAt).toLocaleDateString()
//               : "",
//             completed: true,
//           },
//           {
//             title: "Application Review",
//             completed:
//               application.applicationStatus === "Accepted" ||
//               application.applicationStatus === "Rejected",
//           },
//           {
//             title: "Cohort Match",
//             completed: false,
//           },
//           {
//             title: "Payment",
//             completed: false,
//           },
//           {
//             title: "Admission",
//             completed: false,
//           },
//         ]}
//       />

//       {application.applicationStatus === "Accepted" ? (
//         <NextSteps
//           description="Your application has been accepted. Complete your onboarding checklist."
//           href="/applicant/onboarding-checklist"
//         />
//       ) : (
//         <NextSteps
//           description={
//             application.applicationStatus === "Rejected"
//               ? "Your application was not accepted."
//               : "Your application is currently being reviewed."
//           }
//           href="/applicant/application-status"
//         />
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import ApplicationTimeline from "@/src/components/portal/applicant/(application-status)/ApplicationTimeline";
import NextSteps from "@/src/components/portal/applicant/(application-status)/NextSteps";
import {
  getMyApplicantProfile,
  getMyCohortApplication,
} from "@/src/services/applicants";

interface CohortApplication {
  applicationStatus?: string;
  createdAt?: string;
  cohort?: string;
  program?: string;
}

interface ApplicationResponse {
  success?: boolean;
  message?: string;
  application?: CohortApplication;
}

interface ApplicantResponse {
  success?: boolean;
  message?: string;
  applicant?: {
    admissionStatus?: "Not Applied" | "Pending" | "Admitted" | "Rejected";
  };
}

export default function ApplicationStatusPage() {
  const [application, setApplication] = useState<CohortApplication | null>(
    null,
  );
  const [admissionStatus, setAdmissionStatus] = useState("Pending");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplicationStatus = async () => {
      try {
        const [applicationResponse, applicantResponse] = await Promise.all([
          getMyCohortApplication() as Promise<ApplicationResponse>,
          getMyApplicantProfile() as Promise<ApplicantResponse>,
        ]);

        console.log("MY APPLICATION:", applicationResponse);
        console.log("MY APPLICANT PROFILE:", applicantResponse);

        setApplication(applicationResponse.application ?? null);

        setAdmissionStatus(
          applicantResponse.applicant?.admissionStatus || "Pending",
        );
      } catch (error) {
        console.error("FAILED TO GET APPLICATION STATUS:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicationStatus();
  }, []);

  if (loading) {
    return <div>Loading application status...</div>;
  }

  if (!application) {
    return <div>No application found.</div>;
  }

  const isAdmitted = admissionStatus === "Admitted";
  const isRejected = admissionStatus === "Rejected";
  const isPending = admissionStatus === "Pending";

  return (
    <div className="flex w-full flex-col gap-5">
      <ApplicationTimeline
        items={[
          {
            title: "Application Submitted",
            date: application.createdAt
              ? new Date(application.createdAt).toLocaleDateString()
              : "",
            completed: true,
          },
          {
            title: "Application Review",
            completed: !isPending,
          },
          {
            title: "Cohort Match",
            completed: isAdmitted,
          },
          {
            title: "Payment",
            completed: false,
          },
          {
            title: "Admission",
            completed: isAdmitted,
          },
        ]}
      />

      {isAdmitted ? (
        <NextSteps
          description="Your application has been accepted. Complete your onboarding checklist."
          href="/applicant/onboarding-checklist"
        />
      ) : isRejected ? (
        <NextSteps
          description="Your application was not accepted."
          href="/applicant/application-status"
        />
      ) : (
        <NextSteps
          description="Your application is currently being reviewed."
          href="/applicant/application-status"
        />
      )}
    </div>
  );
}
