// "use client";

// import { useMemo, useState } from "react";

// import { Button } from "@/src/components/ui";

// import { AdminFilters } from "../AdminPage";
// import StatCards from "../(dashboard)/StatCards";
// import { DataTable } from "../DataTable";

// import { contentFilters, contentItems, contentStats } from "./content-data";

// import { ContentItem } from "./content.types";

// export default function ContentManagement() {
//   const [search, setSearch] = useState("");

//   /*
//    * Search
//    */
//   const filteredContent = useMemo(() => {
//     const searchValue = search.trim().toLowerCase();

//     if (!searchValue) {
//       return contentItems;
//     }

//     return contentItems.filter((content) => {
//       return (
//         content.contentItem.toLowerCase().includes(searchValue) ||
//         content.type.toLowerCase().includes(searchValue) ||
//         content.category.toLowerCase().includes(searchValue) ||
//         content.author.toLowerCase().includes(searchValue) ||
//         content.status.toLowerCase().includes(searchValue)
//       );
//     });
//   }, [search]);

//   /*
//    * Table columns
//    */
//   const columns = [
//     {
//       key: "contentItem",
//       header: "Content item",

//       render: (content: ContentItem) => (
//         <span className="font-medium text-[#303035]">
//           {content.contentItem}
//         </span>
//       ),
//     },

//     {
//       key: "type",
//       header: "Type",
//     },

//     {
//       key: "category",
//       header: "Category",
//     },

//     {
//       key: "author",
//       header: "Author",
//     },

//     {
//       key: "status",
//       header: "Status",

//       render: (content: ContentItem) => {
//         const statusClass =
//           content.status === "Published"
//             ? "text-[#008F58]"
//             : content.status === "Draft"
//               ? "text-[#F26B21]"
//               : content.status === "Scheduled"
//                 ? "text-[#F26B21]"
//                 : "text-[#DC2727]";

//         return (
//           <span className={`font-semibold ${statusClass}`}>
//             {content.status}
//           </span>
//         );
//       },
//     },

//     {
//       key: "featured",
//       header: "Featured",

//       render: (content: ContentItem) => (
//         <span
//           className={
//             content.featured === "Yes"
//               ? "font-semibold text-[#008F58]"
//               : "font-semibold text-[#00B6CE]"
//           }
//         >
//           {content.featured}
//         </span>
//       ),
//     },

//     {
//       key: "updated",
//       header: "Updated",
//     },

//     {
//       key: "publishDate",
//       header: "Publish date",
//     },

//     {
//       key: "action",
//       header: "Action",

//       render: (content: ContentItem) => (
//         <button
//           type="button"
//           className="font-semibold text-[#00B6CE] transition hover:text-[#009CB2]"
//           onClick={() => {
//             console.log(`${content.action}:`, content.contentItem);
//           }}
//         >
//           {content.action}
//         </button>
//       ),
//     },
//   ];

//   return (
//     <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
//       <div className="mx-auto w-full max-w-[1280px]">
//         {/* =====================================================
//             PAGE HEADER
//         ====================================================== */}

//         <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//           <h1 className="text-[28px] font-bold leading-tight text-[#1F1F25] md:text-[30px]">
//             Content Management
//           </h1>

//           <div className="flex w-full justify-end gap-2 md:w-auto">
//             <Button
//               variant="light"
//               className="h-9 rounded-lg px-4 text-[12px] font-semibold"
//               onClick={() => {
//                 console.log("Bulk actions");
//               }}
//             >
//               Bulk actions
//             </Button>

//             <Button
//               variant="primary"
//               className="h-9 rounded-lg px-4 text-[12px] font-semibold"
//               onClick={() => {
//                 console.log("Create content");
//               }}
//             >
//               Create content
//             </Button>
//           </div>
//         </section>

//         {/* =====================================================
//             FILTERS
//         ====================================================== */}

//         <section className="mt-5">
//           <AdminFilters
//             searchPlaceholder="Search content"
//             filters={contentFilters}
//             searchValue={search}
//             onSearchChange={setSearch}
//           />
//         </section>

//         {/* =====================================================
//             STATS
//         ====================================================== */}

//         <section className="mt-5">
//           <StatCards stats={contentStats} columns={4} />
//         </section>

//         {/* =====================================================
//             TABLE
//         ====================================================== */}

//         <section className="mt-4">
//           <DataTable<ContentItem>
//             columns={columns}
//             data={filteredContent}
//             rowKey="id"
//             pageSize={5}
//             selectable
//             totalRecords={filteredContent.length}
//             onSelectionChange={(selected) => {
//               console.log("Selected content:", selected);
//             }}
//           />
//         </section>
//       </div>
//     </main>
//   );
// }
"use client";

