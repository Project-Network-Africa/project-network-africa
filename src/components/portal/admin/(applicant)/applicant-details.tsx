"use client";

import { useEffect, useState } from "react";

import { assignApplicantToCohort } from "@/src/services/applicants";

import AdminDetailPage from "../DetailPage/AdminDetailPage";

import { Applicant } from "./applicants.types";

import { updateAdminApplicantStatus } from "@/src/services/applicants";
import { getCohorts, CohortApiResponse } from "@/src/services/cohorts";
interface ApplicantDetailsProps {
  applicant: Applicant;
}

export default function ApplicantDetails({ applicant }: ApplicantDetailsProps) {
  const [status, setStatus] = useState(applicant.stage);
  const [updating, setUpdating] = useState(false);
  const [cohorts, setCohorts] = useState<CohortApiResponse[]>([]);
  const [selectedCohort, setSelectedCohort] = useState("");
  const [assigningCohort, setAssigningCohort] = useState(false);

  const initials = applicant.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleStatusUpdate = async (newStatus: "Admitted" | "Rejected") => {
    try {
      setUpdating(true);

      const response = await updateAdminApplicantStatus(
        applicant.id,
        newStatus,
      );

      console.log("STATUS UPDATE:", response);
      console.log("UPDATED APPLICANT:", response.applicant);

      setStatus(newStatus);
    } catch (error) {
      console.error("FAILED TO UPDATE APPLICANT STATUS:", error);
    } finally {
      setUpdating(false);
    }
  };

  useEffect(() => {
    const fetchCohorts = async () => {
      try {
        const response = await getCohorts();
        setCohorts(response.cohorts || []);
      } catch (error) {
        console.error("FAILED TO GET COHORTS:", error);
      }
    };

    fetchCohorts();
  }, []);

  const handleAssignCohort = async () => {
    if (!selectedCohort) return;

    try {
      setAssigningCohort(true);

      const response = await assignApplicantToCohort(
        applicant.id,
        selectedCohort,
      );

      console.log("COHORT ASSIGNMENT:", response);
    } catch (error) {
      console.error("FAILED TO ASSIGN COHORT:", error);
    } finally {
      setAssigningCohort(false);
    }
  };

  const stageClassName =
    status === "Onboarding" || status === "Matched" || status === "Admitted"
      ? "bg-[#E1F3EC] text-[#008F58]"
      : status === "Rejected"
        ? "bg-[#FDECEC] text-[#DC2727]"
        : "bg-[#EAF9FC] text-[#00B6CE]";

  const riskClassName =
    applicant.risk === "High"
      ? "text-[#DC2727]"
      : applicant.risk === "Medium"
        ? "text-[#F26B21]"
        : "text-[#008F58]";

  const paymentClassName =
    applicant.payment === "Paid"
      ? "text-[#008F58]"
      : applicant.payment === "Failed"
        ? "text-[#DC2727]"
        : "text-[#F26B21]";

  return (
    <AdminDetailPage
      header={{
        backHref: "/admin/applicants",
        backLabel: "Back to Applicants",
        title: applicant.name,
        avatar: initials,
        name: applicant.name,
        subtitle: `${applicant.email} · ${applicant.programme} · ${applicant.cohort}`,
        status,
        statusClassName: stageClassName,
        // actions: [
        //   {
        //     label: updating ? "Approving..." : "Approve",
        //     variant: "primary",
        //     onClick: () => handleStatusUpdate("Admitted"),
        //   },
        //   {
        //     label: updating ? "Rejecting..." : "Reject",
        //     variant: "danger",
        //     onClick: () => handleStatusUpdate("Rejected"),
        //   },
        //   {
        //     label: "Assign mentor",
        //     variant: "light",
        //   },
        // ],
        actions: [
          {
            label: updating ? "Approving..." : "Approve",
            variant: "primary",
            onClick: () => handleStatusUpdate("Admitted"),
          },
          {
            label: updating ? "Rejecting..." : "Reject",
            variant: "danger",
            onClick: () => handleStatusUpdate("Rejected"),
          },
          {
            label: "Assign mentor",
            variant: "light",
          },
        ],
      }}
      stats={[
        {
          value: applicant.applicationScore,
          label: "Application score",
        },
        {
          value: applicant.payment,
          label: "Payment status",
          valueClassName: paymentClassName,
        },
        {
          value: applicant.assessmentScore,
          label: "Assessment",
        },
        {
          value: applicant.risk,
          label: "Risk level",
          valueClassName: riskClassName,
        },
      ]}
      sections={[
        {
          title: "Personal & Education",
          items: [
            {
              value: applicant.location,
            },
            {
              value: applicant.education,
            },
            {
              value: applicant.experience,
            },
            {
              value: applicant.preferredTrack,
            },
            {
              value: applicant.documents,
              highlight: true,
            },
          ],
        },
        {
          title: "Application Summary",
          items: [
            {
              value: applicant.submissionSummary,
            },
            {
              value: applicant.responses,
            },
            {
              value: applicant.assessmentSummary,
            },
            {
              value: applicant.assignedMentor,
            },
            {
              value: applicant.adminNote,
              highlight: true,
            },
          ],
        },
      ]}
      activities={applicant.activities}
    />
  );
}
