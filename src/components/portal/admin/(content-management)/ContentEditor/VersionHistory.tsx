"use client";

import { VersionHistoryProps } from "./content-editor.types";

export default function VersionHistory({ versions = [] }: VersionHistoryProps) {
  return (
    <section className="rounded-xl border border-[#DDE1E5] bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[17px] font-bold text-[#1F1F25]">
          Version history
        </h2>

        <button
          type="button"
          className="text-[12px] font-semibold text-[#00B6CE]"
        >
          View all
        </button>
      </div>

      {versions.length > 0 ? (
        <div className="mt-4 space-y-3">
          {versions.map((version) => (
            <div
              key={version.version}
              className="flex items-center justify-between gap-3"
            >
              <div>
                <p className="text-[12px] font-medium text-[#303035]">
                  {version.version} • {version.author}
                </p>

                <p className="mt-1 text-[11px] text-[#737379]">
                  {version.date}
                </p>
              </div>

              {version.action && (
                <button
                  type="button"
                  className="text-[11px] font-semibold text-[#00B6CE]"
                >
                  {version.action}
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-[12px] text-[#737379]">No previous versions.</p>
      )}
    </section>
  );
}