import { useMemo, useState } from "react";

import { DataTable } from "../DataTable";
import { ContentItem, ContentFilters } from "./content.types";
import { contentItems, contentTypeNavItems } from "./content-data";

import ContentHeader from "./ContentHeader";
import ContentTypeNav from "./ContentTypeNav";
import ContentToolbar from "./ContentToolbar";
import Link from "next/link";

export default function ContentManagement() {
  const [activeType, setActiveType] = useState("All content");

  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState<ContentFilters>({
    contentType: "all",
    category: "all",
    author: "all",
    publishStatus: "all",
    dateRange: "all",
    sort: "updated",
  });

  const [selectedContent, setSelectedContent] = useState<ContentItem[]>([]);

  /* =========================================================
     FILTER CHANGE
  ========================================================= */

  const handleFilterChange = (key: keyof ContentFilters, value: string) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  /* =========================================================
     FILTER CONTENT
  ========================================================= */

  const filteredContent = useMemo(() => {
    let result = [...contentItems];

    const searchValue = search.trim().toLowerCase();

    /* Search */

    if (searchValue) {
      result = result.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchValue) ||
          item.type.toLowerCase().includes(searchValue) ||
          item.category.toLowerCase().includes(searchValue) ||
          item.author.toLowerCase().includes(searchValue)
        );
      });
    }

    /* Content type filter */

    if (filters.contentType !== "all") {
      result = result.filter((item) => item.type === filters.contentType);
    }

    /* Category filter */

    if (filters.category !== "all") {
      result = result.filter((item) => item.category === filters.category);
    }

    /* Author filter */

    if (filters.author !== "all") {
      result = result.filter((item) => item.author === filters.author);
    }

    /* Publish status */

    if (filters.publishStatus !== "all") {
      result = result.filter((item) => item.status === filters.publishStatus);
    }

    /* Content navigation */

    if (activeType !== "All content") {
      const navMap: Record<string, string[]> = {
        "Program updates": ["Blog post"],
        Bootcamps: ["Success story"],
        Projects: ["Event"],
        Payments: ["FAQ"],
        Resources: ["Resource"],
      };

      const allowedTypes = navMap[activeType];

      if (allowedTypes) {
        result = result.filter((item) => allowedTypes.includes(item.type));
      }
    }

    return result;
  }, [search, filters, activeType]);

  /* =========================================================
     TABLE COLUMNS
  ========================================================= */

  const columns = [
    {
      key: "title",
      header: "Content item",

      render: (item: ContentItem) => (
        <span className="font-medium text-[#303035]">{item.title}</span>
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

      render: (item: ContentItem) => {
        const statusClass =
          item.status === "Published"
            ? "text-[#008F58]"
            : item.status === "Needs review"
              ? "text-[#DC2727]"
              : "text-[#FF6B00]";

        return (
          <span className={`font-semibold ${statusClass}`}>{item.status}</span>
        );
      },
    },

    {
      key: "featured",
      header: "Featured",

      render: (item: ContentItem) => (
        <span
          className={`font-semibold ${
            item.featured ? "text-[#008F58]" : "text-[#00B6CE]"
          }`}
        >
          {item.featured ? "Yes" : "No"}
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

      render: (item: ContentItem) => (
        <Link
          href={`/admin/content-management/${item.id}`}
          className="font-semibold text-[#00B6CE] transition hover:text-[#009CB2]"
        >
          View
        </Link>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* HEADER */}

        <ContentHeader
          onCreateContent={() => {
            console.log("Create content");
          }}
        />

        {/* CONTENT TYPES */}

        <ContentTypeNav
          items={contentTypeNavItems}
          activeType={activeType}
          onChange={setActiveType}
        />

        {/* FILTERS */}

        <ContentToolbar
          search={search}
          filters={filters}
          onSearchChange={setSearch}
          onFilterChange={handleFilterChange}
          onBulkActions={() => {
            console.log("Bulk actions");
          }}
        />

        {/* TABLE */}

        <section className="mt-4">
          <DataTable<ContentItem>
            columns={columns}
            data={filteredContent}
            rowKey="id"
            pageSize={5}
            selectable
            totalRecords={filteredContent.length}
            onSelectionChange={setSelectedContent}
          />
        </section>

        {/* SELECTED CONTENT */}

        {selectedContent.length > 0 && (
          <div className="mt-3 flex items-center justify-between rounded-lg border border-[#DDE1E5] bg-white px-4 py-3">
            <p className="text-[12px] text-[#5D5D61]">
              {selectedContent.length} content item
              {selectedContent.length > 1 ? "s" : ""} selected
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
