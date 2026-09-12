"use client";

import { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import { getCohorts } from "@/src/services/cohorts";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

type Cohort = {
  _id: string;
  name: string;
  capacity: number;
  applicants: unknown[];
};

export default function CohortHealth() {
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCohorts = async () => {
      try {
        const response = await getCohorts();

        console.log("COHORTS API RESPONSE:", response);

        setCohorts(response?.cohorts ?? []);
      } catch (error) {
        console.error("COHORT HEALTH ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCohorts();
  }, []);

  return (
    <DashboardCard className="p-5 font-body">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[15px] font-semibold text-[#5D5D61]">
          COHORT HEALTH
        </h2>

        <button
          type="button"
          className="text-[12px] font-semibold text-[#00B6CE]"
        >
          View cohorts
        </button>
      </div>

      {loading ? (
        <div className="mt-4">
          <LoadingState />
        </div>
      ) : (
        <div className="mt-3 space-y-2">
          {cohorts.map((cohort) => {
            const enrolled = cohort.applicants?.length ?? 0;
            const capacity = cohort.capacity ?? 0;
            const percentage =
              capacity > 0 ? Math.round((enrolled / capacity) * 100) : 0;
            const spaces = Math.max(capacity - enrolled, 0);

            return (
              <div
                key={cohort._id}
                className="rounded-lg bg-[#FAFBFC] px-3 py-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[12px] font-semibold text-[#303035]">
                    {cohort.name}
                  </p>

                  <span className="text-[12px] font-semibold text-[#00B6CE]">
                    {percentage}% capacity
                  </span>
                </div>

                <div className="mt-1 flex items-center justify-between gap-3">
                  <p className="text-[11px] text-[#85858A]">
                    {enrolled} / {capacity} enrolled
                  </p>

                  <p className="text-[11px] text-[#737379]">{spaces} spaces</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </DashboardCard>
  );
}
