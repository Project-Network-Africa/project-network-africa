"use client";

import { useMemo, useState } from "react";

import { Applicant, ApplicantFilters } from "./applicants.types";
import { applicants } from "./applicant-data";
import { AdminFilters } from "../AdminPage";
import StatCards from "../(dashboard)/StatCards";
import { DataTable } from "../DataTable";
import { Button } from "@/src/components/ui";

export default function Applicants() {
  /*
   * Filters
   */
  const [filters, setFilters] = useState<ApplicantFilters>({
    search: "",
    programme: "All programmes",
    cohort: "All cohorts",
    stage: "All stages",
  });

  /*
   * Filter applicants based on search + filters
   */
  const filteredApplicants = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return applicants.filter((applicant) => {
      /*
       * Search
       */
      const matchesSearch =
        search === "" ||
        applicant.name.toLowerCase().includes(search) ||
        applicant.programme.toLowerCase().includes(search) ||
        applicant.cohort.toLowerCase().includes(search) ||
        applicant.mentor.toLowerCase().includes(search);

      /*
       * Programme
       */
      const matchesProgramme =
        filters.programme === "All programmes" ||
        applicant.programme === filters.programme;

      /*
       * Cohort
       */
      const matchesCohort =
        filters.cohort === "All cohorts" || applicant.cohort === filters.cohort;

      /*
       * Stage
       */
      const matchesStage =
        filters.stage === "All stages" || applicant.stage === filters.stage;

      return matchesSearch && matchesProgramme && matchesCohort && matchesStage;
    });
  }, [filters]);

  /*
   * Statistics
   */
  const stats = [
    {
      label: "Total applicants",
      value: "1,842",
      helper: "↑ 12% this month",
      valueColor: "text-[##00B6CE]",
      helperColor: "text-[#178C59]",
    },
    {
      label: "Awaiting review",
      value: "126",
      helper: "18 overdue",
      valueColor: "text-[#1F1F25]",
      helperColor: "text-[#C72E33]",
    },
    {
      label: "Unassigned",
      value: "34",
      helper: "Needs attention",
      valueColor: "text-[#1F1F25]",
      helperColor: "text-[#C72E33]",
    },
    {
      label: "High-risk applicants",
      value: "18",
      helper: "Review today",
      valueColor: "text-[#00B6CE]",
      helperColor: "text-[#00B6CE]",
    },
  ];

  /*
   * Table columns
   */
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
          Review: "text-[#F59E0B]",
          Interviewing: "text-[#00B6CE]",
          Matched: "text-[#008F5A]",
          Onboarding: "text-[#008F5A]",
        };

        return (
          <span
            className={`font-semibold ${
              styles[applicant.stage] ?? "text-[#303035]"
            }`}
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
            className={`font-semibold ${
              styles[applicant.payment] ?? "text-[#303035]"
            }`}
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
            className={`font-semibold ${
              styles[applicant.risk] ?? "text-[#303035]"
            }`}
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

  /*
   * Filter options
   */
  const programmeOptions = [
    "All programmes",
    "Product Design",
    "Software Eng.",
    "Data Analytics",
    "Project Mgmt.",
  ];

  const cohortOptions = ["All cohorts", "Cohort 4", "Cohort 5", "Cohort 6"];

  const stageOptions = [
    "All stages",
    "Applied",
    "Review",
    "Interviewing",
    "Matched",
    "Onboarding",
  ];

  return (
    <main className="min-h-screen bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Filters */}
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

        {/* Stats */}
        <div className=" w-full mb-5">
          <StatCards stats={stats} />
        </div>

        {/* Table */}
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
