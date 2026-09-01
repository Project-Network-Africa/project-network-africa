"use client";

import { useMemo, useState } from "react";

import DataTable from "../DataTable/DataTable";

import { projectFilters, projects, projectStats } from "./projects-data";

import { Project } from "./projects.types";
import { AdminFilters } from "../AdminPage";
import StatCards from "../(dashboard)/StatCards";
import { Button } from "@/src/components/ui";

export default function Projects() {
  const [search, setSearch] = useState("");

  /*
   * Search
   */
  const filteredProjects = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return projects;
    }

    return projects.filter((project) => {
      return (
        project.project.toLowerCase().includes(searchValue) ||
        project.employer.toLowerCase().includes(searchValue) ||
        project.cohort.toLowerCase().includes(searchValue) ||
        project.mentor.toLowerCase().includes(searchValue) ||
        project.team.toLowerCase().includes(searchValue) ||
        project.review.toLowerCase().includes(searchValue)
      );
    });
  }, [search]);

  /*
   * Table columns
   */
  const columns = [
    {
      key: "project",
      header: "Project",

      render: (project: Project) => (
        <span className="font-medium text-[#303035]">{project.project}</span>
      ),
    },

    {
      key: "employer",
      header: "Employer",
    },

    {
      key: "cohort",
      header: "Cohort",
    },

    {
      key: "mentor",
      header: "Mentor",
    },

    {
      key: "team",
      header: "Team",
    },

    {
      key: "progress",
      header: "Progress",

      render: (project: Project) => (
        <span className="font-semibold text-[#00B6CE]">{project.progress}</span>
      ),
    },

    {
      key: "deadline",
      header: "Deadline",
    },

    {
      key: "review",
      header: "Review",

      render: (project: Project) => {
        const isAtRisk = project.review === "At risk";

        const isApproved = project.review === "Approved";

        return (
          <span
            className={
              isAtRisk
                ? "font-semibold text-[#DC2727]"
                : isApproved
                  ? "font-semibold text-[#008F58]"
                  : "font-semibold text-[#008F58]"
            }
          >
            {project.review}
          </span>
        );
      },
    },

    {
      key: "action",
      header: "Action",

      render: (project: Project) => (
        <Button
          href={`/admin/projects/${project.id}`}
          variant="link"
          className="p-0 text-[12px] font-semibold text-[#00B6CE]"
        >
          {project.action}
        </Button>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* ================================
            FILTERS
        ================================= */}

        <div className="">
          <AdminFilters
            searchPlaceholder="Search projects"
            filters={projectFilters}
            showExport
            exportLabel="Export"
            secondaryAction="Create project"
            searchValue={search}
            onSearchChange={setSearch}
          />
        </div>

        {/* ================================
            STAT CARDS
        ================================= */}

        <section className="mt-5">
          <StatCards stats={projectStats} columns={4} />
        </section>

        {/* ================================
            TABLE
        ================================= */}

        <section className="mt-4">
          <DataTable<Project>
            columns={columns}
            data={filteredProjects}
            rowKey="id"
            pageSize={5}
            totalRecords={filteredProjects.length}
          />
        </section>
      </div>
    </main>
  );
}
