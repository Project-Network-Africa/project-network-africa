"use client";

import { useMemo, useState } from "react";

import { mentorFilters, mentors, mentorStats } from "./mentors-data";

import { Mentor } from "./mentors.types";
import StatCards from "../(dashboard)/StatCards";
import { DataTable } from "../DataTable";
import { Button } from "@/src/components/ui";
import { AdminFilters } from "../AdminPage";

export default function Mentors() {
  const [search, setSearch] = useState("");

  const [selectedMentors, setSelectedMentors] = useState<Mentor[]>([]);

  /*
   * Search
   *
   * This filters the complete mentor dataset.
   */
  const filteredMentors = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return mentors;
    }

    return mentors.filter((mentor) => {
      return (
        mentor.name.toLowerCase().includes(searchValue) ||
        mentor.expertise.toLowerCase().includes(searchValue) ||
        mentor.availability.toLowerCase().includes(searchValue) ||
        mentor.verification.toLowerCase().includes(searchValue)
      );
    });
  }, [search]);

  /*
   * Table columns
   */
  const columns = [
    {
      key: "name",
      header: "Mentor",
    },

    {
      key: "expertise",
      header: "Expertise",
    },

    {
      key: "availability",
      header: "Availability",
      render: (mentor: Mentor) => (
        <span
          className={
            mentor.availability === "Available"
              ? "font-medium text-[#008F58]"
              : mentor.availability === "Inactive"
                ? "font-medium text-[#008F58]"
                : "font-medium text-[#F26B21]"
          }
        >
          {mentor.availability}
        </span>
      ),
    },

    {
      key: "mentees",
      header: "Mentees",
    },

    {
      key: "capacity",
      header: "Capacity",
    },

    {
      key: "verification",
      header: "Verification",
      render: (mentor: Mentor) => (
        <span
          className={
            mentor.verification === "Verified"
              ? "font-medium text-[#008F58]"
              : "font-medium text-[#F26B21]"
          }
        >
          {mentor.verification}
        </span>
      ),
    },

    {
      key: "rating",
      header: "Rating",
    },

    {
      key: "overdue",
      header: "Overdue",
      render: (mentor: Mentor) => (
        <span className="font-medium text-[#00B6CE]">{mentor.overdue}</span>
      ),
    },

    {
      key: "lastActive",
      header: "Last Active",
    },

    {
      key: "action",
      header: "Action",
      render: (mentor: Mentor) => (
        <Button
          href={`/admin/mentors/${mentor.id}`}
          variant="link"
          className="p-0 text-[12px] font-semibold text-[#00B6CE]"
        >
          {mentor.action}
        </Button>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* filters */}
        <div className="">
          <AdminFilters
            searchPlaceholder="Search mentors"
            filters={mentorFilters}
            showExport
            exportLabel="Export"
            secondaryAction="Invite mentor"
            searchValue={search}
            onSearchChange={setSearch}
          />
        </div>

        {/* STATS */}

        <section className="mt-5">
          <StatCards stats={mentorStats} columns={4} />
        </section>

        {/* TABLE */}

        <section className="mt-4">
          <DataTable<Mentor>
            columns={columns}
            data={filteredMentors}
            rowKey="id"
            pageSize={5}
            selectable
            totalRecords={filteredMentors.length}
            onSelectionChange={setSelectedMentors}
          />
        </section>

        {/* SELECTED ROWS */}

        {selectedMentors.length > 0 && (
          <div className="mt-3 flex items-center justify-between rounded-lg border border-[#DDE1E5] bg-white px-4 py-3">
            <p className="text-[12px] text-[#5D5D61]">
              {selectedMentors.length} mentor
              {selectedMentors.length > 1 ? "s" : ""} selected
            </p>

            <Button
              variant="light"
              className="h-9 rounded-lg px-4 text-[12px] font-semibold"
              onClick={() => {
                console.log("Selected mentors:", selectedMentors);
              }}
            >
              Bulk actions
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
