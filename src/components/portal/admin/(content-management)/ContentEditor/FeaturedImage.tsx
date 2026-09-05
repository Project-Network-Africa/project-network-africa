"use client";

import { FeaturedImageProps } from "./content-editor.types";

export default function FeaturedImage({
  image,
  imageName,
  imageSize,
  altText,
  readOnly = false,
  onAltTextChange,
}: FeaturedImageProps) {
  return (
    <section className="rounded-xl border border-[#DDE1E5] bg-white p-5">
      <h2 className="text-[17px] font-bold text-[#1F1F25]">Featured image</h2>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-[92px] w-[96px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#E5FAFC]">
          {image ? (
            <img
              src={image}
              alt={altText || ""}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-[12px] font-semibold text-[#00B6CE]">
              IMG
            </span>
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-[12px] font-semibold text-[#303035]">
            {imageName || "No image selected"}
          </p>

          {imageSize && (
            <p className="mt-1 text-[11px] text-[#737379]">{imageSize}</p>
          )}

          {!readOnly && (
            <button
              type="button"
              className="mt-2 text-[12px] font-semibold text-[#00B6CE]"
            >
              {image ? "Replace image" : "Upload image"}
            </button>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
          Alternative text
        </label>

        <input
          value={altText || ""}
          readOnly={readOnly}
          onChange={(event) => onAltTextChange?.(event.target.value)}
          className="h-10 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] outline-none focus:border-[#00B6CE] read-only:bg-[#F8F8F8]"
        />
      </div>
    </section>
  );
}
