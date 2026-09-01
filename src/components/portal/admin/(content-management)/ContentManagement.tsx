"use client";

import { useMemo, useState } from "react";

import { Button } from "@/src/components/ui";

import { AdminFilters } from "../AdminPage";
import StatCards from "../(dashboard)/StatCards";
import { DataTable } from "../DataTable";

import { contentFilters, contentItems, contentStats } from "./content-data";

import { ContentItem } from "./content.types";

export default function ContentManagement() {
  const [search, setSearch] = useState("");

  /*
   * Search
   */
  const filteredContent = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return contentItems;
    }

    return contentItems.filter((content) => {
      return (
        content.contentItem.toLowerCase().includes(searchValue) ||
        content.type.toLowerCase().includes(searchValue) ||
        content.category.toLowerCase().includes(searchValue) ||
        content.author.toLowerCase().includes(searchValue) ||
        content.status.toLowerCase().includes(searchValue)
      );
    });
  }, [search]);

  /*
   * Table columns
   */
  const columns = [
    {
      key: "contentItem",
      header: "Content item",

      render: (content: ContentItem) => (
        <span className="font-medium text-[#303035]">
          {content.contentItem}
        </span>
      ),
    },

    {
      key: "type",
      header: "Type",
    },

    {
      key: "category",
      header: "Category",
    },

    {
      key: "author",
      header: "Author",
    },

    {
      key: "status",
      header: "Status",

      render: (content: ContentItem) => {
        const statusClass =
          content.status === "Published"
            ? "text-[#008F58]"
            : content.status === "Draft"
              ? "text-[#F26B21]"
              : content.status === "Scheduled"
                ? "text-[#F26B21]"
                : "text-[#DC2727]";

        return (
          <span className={`font-semibold ${statusClass}`}>
            {content.status}
          </span>
        );
      },
    },

    {
      key: "featured",
      header: "Featured",

      render: (content: ContentItem) => (
        <span
          className={
            content.featured === "Yes"
              ? "font-semibold text-[#008F58]"
              : "font-semibold text-[#00B6CE]"
          }
        >
          {content.featured}
        </span>
      ),
    },

    {
      key: "updated",
      header: "Updated",
    },

    {
      key: "publishDate",
      header: "Publish date",
    },

    {
      key: "action",
      header: "Action",

      render: (content: ContentItem) => (
        <button
          type="button"
          className="font-semibold text-[#00B6CE] transition hover:text-[#009CB2]"
          onClick={() => {
            console.log(`${content.action}:`, content.contentItem);
          }}
        >
          {content.action}
        </button>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-[28px] font-bold leading-tight text-[#1F1F25] md:text-[30px]">
            Content Management
          </h1>

          <div className="flex w-full justify-end gap-2 md:w-auto">
            <Button
              variant="light"
              className="h-9 rounded-lg px-4 text-[12px] font-semibold"
              onClick={() => {
                console.log("Bulk actions");
              }}
            >
              Bulk actions
            </Button>

            <Button
              variant="primary"
              className="h-9 rounded-lg px-4 text-[12px] font-semibold"
              onClick={() => {
                console.log("Create content");
              }}
            >
              Create content
            </Button>
          </div>
        </section>

        {/* =====================================================
            FILTERS
        ====================================================== */}

        <section className="mt-5">
          <AdminFilters
            searchPlaceholder="Search content"
            filters={contentFilters}
            searchValue={search}
            onSearchChange={setSearch}
          />
        </section>

        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="mt-5">
          <StatCards stats={contentStats} columns={4} />
        </section>

        {/* =====================================================
            TABLE
        ====================================================== */}

        <section className="mt-4">
          <DataTable<ContentItem>
            columns={columns}
            data={filteredContent}
            rowKey="id"
            pageSize={5}
            selectable
            totalRecords={filteredContent.length}
            onSelectionChange={(selected) => {
              console.log("Selected content:", selected);
            }}
          />
        </section>
      </div>
    </main>
  );
}
