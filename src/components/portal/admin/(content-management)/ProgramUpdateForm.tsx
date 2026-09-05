// src/components/portal/admin/content/create/ProgramUpdateForm.tsx

"use client";

interface Props {
  data: Record<string, unknown>;
  onChange: (data: Record<string, unknown>) => void;
}

const input =
  "h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#00B6CE]";

const textarea =
  "w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#00B6CE]";

export default function ProgramUpdateForm({ data, onChange }: Props) {
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
        <h2 className="mb-4 text-lg font-semibold">Program update details</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Update title
            </span>

            <input
              value={value("title")}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Enter update title"
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
              Affected programme
            </span>

            <select
              value={value("affectedProgramme")}
              onChange={(e) => update("affectedProgramme", e.target.value)}
              className={input}
            >
              <option value="">Select programme</option>

              <option>Product Design</option>
              <option>Software Engineering</option>
              <option>Data Analysis</option>
              <option>Product Management</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Update type
            </span>

            <select
              value={value("updateType")}
              onChange={(e) => update("updateType", e.target.value)}
              className={input}
            >
              <option value="">Select update type</option>

              <option>Cohort Announcement</option>
              <option>Schedule Change</option>
              <option>Curriculum Update</option>
              <option>Eligibility</option>
              <option>Programme Information</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Effective date
            </span>

            <input
              value={value("effectiveDate")}
              onChange={(e) => update("effectiveDate", e.target.value)}
              placeholder="15 Sep 2026"
              className={input}
            />
          </label>

          <div>
            <span className="mb-1.5 block text-xs font-medium">
              Update summary
            </span>

            <textarea
              rows={4}
              value={value("summary")}
              onChange={(e) => update("summary", e.target.value)}
              placeholder="Write a short summary..."
              className={textarea}
            />
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Body content</h2>

          <span className="text-xs text-slate-400">Rich text editor</span>
        </div>

        <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
          <div className="flex flex-wrap gap-4 border-b bg-slate-50 px-4 py-3 text-xs text-slate-600">
            <button type="button">↶</button>
            <button type="button">↷</button>
            <button type="button" className="font-bold">
              B
            </button>
            <button type="button">I</button>
            <button type="button">U</button>
            <button type="button">H2</button>
            <button type="button">List</button>
            <button type="button">Link</button>
            <button type="button">+ Image</button>
          </div>

          <textarea
            value={value("body")}
            onChange={(e) => update("body", e.target.value)}
            rows={15}
            placeholder="Start writing your programme update..."
            className="w-full resize-none border-0 px-4 py-4 text-sm outline-none"
          />
        </div>
      </section>
    </div>
  );
}
