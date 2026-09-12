"use client";

import { useEffect, useMemo, useState } from "react";

import { AdminApplicant, getAdminApplicants } from "@/src/services/applicants";

import { Applicant, ApplicantFilters } from "./applicants.types";

import { AdminFilters } from "../AdminPage";

import StatCards from "../(dashboard)/StatCards";

import { DataTable } from "../DataTable";

import { Button } from "@/src/components/ui";

import LoadingState from "@/src/components/ui/Loading/LoadingState";

const mapAdminApplicant = (applicant: AdminApplicant): Applicant => {
  const firstName = applicant.userId?.firstName || "";
  const lastName = applicant.userId?.lastName || "";
  const email = applicant.userId?.email || "-";

  const name = `${firstName} ${lastName}`.trim() || email;

  const status = applicant.admissionStatus || applicant.status || "Pending";

  return {
    id: applicant._id,

    name,

    email,

    phone: applicant.phone || "-",

    country: applicant.country || "-",

    programme: applicant.program || "-",

    cohort: "-",

    stage: status === "Pending" ? "Applied" : status,

    payment: "Pending",

    mentor: "Unassigned",

    applied: applicant.submittedAt
      ? new Date(applicant.submittedAt).toLocaleDateString()
      : "-",

    risk: "Low",

    action: "View",

    applicationScore: "-",

    assessmentScore: "-",

    location: applicant.country || "-",

    education: "-",

    experience: "-",

    preferredTrack: applicant.program || "-",

    documents: "-",

    submissionSummary: applicant.bio || "-",

    responses: "-",

    assessmentSummary: "-",

    assignedMentor: "Unassigned",

    adminNote: "-",

    activities: [],

    bio: applicant.bio || "-",

    skills: applicant.skills || [],

    portfolioUrl: applicant.portfolioUrl || "",

    linkedInUrl: applicant.linkedInUrl || "",

    submittedAt: applicant.submittedAt || "",

    createdAt: applicant.createdAt || "",

    updatedAt: applicant.updatedAt || "",
  };
};

