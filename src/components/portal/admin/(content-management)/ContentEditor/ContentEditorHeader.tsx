"use client";

import { Button } from "@/src/components/ui";

import { ContentEditorHeaderProps } from "./content-editor.types";

export default function ContentEditorHeader({
  mode,
  status,
  onSave,
  onPublish,
  onPreview,
}: ContentEditorHeaderProps) {
  const isView = mode === "view";

  const title =
    mode === "create"
      ? "Create content"
      : mode === "review"
        ? "Review content"
        : mode === "edit"
          ? "Edit content"
          : "View content";

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-[12px] text-[#737379]">
          Content Management / {title}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-3">
          <h1 className="text-[28px] font-bold leading-tight text-[#1F1F25]">
            CMS Editor
          </h1>

          {status && (
            <span
              className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                status === "Published"
                  ? "bg-[#E1F3EC] text-[#008F58]"
                  : status === "Needs review"
                    ? "bg-[#FFF0E6] text-[#FF6B00]"
                    : "bg-[#F0F1F3] text-[#737379]"
              }`}
            >
              {status}
              {mode === "edit" && " • Editing"}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {isView ? (
          <Button
            variant="primary"
            className="h-10 rounded-lg px-5 text-[12px] font-semibold"
            onClick={onPreview}
          >
            Edit content
          </Button>
        ) : (
          <>
            <Button
              variant="light"
              className="h-10 rounded-lg px-5 text-[12px] font-semibold"
              onClick={onPreview}
            >
              Preview
            </Button>

            {mode !== "review" && (
              <Button
                variant="light"
                className="h-10 rounded-lg px-5 text-[12px] font-semibold"
                onClick={onSave}
              >
                Save draft
              </Button>
            )}

            {mode === "review" ? (
              <>
                <Button
                  variant="light"
                  className="h-10 rounded-lg px-5 text-[12px] font-semibold"
                >
                  Request changes
                </Button>

                <Button
                  variant="primary"
                  className="h-10 rounded-lg px-5 text-[12px] font-semibold"
                  onClick={onPublish}
                >
                  Approve & publish
                </Button>
              </>
            ) : (
              <Button
                variant="primary"
                className="h-10 rounded-lg px-5 text-[12px] font-semibold"
                onClick={onPublish}
              >
                {mode === "create" ? "Publish" : "Publish update"}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
