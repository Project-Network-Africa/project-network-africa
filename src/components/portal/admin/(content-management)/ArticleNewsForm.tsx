// src/components/portal/admin/content/create/ArticleNewsForm.tsx

"use client";

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
              <option>PN Africa News</option>
              <option>Community</option>
              <option>Events</option>
              <option>Partnerships</option>
              <option>Success Stories</option>
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
              <span className="mb-1.5 block text-xs font-medium">Excerpt</span>

              <textarea
                rows={4}
                value={value("excerpt")}
                onChange={(e) => update("excerpt", e.target.value)}
                placeholder="Write a short summary..."
                className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#00B6CE]"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Body content</h2>

        <textarea
          value={value("body")}
          onChange={(e) => update("body", e.target.value)}
          rows={18}
          placeholder="Start writing your article..."
          className="mt-4 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#00B6CE]"
        />
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Featured image</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() => update("featuredImage", "article-cover.jpg")}
            className="flex h-32 items-center justify-center rounded-lg border border-dashed border-[#00B6CE] bg-[#F0FBFD] text-sm font-semibold text-[#009CB2]"
          >
            + Upload image
          </button>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Alternative text
            </span>

            <input
              value={value("imageAltText")}
              onChange={(e) => update("imageAltText", e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm"
            />
          </label>
        </div>
      </section>
    </div>
  );
}