export default function Applicants() {
  const [applicants, setApplicants] = useState<Applicant[]>([]);

  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState<ApplicantFilters>({
    search: "",
    programme: "All programmes",
    cohort: "All cohorts",
    stage: "All stages",
  });

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await getAdminApplicants();

        const mappedApplicants = response.applicants.map(mapAdminApplicant);

        setApplicants(mappedApplicants);
      } catch (error) {
        console.error("FAILED TO GET ADMIN APPLICANTS:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  const filteredApplicants = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return applicants.filter((applicant) => {
      const matchesSearch =
        search === "" ||
        applicant.name.toLowerCase().includes(search) ||
        applicant.email.toLowerCase().includes(search) ||
        applicant.programme.toLowerCase().includes(search) ||
        applicant.cohort.toLowerCase().includes(search) ||
        applicant.mentor.toLowerCase().includes(search);

      const matchesProgramme =
        filters.programme === "All programmes" ||
        applicant.programme === filters.programme;

      const matchesCohort =
        filters.cohort === "All cohorts" || applicant.cohort === filters.cohort;

      const matchesStage =
        filters.stage === "All stages" || applicant.stage === filters.stage;

      return matchesSearch && matchesProgramme && matchesCohort && matchesStage;
    });
  }, [applicants, filters]);

  const stats = [
    {
      label: "Total applicants",
      value: String(applicants.length),
      helper: "Current applicants",
      helperColor: "text-[#00B6CE]",
    },

    {
      label: "Awaiting review",
      value: String(
        applicants.filter((applicant) => applicant.stage === "Applied").length,
      ),
      helper: "Currently pending",
      helperColor: "text-[#E56B1A]",
    },

    {
      label: "Unassigned",
      value: "-",
      helper: "Not available",
      helperColor: "text-[#85858A]",
    },

    {
      label: "High-risk applicants",
      value: "-",
      helper: "Not available",
      helperColor: "text-[#85858A]",
    },
  ];

  const columns = [
    {
      key: "name",
      header: "Applicant",
    },

    {
      key: "programme",
      header: "Programme",
    },

    {
      key: "cohort",
      header: "Cohort",
    },

    {
      key: "stage",
      header: "Stage",

      render: (applicant: Applicant) => {
        const styles: Record<string, string> = {
          Applied: "text-[#00B6CE]",
          Accepted: "text-[#008F5A]",
          Admitted: "text-[#008F5A]",
          Rejected: "text-[#DC2727]",
        };

        return (
          <span
            className={`font-semibold ${styles[applicant.stage] ?? "text-[#303035]"}`}
          >
            {applicant.stage}
          </span>
        );
      },
    },

    {
      key: "payment",
      header: "Payment",

      render: (applicant: Applicant) => {
        const styles: Record<string, string> = {
          Paid: "text-[#008F5A]",
          Pending: "text-[#F59E0B]",
          Failed: "text-[#DC2727]",
        };

        return (
          <span
            className={`font-semibold ${styles[applicant.payment] ?? "text-[#303035]"}`}
          >
            {applicant.payment}
          </span>
        );
      },
    },

    {
      key: "mentor",
      header: "Mentor",
    },

    {
      key: "applied",
      header: "Applied",
    },

    {
      key: "risk",
      header: "Risk",

      render: (applicant: Applicant) => {
        const styles: Record<string, string> = {
          Low: "text-[#008F5A]",
          Medium: "text-[#F59E0B]",
          High: "text-[#DC2727]",
        };

        return (
          <span
            className={`font-semibold ${styles[applicant.risk] ?? "text-[#303035]"}`}
          >
            {applicant.risk}
          </span>
        );
      },
    },

    {
      key: "action",
      header: "Action",

      render: (applicant: Applicant) => (
        <Button
          href={`/admin/applicants/${applicant.id}`}
          variant="link"
          className="p-0 text-[12px] font-semibold text-[#00B6CE]"
        >
          {applicant.action}
        </Button>
      ),
    },
  ];

  const programmeOptions = [
    "All programmes",
    "Product Design",
    "Backend Engineering",
    "Full Stack Engineering",
  ];

  const cohortOptions = ["All cohorts", "Cohort 4", "Cohort 5", "Cohort 6"];

  const stageOptions = [
    "All stages",
    "Applied",
    "Accepted",
    "Rejected",
    "Admitted",
  ];

  if (loading) {
    return (
      <main className="flex min-h-[500px] items-center justify-center">
        <LoadingState />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-5">
          <AdminFilters
            searchPlaceholder="Search applicants"
            searchValue={filters.search}
            onSearchChange={(value) => {
              setFilters((previous) => ({
                ...previous,
                search: value,
              }));
            }}
            filters={[
              {
                label: filters.programme,
                options: programmeOptions,
                onChange: (value: string) => {
                  setFilters((previous) => ({
                    ...previous,
                    programme: value,
                  }));
                },
              },

              {
                label: filters.cohort,
                options: cohortOptions,
                onChange: (value: string) => {
                  setFilters((previous) => ({
                    ...previous,
                    cohort: value,
                  }));
                },
              },

              {
                label: filters.stage,
                options: stageOptions,
                onChange: (value: string) => {
                  setFilters((previous) => ({
                    ...previous,
                    stage: value,
                  }));
                },
              },
            ]}
            showBulkActions
            showExport
            exportLabel="Export CSV"
          />
        </div>

        <div className="mb-5 w-full">
          <StatCards stats={stats} />
        </div>

        <DataTable<Applicant>
          columns={columns}
          data={filteredApplicants}
          rowKey="id"
          pageSize={10}
          selectable
          onSelectionChange={(selectedRows) => {
            console.log("Selected applicants:", selectedRows);
          }}
        />
      </div>
    </main>
  );
}
