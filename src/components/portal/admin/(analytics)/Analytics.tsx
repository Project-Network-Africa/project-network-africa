"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui";

import FunnelChart from "./FunnelChart";
import RevenueTrend from "./RevenueTrend";
import CohortPerformance from "./CohortPerformance";
import PerformanceCard from "./PerformanceCard";

import {
  analyticsStats,
  applicationFunnel,
  revenueTrend,
  revenueSummary,
  cohortPerformance,
  mentorPerformance,
  employerActivity,
} from "./analytics-data";
import AnalyticsStatCard from "./AnalyticsStatCard";

export default function Analytics() {
  const [cohort, setCohort] = useState("All cohorts");
  const [period, setPeriod] = useState("Last 90 days");

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex w-full justify-end">
          <div className="grid w-full grid-cols-2 gap-2 md:flex md:w-auto md:flex-wrap md:items-center">
            {/* Cohort */}
            <select
              value={cohort}
              onChange={(event) => setCohort(event.target.value)}
              className="h-9 w-full rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-semibold text-[#303035] outline-none md:w-auto"
            >
              <option>All cohorts</option>
              <option>Cohort 6</option>
              <option>Cohort 5</option>
              <option>Cohort 4</option>
              <option>Cohort 3</option>
            </select>

            {/* Period */}
            <select
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              className="h-9 w-full rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-semibold text-[#303035] outline-none md:w-auto"
            >
              <option>Last 90 days</option>
              <option>Last 30 days</option>
              <option>Last 6 months</option>
              <option>This year</option>
            </select>

            {/* Compare period */}
            <Button
              variant="light"
              className="h-9 w-full rounded-lg px-4 text-[12px] font-semibold md:w-auto"
              onClick={() => {
                console.log("Compare period");
              }}
            >
              Compare period
            </Button>

            {/* Export */}
            <Button
              variant="primary"
              className="h-9 w-full rounded-lg px-5 text-[12px] font-semibold md:w-auto"
              onClick={() => {
                console.log("Export analytics");
              }}
            >
              Export
            </Button>
          </div>
        </div>

        {/* TOP STATS */}

        <section className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {analyticsStats.map((stat) => (
            <AnalyticsStatCard key={stat.label} stat={stat} />
          ))}
        </section>

        {/* FUNNEL + REVENUE */}

        <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FunnelChart data={applicationFunnel} />
          </div>

          <div className="lg:col-span-1">
            <RevenueTrend data={revenueTrend} summary={revenueSummary} />
          </div>
        </section>

        {/* COHORT + MENTOR + EMPLOYER */}

        <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <CohortPerformance data={cohortPerformance} />

          <PerformanceCard data={mentorPerformance} />

          {/* <PerformanceCard data={employerActivity} /> */}
        </section>
      </div>
    </main>
  );
}
