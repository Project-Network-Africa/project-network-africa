"use client";

import { useEffect, useMemo, useState } from "react";
import { getBlogs, deleteBlog } from "@/src/services/blogs";
import { DataTable } from "../DataTable";
import { ContentItem, ContentFilters } from "./content.types";
import { contentTypeNavItems } from "./content-data";

import ContentHeader from "./ContentHeader";
import ContentTypeNav from "./ContentTypeNav";
import ContentToolbar from "./ContentToolbar";
import Link from "next/link";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
interface AdminBlog {
  _id: string;
  admin?: {
    _id: string;
    fullName: string;
    email: string;
  };
  title: string;
  description: string;
  content: string;
  images: string[];
  videos: string[];
  slug: string;
  status: "Published" | "Draft" | "Scheduled" | "Needs review";
  createdAt: string;
  updatedAt: string;
}
export default function ContentManagement() {
  const [blogs, setBlogs] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const response = await getBlogs();

        console.log("ADMIN BLOGS RESPONSE:", response);
        console.log("FIRST BLOG:", response.blogs?.[0]);

        const mappedBlogs: ContentItem[] = (
          (response.blogs as AdminBlog[]) || []
        ).map((blog, index) => ({
          id: blog._id,
          title: blog.title || "",
          slug: blog.slug || "",
          type: "Article / News",
          category: "PN Africa News",
          author: blog.admin?.fullName || "Admin",
          status: blog.status || "Draft",
          excerpt: blog.description || "",
          body: blog.content || "",
          publishDate: blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString()
            : "-",
          visibility: "Public",
          featuredImage: blog.images?.[0] || "",
          altText: "",
          searchTitle: blog.title || "",
          metaDescription: blog.description || "",
          activities: [],
          updatedAt: blog.updatedAt || "",
          featured: false,
        }));
        setBlogs(mappedBlogs);
      } catch (error) {
        console.error("FAILED TO FETCH BLOGS:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  //  FILTER CHANGE

  const handleFilterChange = (key: keyof ContentFilters, value: string) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  //  FILTER CONTENT

  const filteredContent = useMemo(() => {
    let result = [...blogs];

    const searchValue = search.trim().toLowerCase();

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

    if (filters.contentType !== "all") {
      result = result.filter((item) => item.type === filters.contentType);
    }

    if (filters.category !== "all") {
      result = result.filter((item) => item.category === filters.category);
    }

    if (filters.author !== "all") {
      result = result.filter((item) => item.author === filters.author);
    }

    if (filters.publishStatus !== "all") {
      result = result.filter((item) => item.status === filters.publishStatus);
    }

    return result;
  }, [blogs, search, filters]);

  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  //delete

  const handleDelete = async () => {
    if (!blogToDelete) {
      return;
    }

    try {
      setDeleting(true);

      const response = await deleteBlog(blogToDelete);

      console.log("BLOG DELETED:", response);

      setBlogs((previousBlogs) =>
        previousBlogs.filter((blog) => blog.id !== blogToDelete),
      );

      setSelectedContent((previousSelected) =>
        previousSelected.filter((blog) => blog.id !== blogToDelete),
      );

      toast.success("Blog deleted successfully.");

      setBlogToDelete(null);
    } catch (error) {
      console.error("FAILED TO DELETE BLOG:", error);
      toast.error("Failed to delete blog. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  //  TABLE COLUMNS

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
        <div className="flex items-center gap-3">
          <Link
            href={`/admin/content-management/${item.id}`}
            className="font-semibold text-[#00B6CE] transition hover:text-[#009CB2]"
          >
            View
          </Link>

          <button
            type="button"
            onClick={() => setBlogToDelete(item.id)}
            className="font-semibold text-red-500 transition hover:text-red-600"
          >
            Delete
          </button>
        </div>
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

      <Dialog
        open={blogToDelete !== null}
        onOpenChange={(open) => {
          if (!open && !deleting) {
            setBlogToDelete(null);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete blog?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This blog will be permanently
              deleted.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <button
              type="button"
              onClick={() => setBlogToDelete(null)}
              disabled={deleting}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {deleting ? "Deleting..." : "Delete"}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
