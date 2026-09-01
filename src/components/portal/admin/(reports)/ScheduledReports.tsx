"use client";

import { Button } from "@/src/components/ui";

import { scheduledReports } from "./reports-data";

export default function ScheduledReports() {
  return (
    <section className="h-full rounded-xl border border-[#DDE1E5] bg-white p-5 shadow-sm">
      <h2 className="text-[12px] font-semibold uppercase text-[#737379]">
        Scheduled reports
      </h2>

      <div className="mt-4 space-y-4">
        {scheduledReports.map((report) => (
          <div key={report.id}>
            <p className="text-[12px] font-semibold text-[#303035]">
              {report.name}
            </p>

            <p className="mt-1 text-[12px] text-[#737379]">
              {report.schedule} · {report.recipients}
            </p>
          </div>
        ))}
      </div>

      <Button
        variant="light"
        className="mt-4 h-9 rounded-lg px-4 text-[12px] font-semibold"
        onClick={() => console.log("Manage schedules")}
      >
        Manage schedules
      </Button>
    </section>
  );
}
