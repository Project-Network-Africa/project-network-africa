// src/components/portal/admin/content/create/ResourceContentForm.tsx

"use client";

interface Props {
  data: Record<string, unknown>;
  onChange: (data: Record<string, unknown>) => void;
}

const input =
  "h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#00B6CE]";

const textarea =
  "w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#00B6CE]";

export default function ResourceContentForm({ data, onChange }: Props) {
  const value = (key: string) =>
    typeof data[key] === "string" ? String(data[key]) : "";

  const update = (key: string, value: unknown) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  return (
    <div className="space-y-4">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-4 text-lg font-semibold">Resource details</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Resource title
            </span>

            <input
              value={value("title")}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Portfolio Case Study Checklist"
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">URL slug</span>

            <input
              value={value("slug")}
              onChange={(e) => update("slug", e.target.value)}
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Resource category
            </span>

            <select
              value={value("category")}
              onChange={(e) => update("category", e.target.value)}
              className={input}
            >
              <option value="">Select category</option>

              <option>Learning Material</option>
              <option>Template & Checklist</option>
              <option>Portfolio Guide</option>
              <option>Career Resource</option>
              <option>Interview Preparation</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Resource format
            </span>

            <select
              value={value("format")}
              onChange={(e) => update("format", e.target.value)}
              className={input}
            >
              <option value="">Select format</option>

              <option>Guide / PDF</option>
              <option>Template</option>
              <option>Checklist</option>
              <option>Video</option>
              <option>External Link</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">Access</span>

            <select
              value={value("access")}
              onChange={(e) => update("access", e.target.value)}
              className={input}
            >
              <option>Public download</option>
              <option>Registered users</option>
              <option>Applicants only</option>
              <option>Mentors only</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">Audience</span>

            <select
              value={value("audience")}
              onChange={(e) => update("audience", e.target.value)}
              className={input}
            >
              <option>Learners & alumni</option>
              <option>Applicants</option>
              <option>Mentors</option>
              <option>Employers</option>
              <option>General public</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">File</span>

            <input
              value={value("file")}
              onChange={(e) => update("file", e.target.value)}
              placeholder="portfolio-checklist.pdf"
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Website section
            </span>

            <select
              value={value("websiteSection")}
              onChange={(e) => update("websiteSection", e.target.value)}
              className={input}
            >
              <option>Resources</option>
              <option>Learning</option>
              <option>Career</option>
              <option>Community</option>
            </select>
          </label>

          <div className="md:col-span-2">
            <label>
              <span className="mb-1.5 block text-xs font-medium">
                Resource summary
              </span>

              <textarea
                rows={4}
                value={value("summary")}
                onChange={(e) => update("summary", e.target.value)}
                className={textarea}
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
          rows={15}
          placeholder="Write the resource content..."
          className={`${textarea} mt-4`}
        />

        <button
          type="button"
          className="mt-3 h-10 w-full rounded-lg border border-[#00B6CE] text-sm font-semibold text-[#009CB2]"
        >
          + Add image, video, quote or embed
        </button>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Resource cover image</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() => update("coverImage", "resource-cover.jpg")}
            className="flex h-32 items-center justify-center rounded-lg border border-dashed border-[#00B6CE] bg-[#F0FBFD] text-sm font-semibold text-[#009CB2]"
          >
            + Upload image
          </button>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Alternative text
            </span>

            <input
              value={value("altText")}
              onChange={(e) => update("altText", e.target.value)}
              className={input}
            />
          </label>
        </div>
      </section>
    </div>
  );
}
