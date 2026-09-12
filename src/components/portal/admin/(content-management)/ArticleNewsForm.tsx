"use client";

import { toast } from "sonner";

interface Props {
  data: Record<string, unknown>;
  onChange: (data: Record<string, unknown>) => void;
}

export default function ArticleNewsForm({ data, onChange }: Props) {
  const value = (key: string) =>
    typeof data[key] === "string" ? String(data[key]) : "";

  const update = (key: string, value: string) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  const handleImagesChange = (files: FileList | null) => {
    if (!files) return;

    const selectedFiles = Array.from(files);

    if (selectedFiles.length > 10) {
      toast.error("You can upload a maximum of 10 images.");
      return;
    }

    onChange({
      ...data,
      images: selectedFiles,
    });
  };

  const handleVideosChange = (files: FileList | null) => {
    if (!files) return;

    const selectedFiles = Array.from(files);

    if (selectedFiles.length > 5) {
      toast.error("You can upload a maximum of 5 videos.");
      return;
    }

    onChange({
      ...data,
      videos: selectedFiles,
    });
  };

  const images = Array.isArray(data.images) ? (data.images as File[]) : [];

  const videos = Array.isArray(data.videos) ? (data.videos as File[]) : [];

  return (
    <div className="space-y-4">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Article details</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Article title
            </span>

            <input
              value={value("title")}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Enter article title"
              className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#00B6CE]"
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">URL slug</span>

            <input
              value={value("slug")}
              onChange={(e) => update("slug", e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#00B6CE]"
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">Category</span>

            <select
              value={value("category")}
              onChange={(e) => update("category", e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm"
            >
              <option value="">Select category</option>
              <option value="PN Africa News">PN Africa News</option>
              <option value="Community">Community</option>
              <option value="Events">Events</option>
              <option value="Partnerships">Partnerships</option>
              <option value="Success Stories">Success Stories</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">Author</span>

            <input
              value={value("author")}
              onChange={(e) => update("author", e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#00B6CE]"
            />
          </label>

          <div className="md:col-span-2">
            <label>
              <span className="mb-1.5 block text-xs font-medium">
                Description
              </span>

              <textarea
                rows={4}
                value={value("description")}
                onChange={(e) => update("description", e.target.value)}
                placeholder="Write a short description..."
                className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#00B6CE]"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Body content</h2>

        <textarea
          value={value("content")}
          onChange={(e) => update("content", e.target.value)}
          rows={18}
          placeholder="Start writing your article..."
          className="mt-4 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#00B6CE]"
        />
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Images</h2>

        <div className="mt-4">
          <label className="flex h-32 cursor-pointer items-center justify-center rounded-lg border border-dashed border-[#00B6CE] bg-[#F0FBFD] text-sm font-semibold text-[#009CB2]">
            + Upload images
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => handleImagesChange(e.target.files)}
            />
          </label>

          {images.length > 0 && (
            <p className="mt-2 text-xs text-slate-500">
              {images.length} image{images.length > 1 ? "s" : ""} selected
            </p>
          )}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Videos</h2>

        <div className="mt-4">
          <label className="flex h-32 cursor-pointer items-center justify-center rounded-lg border border-dashed border-[#00B6CE] bg-[#F0FBFD] text-sm font-semibold text-[#009CB2]">
            + Upload videos
            <input
              type="file"
              accept="video/*"
              multiple
              className="hidden"
              onChange={(e) => handleVideosChange(e.target.files)}
            />
          </label>

          {videos.length > 0 && (
            <p className="mt-2 text-xs text-slate-500">
              {videos.length} video{videos.length > 1 ? "s" : ""} selected
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
