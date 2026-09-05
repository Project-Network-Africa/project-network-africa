// "use client";

// import { Button } from "@/src/components/ui";
// import { ContentFilters } from "./content.types";

// interface ContentToolbarProps {
//   search: string;
//   filters: ContentFilters;

//   onSearchChange: (value: string) => void;
//   onFilterChange: (key: keyof ContentFilters, value: string) => void;
//   onBulkActions?: () => void;
// }

// export default function ContentToolbar({
//   filters,
//   onFilterChange,
//   onBulkActions,
// }: ContentToolbarProps) {

"use client";

import { Button } from "@/src/components/ui";
import { ContentFilters } from "./content.types";

interface ContentToolbarProps {
  search: string;
  filters: ContentFilters;
  onSearchChange: (value: string) => void;
  onFilterChange: (key: keyof ContentFilters, value: string) => void;
  onBulkActions?: () => void;
}

export default function ContentToolbar({
  search,
  filters,
  onSearchChange,
  onFilterChange,
  onBulkActions,
}: ContentToolbarProps) {
  return (
    <section className="mt-4">
      <div className="flex flex-col gap-2">
        {/* TOP ROW */}

        <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
          {/* SEARCH */}

          {/* <input
            type="text"
            value={filters.contentType === "__search__" ? "" : ""}
            onChange={() => {}}
            placeholder="Search content"
            className="h-9 w-full rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] text-[#303035] outline-none placeholder:text-[#737379] focus:border-[#00B6CE] lg:max-w-[350px]"
          /> */}
          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search content"
            className="h-9 w-full rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035] outline-none placeholder:text-[#737379] focus:border-[#00B6CE] lg:max-w-[350px]"
          />

          {/* CONTENT TYPE */}

          <select
            value={filters.contentType}
            onChange={(event) =>
              onFilterChange("contentType", event.target.value)
            }
            className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035] outline-none"
          >
            <option value="all">Content type</option>
            <option value="Blog post">Blog post</option>
            <option value="Success story">Success story</option>
            <option value="Resource">Resource</option>
            <option value="Event">Event</option>
            <option value="FAQ">FAQ</option>
          </select>

          {/* CATEGORY */}

          <select
            value={filters.category}
            onChange={(event) => onFilterChange("category", event.target.value)}
            className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035] outline-none"
          >
            <option value="all">Category</option>
            <option value="Career Tips">Career Tips</option>
            <option value="Alumni">Alumni</option>
            <option value="Product">Product</option>
            <option value="Community">Community</option>
            <option value="Mentorship">Mentorship</option>
            <option value="Engineering">Engineering</option>
          </select>

          {/* AUTHOR */}

          <select
            value={filters.author}
            onChange={(event) => onFilterChange("author", event.target.value)}
            className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035] outline-none"
          >
            <option value="all">Author</option>
            <option value="Amina Yusuf">Amina Yusuf</option>
            <option value="Chidi Nwosu">Chidi Nwosu</option>
            <option value="Femi Cole">Femi Cole</option>
            <option value="David Mensah">David Mensah</option>
          </select>
        </div>

        {/* SECOND ROW */}

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <select
              value={filters.publishStatus}
              onChange={(event) =>
                onFilterChange("publishStatus", event.target.value)
              }
              className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035] outline-none"
            >
              <option value="all">Publish status</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Needs review">Needs review</option>
            </select>

            <select
              value={filters.dateRange}
              onChange={(event) =>
                onFilterChange("dateRange", event.target.value)
              }
              className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035] outline-none"
            >
              <option value="all">Date range</option>
              <option value="today">Today</option>
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="90days">Last 90 days</option>
            </select>

            <select
              value={filters.sort}
              onChange={(event) => onFilterChange("sort", event.target.value)}
              className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035] outline-none"
            >
              <option value="updated">Sort: Last updated</option>
              <option value="oldest">Sort: Oldest updated</option>
              <option value="publish">Sort: Publish date</option>
            </select>
          </div>

          <Button
            variant="light"
            className="h-9 rounded-lg px-4 text-[12px] font-semibold"
            onClick={onBulkActions}
          >
            Bulk actions
          </Button>
        </div>
      </div>
    </section>
  );
}
