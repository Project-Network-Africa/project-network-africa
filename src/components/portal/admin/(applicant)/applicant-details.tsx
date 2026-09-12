"use client";

import { useEffect, useState } from "react";

import {
  assignApplicantToCohort,
  updateAdminApplicantStatus,
} from "@/src/services/applicants";

import { getCohorts, CohortApiResponse } from "@/src/services/cohorts";

import AdminDetailPage from "../DetailPage/AdminDetailPage";

import { Applicant } from "./applicants.types";

interface ApplicantDetailsProps {
  applicant: Applicant;
}

export default function ApplicantDetails({ applicant }: ApplicantDetailsProps) {
  const [status, setStatus] = useState(applicant.stage);
  const [updating, setUpdating] = useState(false);

  const [cohorts, setCohorts] = useState<CohortApiResponse[]>([]);
  const [selectedCohort, setSelectedCohort] = useState("");
  const [assigningCohort, setAssigningCohort] = useState(false);
  const [assignedCohort, setAssignedCohort] = useState("");
  const initials = applicant.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleStatusUpdate = async (newStatus: "Accepted" | "Rejected") => {
    try {
      setUpdating(true);

      const response = await updateAdminApplicantStatus(
        applicant.id,
        newStatus,
      );

      console.log("STATUS UPDATE:", response);

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

      const selectedCohortData = cohorts.find(
        (cohort) => cohort._id === selectedCohort,
      );

      setAssignedCohort(selectedCohortData?.name || "");

      setSelectedCohort("");
    } catch (error) {
      console.error("FAILED TO ASSIGN COHORT:", error);
    } finally {
      setAssigningCohort(false);
    }
  };

  const stageClassName =
    status === "Accepted" || status === "Admitted"
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

  // const canApprove = status === "Applied" || status === "Pending";

  // const canReject =
  //   status === "Applied" || status === "Pending" || status === "Accepted";
  const canApprove =
    status === "Applied" || status === "Pending" || status === "Rejected";

  const canReject = status === "Applied" || status === "Pending";

  const cohortAssignment =
    status === "Admitted" ? (
      <div className="mb-4 rounded-xl border border-[#E5E5E5] bg-white p-4">
        <div className="mb-3">
          <h3 className="text-sm font-semibold text-[#303035]">
            Assign Cohort
          </h3>

          <p className="mt-1 text-xs text-[#85858A]">
            Assign this applicant to a cohort.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <select
            value={selectedCohort}
            onChange={(event) => setSelectedCohort(event.target.value)}
            className="h-10 flex-1 rounded-lg border border-[#D9D9D9] bg-white px-3 text-sm text-[#303035] outline-none focus:border-[#00B6CE]"
          >
            <option value="">Select a cohort</option>

            {cohorts.map((cohort) => (
              <option key={cohort._id} value={cohort._id}>
                {cohort.name}
              </option>
            ))}
          </select>

          <button
            type="button"
            disabled={!selectedCohort || assigningCohort}
            onClick={handleAssignCohort}
            className="h-10 rounded-lg bg-[#00B6CE] px-5 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
          >
            {assigningCohort ? "Assigning..." : "Assign Cohort"}
          </button>
        </div>
      </div>
    ) : null;
  return (
    <>
      {cohortAssignment}
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

          actions: [
            ...(canApprove
              ? [
                  {
                    label: updating ? "Approving..." : "Approve",
                    variant: "primary" as const,
                    onClick: () => handleStatusUpdate("Accepted"),
                  },
                ]
              : []),

            ...(canReject
              ? [
                  {
                    label: updating ? "Rejecting..." : "Reject",
                    variant: "danger" as const,
                    onClick: () => handleStatusUpdate("Rejected"),
                  },
                ]
              : []),
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
            title: "Personal Information",
            items: [
              {
                value: `Name: ${applicant.name}`,
              },
              {
                value: `Email: ${applicant.email}`,
              },
              {
                value: `Phone: ${applicant.phone}`,
              },
              {
                value: `Country: ${applicant.country}`,
              },
            ],
          },

          {
            title: "Programme Information",
            items: [
              {
                value: `Programme: ${applicant.programme}`,
              },
              {
                value: `Preferred Track: ${applicant.preferredTrack}`,
              },
              {
                value: `Application Status: ${status}`,
              },
              {
                value: `Applied: ${applicant.applied}`,
              },
            ],
          },

          {
            title: "Application Information",
            items: [
              {
                value: `Bio: ${applicant.bio}`,
              },
              {
                value:
                  applicant.skills.length > 0
                    ? `Skills: ${applicant.skills.join(", ")}`
                    : "Skills: -",
              },
              {
                value: applicant.portfolioUrl
                  ? `Portfolio: ${applicant.portfolioUrl}`
                  : "Portfolio: -",
              },
              {
                value: applicant.linkedInUrl
                  ? `LinkedIn: ${applicant.linkedInUrl}`
                  : "LinkedIn: -",
              },
            ],
          },

          {
            title: "Cohort Assignment",
            items: [
              {
                value: assignedCohort
                  ? `Assigned cohort: ${assignedCohort}`
                  : "No cohort assigned",
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
    </>
  );
}
