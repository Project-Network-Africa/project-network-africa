// import { contentItems } from "@/src/components/portal/admin/(content-management)/content-data";
// import { ContentEditorMode } from "@/src/components/portal/admin/(content-management)/content.types";
// import ContentEditor from "@/src/components/portal/admin/(content-management)/ContentEditor/ContentEditor";
// import { notFound } from "next/navigation";

// interface ContentDetailsPageProps {
//   params: Promise<{
//     id: string;
//   }>;

//   searchParams: Promise<{
//     mode?: string;
//   }>;
// }

// export default async function ContentDetailsPage({
//   params,
//   searchParams,
// }: ContentDetailsPageProps) {
//   const { id } = await params;

//   const { mode: requestedMode } = await searchParams;

//   const content = contentItems.find((item) => item.id === Number(id));

//   if (!content) {
//     notFound();
//   }

//   const mode: ContentEditorMode =
//     requestedMode === "view"
//       ? "view"
//       : requestedMode === "review"
//         ? "review"
//         : "edit";

//   return <ContentEditor mode={mode} content={content} />;
// }

"use client";

import { useEffect, useState } from "react";

import { useParams, useSearchParams } from "next/navigation";

import { getBlogById } from "@/src/services/blogs";

import {
  ContentEditorMode,
  ContentItem,
} from "@/src/components/portal/admin/(content-management)/content.types";

import ContentEditor from "@/src/components/portal/admin/(content-management)/ContentEditor/ContentEditor";

export default function ContentDetailsPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const id = params.id as string;
  const requestedMode = searchParams.get("mode");

  const [content, setContent] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getBlogById(id);

        console.log("BLOG DETAILS RESPONSE:", response);

        const blog = response?.blog;

        if (!blog) {
          setError("Blog not found.");
          return;
        }

        const mappedBlog: ContentItem = {
          id: blog._id,
          title: blog.title || "",
          slug: blog.slug || "",
          type: "Article / News",
          category: blog.category || "PN Africa News",
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
        };

        setContent(mappedBlog);
      } catch (error) {
        console.error("FAILED TO FETCH BLOG:", error);
        setError("Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  const mode: ContentEditorMode =
    requestedMode === "view"
      ? "view"
      : requestedMode === "review"
        ? "review"
        : "edit";

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F8F8]">
        <p className="text-sm text-slate-500">Loading blog...</p>
      </main>
    );
  }

  if (error || !content) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F8F8]">
        <p className="text-sm text-red-500">{error || "Blog not found."}</p>
      </main>
    );
  }

  return <ContentEditor mode={mode} content={content} />;
}
