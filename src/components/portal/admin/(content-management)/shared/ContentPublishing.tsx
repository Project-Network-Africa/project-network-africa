// src/components/portal/admin/content/create/shared/ContentPublishing.tsx

"use client";

import { ContentStatus } from "../create-content.types";

interface Props {
  status: ContentStatus;
  visibility: "Public" | "Private";
  publishDate: string;

  onStatusChange: (value: ContentStatus) => void;
  onVisibilityChange: (value: "Public" | "Private") => void;
  onPublishDateChange: (value: string) => void;

  onPublish: () => void;
}

export default function ContentPublishing({
  status,
  visibility,
  publishDate,
  onStatusChange,
  onVisibilityChange,
  onPublishDateChange,
  onPublish,
}: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Publishing</h2>

        <span className="rounded-full bg-[#FFF8E5] px-3 py-1 text-xs font-semibold text-[#A97800]">
          ● {status}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <label>
          <span className="mb-1 block text-xs text-slate-500">Status</span>

          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value as ContentStatus)}
            className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
            <option value="Scheduled">Scheduled</option>
          </select>
        </label>

        <label>
          <span className="mb-1 block text-xs text-slate-500">Visibility</span>

          <select
            value={visibility}
            onChange={(e) =>
              onVisibilityChange(e.target.value as "Public" | "Private")
            }
            className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm"
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1 block text-xs text-slate-500">Publish date</span>

        <select
          value={publishDate}
          onChange={(e) => onPublishDateChange(e.target.value)}
          className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm"
        >
          <option>Publish immediately</option>
          <option>Schedule for later</option>
        </select>
      </label>

      <button
        type="button"
        onClick={onPublish}
        className="mt-4 h-10 w-full rounded-lg bg-[#00B6CE] text-sm font-semibold text-white"
      >
        Publish content
      </button>
    </section>
  );
}
