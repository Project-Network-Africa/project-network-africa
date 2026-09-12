"use client";

import { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import { getAdminDashboard } from "@/src/services/admin";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

export default function MentorCapacity() {
  const [totalMentors, setTotalMentors] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentorCapacity = async () => {
      try {
        const response = await getAdminDashboard();

        setTotalMentors(response?.dashboard?.totalMentors ?? 0);
      } catch (error) {
        console.error("MENTOR CAPACITY ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentorCapacity();
  }, []);

  return (
    <DashboardCard className="p-5 font-body">
      <h2 className="text-[15px] font-semibold text-[#5D5D61]">
        MENTOR CAPACITY
      </h2>

      {loading ? (
        <div className="mt-4">
          <LoadingState />
        </div>
      ) : (
        <>
          <p className="mt-2 text-[26px] font-bold leading-8 text-[#00B6CE]">
            {totalMentors}
          </p>

          <p className="mt-1 text-[12px] text-[#85858A]">Active mentors</p>

          <div className="mt-3 divide-y divide-[#E5E8EA] border-t border-[#E5E8EA] text-[#1F1F25]">
            <p className="py-2.5 text-[12px] font-semibold">
              34 unassigned applicants
            </p>

            <p className="py-2.5 text-[12px] font-semibold">
              1:8 mentor-to-mentee ratio
            </p>

            <p className="py-2.5 text-[12px] font-semibold">
              12 overdue feedback reviews
            </p>
          </div>
        </>
      )}
    </DashboardCard>
  );
}
