"use client";

import { ContentType } from "../content.types";
import { contentCategories, contentTypes } from "../content-data";

import { ContentDetailsProps } from "./content-editor.types";

export default function ContentDetails({
  title,
  slug,
  contentType,
  category,
  author,
  excerpt,
  readOnly = false,

  onTitleChange,
  onSlugChange,
  onContentTypeChange,
  onCategoryChange,
  onExcerptChange,
}: ContentDetailsProps) {
  const categories = contentType ? contentCategories[contentType] : [];

  return (
    <section className="rounded-xl border border-[#DDE1E5] bg-white p-5 lg:p-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[18px] font-bold text-[#1F1F25]">
          Content details
        </h2>

        {contentType && category && (
          <span className="rounded-full bg-[#E5FAFC] px-3 py-1 text-[11px] font-semibold text-[#00B6CE]">
            {category}
          </span>
        )}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* TITLE */}

        <div className="lg:col-span-2">
          <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
            Content title
          </label>

          <input
            value={title}
            readOnly={readOnly}
            onChange={(event) => onTitleChange(event.target.value)}
            className="h-11 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[13px] text-[#303035] outline-none focus:border-[#00B6CE] read-only:bg-[#F8F8F8]"
          />
        </div>

        {/* SLUG */}

        <div>
          <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
            URL slug
          </label>

          <input
            value={slug}
            readOnly={readOnly}
            onChange={(event) => onSlugChange(event.target.value)}
            className="h-11 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[13px] text-[#303035] outline-none focus:border-[#00B6CE] read-only:bg-[#F8F8F8]"
          />
        </div>

        {/* CONTENT TYPE */}

        <div>
          <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
            Content type
          </label>

          <select
            value={contentType}
            disabled={readOnly}
            onChange={(event) =>
              onContentTypeChange(event.target.value as ContentType)
            }
            className="h-11 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[13px] text-[#303035] outline-none focus:border-[#00B6CE] disabled:bg-[#F8F8F8]"
          >
            <option value="">Select content type</option>

            {contentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* CATEGORY */}

        <div>
          <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
            Category
          </label>

          <select
            value={category}
            disabled={readOnly || !contentType}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="h-11 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[13px] text-[#303035] outline-none focus:border-[#00B6CE] disabled:bg-[#F8F8F8]"
          >
            <option value="">
              {contentType ? "Select category" : "Select content type first"}
            </option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* AUTHOR */}

        <div>
          <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
            Author
          </label>

          <input
            value={author}
            readOnly
            className="h-11 w-full rounded-lg border border-[#DDE1E5] bg-[#F8F8F8] px-3 text-[13px] text-[#303035] outline-none"
          />
        </div>

        {/* EXCERPT */}

        <div className="lg:col-span-3">
          <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
            Excerpt
          </label>

          <textarea
            value={excerpt}
            readOnly={readOnly}
            onChange={(event) => onExcerptChange(event.target.value)}
            rows={3}
            className="w-full resize-none rounded-lg border border-[#DDE1E5] bg-white px-3 py-3 text-[13px] text-[#303035] outline-none focus:border-[#00B6CE] read-only:bg-[#F8F8F8]"
          />
        </div>
      </div>
    </section>
  );
}
