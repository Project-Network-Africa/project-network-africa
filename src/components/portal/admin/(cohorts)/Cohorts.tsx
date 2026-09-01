"use client";

import { useMemo, useState } from "react";

import { cohortFilters, cohorts, cohortStats } from "./cohorts-data";

import { Cohort } from "./cohorts.types";
import { AdminFilters } from "../AdminPage";
import StatCards from "../(dashboard)/StatCards";
import { DataTable } from "../DataTable";
import { Button } from "@/src/components/ui";

export default function Cohorts() {
  const [search, setSearch] = useState("");

  /*
   * Search
   */
  const filteredCohorts = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return cohorts;
    }

    return cohorts.filter((cohort) => {
      return (
        cohort.cohort.toLowerCase().includes(searchValue) ||
        cohort.programme.toLowerCase().includes(searchValue) ||
        cohort.start.toLowerCase().includes(searchValue) ||
        cohort.end.toLowerCase().includes(searchValue) ||
        cohort.status.toLowerCase().includes(searchValue)
      );
    });
  }, [search]);

  /*
   * Table columns
   */
  const columns = [
    {
      key: "cohort",
      header: "Cohort",

      render: (cohort: Cohort) => (
        <span className="font-medium text-[#303035]">{cohort.cohort}</span>
      ),
    },

    {
      key: "programme",
      header: "Programme",
    },

    {
      key: "start",
      header: "Start",
    },

    {
      key: "end",
      header: "End",
    },

    {
      key: "deadline",
      header: "Deadline",
    },

    {
      key: "capacity",
      header: "Capacity",
    },

    {
      key: "enrolled",
      header: "Enrolled",
    },

    {
      key: "completion",
      header: "Completion",

      render: (cohort: Cohort) => (
        <span className="font-semibold text-[#00B6CE]">
          {cohort.completion}
        </span>
      ),
    },

    {
      key: "status",
      header: "Status",

      render: (cohort: Cohort) => {
        const isDraft = cohort.status === "Draft";

        return (
          <span
            className={
              isDraft
                ? "font-semibold text-[#FF6B00]"
                : "font-semibold text-[#008F58]"
            }
          >
            {cohort.status}
          </span>
        );
      },
    },

    {
      key: "action",
      header: "Action",

      render: (cohort: Cohort) => (
        <Button
          href={`/admin/cohorts/${cohort.id}`}
          variant="link"
          className="p-0 text-[12px] font-semibold text-[#00B6CE]"
        >
          {cohort.action}
        </Button>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body ">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Filters */}
        <div className="">
          <AdminFilters
            searchPlaceholder="Search cohorts"
            filters={cohortFilters}
            showExport
            exportLabel="Export"
            secondaryAction="Create cohort"
            searchValue={search}
            onSearchChange={setSearch}
          />
        </div>

        {/* Stats */}
        <section className="mt-5">
          <StatCards stats={cohortStats} columns={4} />
        </section>

        {/* Table */}
        <section className="mt-4">
          <DataTable<Cohort>
            columns={columns}
            data={filteredCohorts}
            rowKey="id"
            pageSize={5}
            totalRecords={filteredCohorts.length}
          />
        </section>
      </div>
    </main>
  );
}
