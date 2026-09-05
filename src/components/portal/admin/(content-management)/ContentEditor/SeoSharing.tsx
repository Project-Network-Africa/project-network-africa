"use client";

import { SeoSharingProps } from "./content-editor.types";

export default function SeoSharing({
  searchTitle,
  metaDescription,
  previewUrl,
  readOnly = false,
  onSearchTitleChange,
  onMetaDescriptionChange,
}: SeoSharingProps) {
  return (
    <section className="rounded-xl border border-[#DDE1E5] bg-white p-5">
      <h2 className="text-[17px] font-bold text-[#1F1F25]">SEO & sharing</h2>

      <div className="mt-4">
        <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
          Search title
        </label>

        <input
          value={searchTitle}
          readOnly={readOnly}
          onChange={(event) => onSearchTitleChange?.(event.target.value)}
          className="h-10 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] outline-none focus:border-[#00B6CE] read-only:bg-[#F8F8F8]"
        />
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
          Meta description
        </label>

        <textarea
          value={metaDescription}
          readOnly={readOnly}
          onChange={(event) => onMetaDescriptionChange?.(event.target.value)}
          rows={3}
          className="w-full resize-none rounded-lg border border-[#DDE1E5] bg-white px-3 py-2 text-[12px] leading-5 outline-none focus:border-[#00B6CE] read-only:bg-[#F8F8F8]"
        />
      </div>

      {previewUrl && (
        <div className="mt-3 rounded-lg bg-[#F3F5F6] p-3">
          <p className="text-[11px] text-[#008F58]">{previewUrl}</p>

          <p className="mt-1 text-[12px] font-medium text-[#00B6CE]">
            {searchTitle}
          </p>
        </div>
      )}
    </section>
  );
}
