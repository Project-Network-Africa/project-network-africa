"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createBlog } from "@/src/services/blogs";

import { ContentType, ContentStatus } from "./create-content.types";

import { CONTENT_CATEGORIES } from "./create-content.constants";
import ProgrammeForm from "./ProgrammeForm";
import ProgramUpdateForm from "./ProgramUpdateForm";
import ProjectExampleForm from "./ProjectExampleForm";
import PaymentUpdateForm from "./PaymentUpdateForm";
import ResourceContentForm from "./ResourceContentForm";
import ArticleNewsForm from "./ArticleNewsForm";
import ContentSEO from "./shared/ContentSEO";
import ContentPublishing from "./shared/ContentPublishing";
import { toast } from "sonner";

const inputClass =
  "h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-[#00B6CE] focus:ring-2 focus:ring-[#00B6CE]/10";

const labelClass = "mb-1.5 block text-xs font-medium text-slate-600";

export default function CreateContent() {
  const router = useRouter();
  const [contentType, setContentType] = useState<ContentType | "">("");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  const [category, setCategory] = useState("");

  const [author, setAuthor] = useState("");

  const [status, setStatus] = useState<ContentStatus>("Draft");

  const [visibility, setVisibility] = useState<"Public" | "Private">("Public");

  const [publishDate, setPublishDate] = useState("Publish immediately");

  const [searchTitle, setSearchTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const [formData, setFormData] = useState<Record<string, unknown>>({});

  const categories = useMemo(() => {
    if (!contentType) return [];

    return CONTENT_CATEGORIES[contentType];
  }, [contentType]);

  const handleContentTypeChange = (value: ContentType) => {
    setContentType(value);
    setCategory("");

    /*
     * Reset type-specific data whenever
     * the content type changes.
     */
    setFormData({});
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);

    if (!slug || slug === slugify(title)) {
      setSlug(slugify(value));
    }

    if (!searchTitle) {
      setSearchTitle(value);
    }
  };

  const handleSaveDraft = () => {
    console.log("Saving draft", {
      contentType,
      title,
      slug,
      category,
      author,
      status,
      visibility,
      publishDate,
      formData,
    });
  };

  const handlePublish = async () => {
    if (contentType !== "Article / News") {
      console.log("Publishing content", {
        contentType,
        title,
        slug,
        category,
        author,
        status,
        visibility,
        publishDate,
        formData,
      });
      return;
    }

    try {
      const response = await createBlog({
        title: String(formData.title || title),
        description: String(formData.description || ""),
        content: String(formData.content || ""),
        images: Array.isArray(formData.images)
          ? (formData.images as File[])
          : [],
        videos: Array.isArray(formData.videos)
          ? (formData.videos as File[])
          : [],
      });

      console.log("BLOG CREATED:", response);

      toast.success("Blog published successfully!");

      router.push("/admin/content-management");
    } catch (error) {
      console.error("FAILED TO CREATE BLOG:", error);
      toast.error("Failed to publish blog. Please try again.");
    }
  };

  const renderContentForm = () => {
    if (!contentType) {
      return (
        <div className="flex min-h-[420px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white">
          <div className="max-w-sm text-center">
            <h2 className="text-lg font-semibold text-slate-800">
              Select a content type
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Choose what you want to create. The appropriate fields will appear
              here.
            </p>
          </div>
        </div>
      );
    }

    switch (contentType) {
      case "Programme":
        return <ProgrammeForm data={formData} onChange={setFormData} />;

      case "Program Update":
        return <ProgramUpdateForm data={formData} onChange={setFormData} />;

      case "Project Example":
        return <ProjectExampleForm data={formData} onChange={setFormData} />;

      case "Payment Update":
        return <PaymentUpdateForm data={formData} onChange={setFormData} />;

      case "Resource Content":
        return <ResourceContentForm data={formData} onChange={setFormData} />;

      case "Article / News":
        return <ArticleNewsForm data={formData} onChange={setFormData} />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Content Management</span>
                <span>/</span>
                <span className="text-slate-500">New content</span>
              </div>

              <h1 className="mt-1 text-2xl font-semibold text-slate-900">
                Create content
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-xs font-medium text-green-600">
                New draft
              </span>

              <button
                type="button"
                className="h-10 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold"
              >
                Preview
              </button>

              <button
                type="button"
                onClick={handleSaveDraft}
                className="h-10 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold"
              >
                Save draft
              </button>

              <button
                type="button"
                onClick={handlePublish}
                disabled={!contentType || !title}
                className="h-10 rounded-lg bg-[#00B6CE] px-5 text-sm font-semibold text-white transition hover:bg-[#00A8BD] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Publish content
              </button>
            </div>
          </div>

          {/* STEPS */}
          <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-lg border border-slate-200 md:grid-cols-4">
            {[
              "1  Details",
              "2  Write content",
              "3  Media & SEO",
              "4  Review & publish",
            ].map((step, index) => (
              <div
                key={step}
                className={`flex h-9 items-center justify-center text-xs ${
                  index === 0
                    ? "bg-[#DDF7FB] font-semibold text-[#009CB2]"
                    : "bg-white text-slate-500"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-5 py-4">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_350px]">
          {/* LEFT */}
          <div className="space-y-4">
            {/* CONTENT TYPE */}
            <section className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass}>Content type</label>

                  <select
                    value={contentType}
                    onChange={(e) =>
                      handleContentTypeChange(e.target.value as ContentType)
                    }
                    className={inputClass}
                  >
                    <option value="">Select content type</option>

                    <option value="Programme">Programme</option>

                    <option value="Program Update">Program Update</option>

                    <option value="Project Example">Project Example</option>

                    <option value="Payment Update">Payment Update</option>

                    <option value="Resource Content">Resource Content</option>

                    <option value="Article / News">Article / News</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Category</label>

                  <select
                    value={category}
                    disabled={!contentType}
                    onChange={(e) => setCategory(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">
                      {contentType
                        ? "Select category"
                        : "Select content type first"}
                    </option>

                    {categories.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* GENERIC TITLE */}
            {contentType &&
              contentType !== "Programme" &&
              contentType !== "Program Update" &&
              contentType !== "Project Example" &&
              contentType !== "Payment Update" &&
              contentType !== "Resource Content" &&
              contentType !== "Article / News" && (
                <section className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className={labelClass}>Content title</label>

                      <input
                        value={title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>URL slug</label>

                      <input
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Author</label>

                      <input
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </section>
              )}

            {/* TYPE-SPECIFIC FORM */}
            {renderContentForm()}

            {/* SEO */}
            {contentType && (
              <ContentSEO
                searchTitle={searchTitle}
                metaDescription={metaDescription}
                onSearchTitleChange={setSearchTitle}
                onMetaDescriptionChange={setMetaDescription}
              />
            )}
          </div>

          {/* RIGHT */}
          <aside className="space-y-4">
            <ContentPublishing
              status={status}
              visibility={visibility}
              publishDate={publishDate}
              onStatusChange={setStatus}
              onVisibilityChange={setVisibility}
              onPublishDateChange={setPublishDate}
              onPublish={handlePublish}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
