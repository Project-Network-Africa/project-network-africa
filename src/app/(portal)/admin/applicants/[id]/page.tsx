// import ApplicantDetails from "@/src/components/portal/admin/(applicant)/applicant-details";
// import { applicants } from "@/src/components/portal/admin/(applicant)/applicant-data";

// interface ApplicantDetailsPageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// export default async function ApplicantDetailsPage({
//   params,
// }: ApplicantDetailsPageProps) {
//   const { id } = await params;

//   const applicant = applicants.find((item) => item.id === id);

//   if (!applicant) {
//     return (
//       <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
//         <div className="mx-auto w-full max-w-[1280px] p-5">
//           <div className="rounded-[14px] border border-[#DDE1E5] bg-white p-8">
//             <h1 className="text-xl font-bold text-[#1F1F25]">
//               Applicant not found
//             </h1>

//             <p className="mt-2 text-sm text-[#737379]">
//               We could not find this applicant.
//             </p>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   return <ApplicantDetails applicant={applicant} />;
// }
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Applicant } from "@/src/components/portal/admin/(applicant)/applicants.types";
import { getAdminApplicantById } from "@/src/services/applicants";
import ApplicantDetails from "@/src/components/portal/admin/(applicant)/applicant-details";

export default function ApplicantDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const [applicant, setApplicant] = useState<Applicant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplicant = async () => {
      try {
        const response = await getAdminApplicantById(id);

        console.log("ADMIN APPLICANT DETAILS:", response);

        const data = response.applicant;

        const mappedApplicant: Applicant = {
          id: data._id,
          name: data.userId?.email || "Applicant",
          email: data.userId?.email || "-",
          programme: data.program || "-",
          cohort: "-",
          stage:
            data.admissionStatus === "Pending"
              ? "Applied"
              : data.admissionStatus || "-",
          payment: "Pending",
          mentor: "Unassigned",
          applied: data.submittedAt
            ? new Date(data.submittedAt).toLocaleDateString()
            : "-",
          risk: "Low",
          action: "View",
          applicationScore: "-",
          assessmentScore: "-",
          location: "-",
          education: "-",
          experience: "-",
          preferredTrack: data.program || "-",
          documents: "-",
          submissionSummary: "-",
          responses: "-",
          assessmentSummary: "-",
          assignedMentor: "Unassigned",
          adminNote: "-",
          activities: [],
        };

        setApplicant(mappedApplicant);
      } catch (error) {
        console.error("FAILED TO GET APPLICANT DETAILS:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchApplicant();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-sm text-[#5D5D61]">
        Loading applicant...
      </div>
    );
  }

  if (!applicant) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-sm text-[#DC2727]">
        Applicant not found.
      </div>
    );
  }

  return <ApplicantDetails applicant={applicant} />;
}
