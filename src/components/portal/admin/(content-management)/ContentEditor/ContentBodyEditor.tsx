"use client";

interface ContentBodyEditorProps {
  body: string;
  readOnly?: boolean;
  onChange: (value: string) => void;
}

export default function ContentBodyEditor({
  body,
  readOnly = false,
  onChange,
}: ContentBodyEditorProps) {
  return (
    <section className="rounded-xl border border-[#DDE1E5] bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[18px] font-bold text-[#1F1F25]">Body content</h2>

        <span className="text-[11px] text-[#737379]">
          1,248 words • 6 min read
        </span>
      </div>

      {/* TOOLBAR */}

      {!readOnly && (
        <div className="mt-4 flex flex-wrap items-center gap-1 rounded-lg bg-[#F1F2F4] p-2">
          <button className="rounded px-3 py-1.5 text-[12px]">↶</button>

          <button className="rounded px-3 py-1.5 text-[12px]">↷</button>

          <button className="rounded border border-[#DDE1E5] bg-white px-3 py-1.5 text-[12px] font-bold">
            B
          </button>

          <button className="rounded px-3 py-1.5 text-[12px] italic">I</button>

          <button className="rounded px-3 py-1.5 text-[12px] underline">
            U
          </button>

          <button className="rounded px-3 py-1.5 text-[12px]">H2</button>

          <button className="rounded px-3 py-1.5 text-[12px]">“ ”</button>

          <button className="rounded px-3 py-1.5 text-[12px]">• List</button>

          <button className="rounded px-3 py-1.5 text-[12px]">Link</button>

          <button className="rounded px-3 py-1.5 text-[12px]">+ Image</button>
        </div>
      )}

      <textarea
        value={body}
        readOnly={readOnly}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-3 min-h-[390px] w-full resize-none rounded-lg border border-[#DDE1E5] p-4 text-[13px] leading-6 text-[#303035] outline-none focus:border-[#00B6CE] ${
          readOnly ? "bg-[#F8F8F8]" : "bg-white"
        }`}
      />

      {!readOnly && (
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="rounded-lg border border-[#DDE1E5] px-4 py-2 text-[12px] font-medium text-[#00B6CE]"
          >
            + Add image, video, quote or embed
          </button>

          <span className="text-[11px] text-[#008F58]">Autosave enabled</span>
        </div>
      )}
    </section>
  );
}
