// src/components/portal/admin/content/create/shared/ContentSEO.tsx

interface Props {
  searchTitle: string;
  metaDescription: string;

  onSearchTitleChange: (value: string) => void;
  onMetaDescriptionChange: (value: string) => void;
}

export default function ContentSEO({
  searchTitle,
  metaDescription,
  onSearchTitleChange,
  onMetaDescriptionChange,
}: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold">SEO & sharing</h2>

      <label className="mt-4 block">
        <span className="mb-1 block text-xs text-slate-500">Search title</span>

        <input
          value={searchTitle}
          onChange={(e) => onSearchTitleChange(e.target.value)}
          placeholder="Search title preview"
          className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#00B6CE]"
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-1 block text-xs text-slate-500">
          Meta description
        </span>

        <textarea
          value={metaDescription}
          onChange={(e) => onMetaDescriptionChange(e.target.value)}
          rows={3}
          placeholder="Write a clear search description."
          className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#00B6CE]"
        />
      </label>

      <div className="mt-3 rounded-lg bg-slate-50 p-3">
        <p className="text-xs text-green-600">
          pnafrica.org/content/new-content
        </p>

        <p className="mt-1 text-sm font-semibold text-[#009CB2]">
          {searchTitle || "Search title preview"}
        </p>
      </div>
    </section>
  );
}
