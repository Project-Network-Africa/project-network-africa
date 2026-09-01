"use client";

import { reportHistory } from "./reports-data";

export default function ReportHistory() {
  return (
    <section className="h-full rounded-xl border border-[#DDE1E5] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-[12px] font-semibold uppercase text-[#737379]">
          Report history
        </h2>

        <button
          type="button"
          className="text-[12px] font-medium text-[#00B6CE] transition hover:text-[#009CB2]"
          onClick={() => console.log("View all reports")}
        >
          View all
        </button>
      </div>

      <div className="mt-5 space-y-5">
        {reportHistory.map((report) => (
          <div
            key={report.id}
            className="grid grid-cols-1 gap-2 text-[12px] md:grid-cols-[2fr_0.5fr_1fr_0.8fr_0.8fr] md:items-center"
          >
            <p className="font-medium text-[#303035]">{report.name}</p>

            <p className="text-[#737379]">{report.format}</p>

            <p className="text-[#737379]">{report.date}</p>

            <p
              className={
                report.status === "Ready"
                  ? "font-medium text-[#008F58]"
                  : "font-medium text-[#F26B21]"
              }
            >
              {report.status}
            </p>

            <button
              type="button"
              className="text-left font-medium text-[#00B6CE] transition hover:text-[#009CB2] md:text-center"
              onClick={() => console.log("Download:", report.name)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
