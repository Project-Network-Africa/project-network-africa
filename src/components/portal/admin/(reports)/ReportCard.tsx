"use client";

import { Button } from "@/src/components/ui";

import { ReportType } from "./reports.types";

interface ReportCardProps {
  report: ReportType;
  onGenerate?: (report: ReportType) => void;
  onSchedule?: (report: ReportType) => void;
}

export default function ReportCard({
  report,
  onGenerate,
  onSchedule,
}: ReportCardProps) {
  return (
    <div className="rounded-xl border border-[#DDE1E5] bg-white p-4 shadow-sm">
      <h2 className="text-[15px] font-semibold text-[#303035]">
        {report.title}
      </h2>

      <p className="mt-3 min-h-[38px] text-[12px] leading-5 text-[#737379]">
        {report.description}
      </p>

      <p className="mt-3 text-[12px] font-medium text-[#00B6CE]">
        {report.frequency}
      </p>

      <div className="mt-3 flex items-center gap-2">
        <Button
          variant="primary"
          className="h-9 rounded-lg px-4 text-[12px] font-semibold"
          onClick={() => onGenerate?.(report)}
        >
          Generate
        </Button>

        <Button
          variant="light"
          className="h-9 rounded-lg px-4 text-[12px] font-semibold"
          onClick={() => onSchedule?.(report)}
        >
          Schedule
        </Button>
      </div>
    </div>
  );
}
