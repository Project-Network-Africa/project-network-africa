"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Applicant } from "@/src/components/portal/admin/(applicant)/applicants.types";
import { getAdminApplicantById } from "@/src/services/applicants";
import ApplicantDetails from "@/src/components/portal/admin/(applicant)/applicant-details";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

export default function ApplicantDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const [applicant, setApplicant] = useState<Applicant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplicant = async () => {
      try {
        const response = await getAdminApplicantById(id);
        const data = response.applicant;

        console.log("APPLICANT USER DATA:", data.userId);
        const mappedApplicant: Applicant = {
          id: data._id,

          name:
            `${data.userId?.firstName || ""} ${data.userId?.lastName || ""}`.trim() ||
            data.userId?.email ||
            "Applicant",

          email: data.userId?.email || "-",

          phone: data.phone || "-",

          country: data.country || "-",

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

          location: data.country || "-",

          education: "-",

          experience: "-",

          preferredTrack: data.program || "-",

          documents: "-",

          submissionSummary: data.bio || "-",

          responses: "-",

          assessmentSummary: "-",

          assignedMentor: "Unassigned",

          adminNote: "-",

          activities: [],

          bio: data.bio || "-",

          skills: data.skills || [],

          portfolioUrl: data.portfolioUrl || "",

          linkedInUrl: data.linkedInUrl || "",

          submittedAt: data.submittedAt || "",

          createdAt: data.createdAt || "",

          updatedAt: data.updatedAt || "",
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
      <main className="flex min-h-[500px] items-center justify-center">
        <LoadingState />
      </main>
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
