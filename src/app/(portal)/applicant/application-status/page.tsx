// "use client";

// import { useEffect, useState } from "react";

// import ApplicationTimeline from "@/src/components/portal/applicant/(application-status)/ApplicationTimeline";
// import NextSteps from "@/src/components/portal/applicant/(application-status)/NextSteps";

// import {
//   getMyApplicantProfile,
//   getMyCohortApplication,
// } from "@/src/services/applicants";
// import LoadingState from "@/src/components/ui/Loading/LoadingState";

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

// interface ApplicantResponse {
//   success?: boolean;
//   message?: string;
//   applicant?: {
//     admissionStatus?: "Not Applied" | "Pending" | "Admitted" | "Rejected";
//   };
// }

// export default function ApplicationStatusPage() {
//   const [application, setApplication] = useState<CohortApplication | null>(
//     null,
//   );

//   const [admissionStatus, setAdmissionStatus] = useState<
//     "Not Applied" | "Pending" | "Admitted" | "Rejected"
//   >("Pending");

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchApplicationStatus = async () => {
//       try {
//         const [applicationResponse, applicantResponse] = await Promise.all([
//           getMyCohortApplication() as Promise<ApplicationResponse>,
//           getMyApplicantProfile() as Promise<ApplicantResponse>,
//         ]);

//         console.log("MY APPLICATION:", applicationResponse);
//         console.log("MY APPLICANT PROFILE:", applicantResponse);

//         setApplication(applicationResponse.application ?? null);

//         setAdmissionStatus(
//           applicantResponse.applicant?.admissionStatus || "Pending",
//         );
//       } catch (error) {
//         console.error("FAILED TO GET APPLICATION STATUS:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplicationStatus();
//   }, []);

//   if (loading) {
//     return (
//       <main className="flex min-h-[500px] items-center justify-center">
//         <LoadingState />
//       </main>
//     );
//   }

//   if (!application) {
//     return <div>No application found.</div>;
//   }

//   // =========================
//   // APPLICATION STATES
//   // =========================

//   const isPending = admissionStatus === "Pending";

//   const isRejected = admissionStatus === "Rejected";

//   // For now, the backend's "Admitted" status means
//   // the admin has accepted the applicant.
//   const isAccepted = admissionStatus === "Admitted";

//   // Payment is not yet connected to the backend.
//   // Therefore it must remain incomplete until we have
//   // a real payment status.
//   const isPaid = false;

//   // Admission happens AFTER payment.
//   const isAdmitted = isPaid;

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
//             completed: isAccepted || isRejected,
//           },
//           {
//             title: "Admission Decision",
//             completed: isAccepted || isRejected,
//           },
//           {
//             title: "Payment",
//             completed: isPaid,
//           },
//           {
//             title: "Admission",
//             completed: isAdmitted,
//           },
//         ]}
//       />

//       {isRejected ? (
//         <NextSteps
//           description="Your application was not accepted. You can review your application status for more details."
//           href="/applicant/application-status"
//         />
//       ) : isAccepted && !isPaid ? (
//         <NextSteps
//           description="Your application has been accepted. Complete your payment to proceed with admission."
//           href="/applicant/payment"
//         />
//       ) : isAdmitted ? (
//         <NextSteps
//           description="Your payment has been confirmed and you are now admitted. Complete your profile to continue."
//           href="/applicant/profile/edit"
//         />
//       ) : (
//         <NextSteps
//           description="Your application is currently being reviewed. We'll let you know once there's an update."
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

import LoadingState from "@/src/components/ui/Loading/LoadingState";

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
    admissionStatus?:
      | "Not Applied"
      | "Pending"
      | "Accepted"
      | "Rejected"
      | "Admitted";
  };
}

type AdmissionStatus =
  | "Not Applied"
  | "Pending"
  | "Accepted"
  | "Rejected"
  | "Admitted";

export default function ApplicationStatusPage() {
  const [application, setApplication] = useState<CohortApplication | null>(
    null,
  );

  const [admissionStatus, setAdmissionStatus] =
    useState<AdmissionStatus>("Pending");

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
    return (
      <main className="flex min-h-[500px] items-center justify-center">
        <LoadingState />
      </main>
    );
  }

  if (!application) {
    return <div>No application found.</div>;
  }

  // const isPending = admissionStatus === "Pending";

  const isRejected = admissionStatus === "Rejected";

  const isAccepted = admissionStatus === "Accepted";

  const isPaid = false;

  const isAdmitted = admissionStatus === "Admitted";

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
            completed: isAccepted || isRejected || isAdmitted,
          },

          {
            title: "Admission Decision",
            completed: isAccepted || isRejected || isAdmitted,
          },

          {
            title: "Payment",
            completed: isPaid || isAdmitted,
          },

          {
            title: "Admission",
            completed: isAdmitted,
          },
        ]}
      />

      {isRejected ? (
        <NextSteps
          description="Your application was not accepted. You can review your application status for more details."
          href="/applicant/application-status"
        />
      ) : isAccepted && !isPaid ? (
        <NextSteps
          description="Congratulations! Your application has been accepted. Complete your payment to secure your place."
          href="/applicant/payments"
        />
      ) : isAdmitted ? (
        <NextSteps
          description="Congratulations! Your payment has been confirmed and you are now admitted. You can proceed with your programme."
          href="/applicant/dashboard"
        />
      ) : (
        <NextSteps
          description="Your application is currently being reviewed. We'll let you know once there's an update."
          href="/applicant/application-status"
        />
      )}
    </div>
  );
}
