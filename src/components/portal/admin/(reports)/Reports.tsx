"use client";

import { useCallback } from "react";

import { Button } from "@/src/components/ui";

import ReportCard from "./ReportCard";
import CustomReportBuilder from "./CustomReportBuilder";
import ReportHistory from "./ReportHistory";
import ScheduledReports from "./ScheduledReports";

import { reportTypes } from "./reports-data";
import { ReportType } from "./reports.types";

export default function Reports() {
  const handleGenerateReport = useCallback((report: ReportType) => {
    console.log("Generate report:", report.title);
  }, []);

  const handleScheduleReport = useCallback((report: ReportType) => {
    console.log("Schedule report:", report.title);
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* PAGE HEADER */}

        <div className="flex justify-end gap-2">
          <Button
            variant="light"
            className="h-9 rounded-lg px-4 text-[12px] font-semibold"
            onClick={() => console.log("Scheduled reports")}
          >
            Scheduled reports
          </Button>

          <Button
            variant="primary"
            className="h-9 rounded-lg px-4 text-[12px] font-semibold"
            onClick={() => console.log("Create report")}
          >
            Create report
          </Button>
        </div>

        {/* REPORT TYPES */}

        <section className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reportTypes.map((report) => (
            <ReportCard
              key={report.id}
              report={report}
              onGenerate={handleGenerateReport}
              onSchedule={handleScheduleReport}
            />
          ))}
        </section>

        {/* CUSTOM REPORT BUILDER */}

        <CustomReportBuilder />

        {/* REPORT HISTORY + SCHEDULED REPORTS */}

        <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ReportHistory />
          </div>

          <div className="lg:col-span-1">
            <ScheduledReports />
          </div>
        </section>
      </div>
    </main>
  );
}
