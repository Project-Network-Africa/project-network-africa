"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui";

import { reportBuilderData } from "./reports-data";

export default function CustomReportBuilder() {
  const [dataset, setDataset] = useState(
    reportBuilderData.datasets[0]?.value ?? "",
  );

  const [dateRange, setDateRange] = useState(
    reportBuilderData.dateRanges[2]?.value ?? "",
  );

  const [groupBy, setGroupBy] = useState(
    reportBuilderData.groupBy[0]?.value ?? "",
  );

  const [metric, setMetric] = useState(
    reportBuilderData.metrics[0]?.value ?? "",
  );

  const [format, setFormat] = useState(
    reportBuilderData.formats[0]?.value ?? "",
  );

  const [includeComparison, setIncludeComparison] = useState(false);
  const [includeCharts, setIncludeCharts] = useState(false);
  const [emailWhenReady, setEmailWhenReady] = useState(false);

  const handleGenerate = () => {
    console.log("Generate custom report:", {
      dataset,
      dateRange,
      groupBy,
      metric,
      format,
      includeComparison,
      includeCharts,
      emailWhenReady,
    });
  };

  return (
    <section className="mt-4 rounded-xl border border-[#DDE1E5] bg-white p-5 shadow-sm">
      {/* HEADER */}

      <h2 className="text-[12px] font-semibold uppercase text-[#737379]">
        Custom report builder
      </h2>

      <p className="mt-2 text-[12px] text-[#737379]">
        Choose a dataset, date range and breakdown. Reports can be exported or
        scheduled.
      </p>

      {/* FILTERS */}

      <div className="mt-3 flex flex-col gap-2 lg:flex-row">
        <select
          value={dataset}
          onChange={(event) => setDataset(event.target.value)}
          className="h-9 flex-1 rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] font-medium text-[#303035] outline-none"
        >
          {reportBuilderData.datasets.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={dateRange}
          onChange={(event) => setDateRange(event.target.value)}
          className="h-9 flex-1 rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] font-medium text-[#303035] outline-none"
        >
          {reportBuilderData.dateRanges.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={groupBy}
          onChange={(event) => setGroupBy(event.target.value)}
          className="h-9 flex-1 rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] font-medium text-[#303035] outline-none"
        >
          {reportBuilderData.groupBy.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={metric}
          onChange={(event) => setMetric(event.target.value)}
          className="h-9 flex-1 rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] font-medium text-[#303035] outline-none"
        >
          {reportBuilderData.metrics.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={format}
          onChange={(event) => setFormat(event.target.value)}
          className="h-9 flex-1 rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] font-medium text-[#303035] outline-none"
        >
          {reportBuilderData.formats.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <Button
          variant="primary"
          className="h-9 rounded-lg px-5 text-[12px] font-semibold"
          onClick={handleGenerate}
        >
          Generate report
        </Button>
      </div>

      {/* OPTIONS */}

      <div className="mt-4 flex flex-wrap items-center gap-5">
        <label className="flex cursor-pointer items-center gap-1.5 text-[12px] text-[#737379]">
          <input
            type="checkbox"
            checked={includeComparison}
            onChange={(event) => setIncludeComparison(event.target.checked)}
            className="h-3.5 w-3.5"
          />
          Include comparison period
        </label>

        <label className="flex cursor-pointer items-center gap-1.5 text-[12px] text-[#737379]">
          <input
            type="checkbox"
            checked={includeCharts}
            onChange={(event) => setIncludeCharts(event.target.checked)}
            className="h-3.5 w-3.5"
          />
          Include charts
        </label>

        <label className="flex cursor-pointer items-center gap-1.5 text-[12px] text-[#737379]">
          <input
            type="checkbox"
            checked={emailWhenReady}
            onChange={(event) => setEmailWhenReady(event.target.checked)}
            className="h-3.5 w-3.5"
          />
          Email when ready
        </label>
      </div>
    </section>
  );
}
