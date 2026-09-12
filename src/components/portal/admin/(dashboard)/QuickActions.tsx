"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui";
import DashboardCard from "./DashboardCard";

export default function QuickActions() {
  const router = useRouter();

  return (
    <DashboardCard className="p-5">
      <h2 className="text-[15px] font-semibold text-[#5D5D61]">
        QUICK ACTIONS
      </h2>

      <div className="mt-3 flex flex-col gap-2">
        <Button
          variant="light"
          className="h-[34px] w-full rounded-lg px-4 py-1 text-[12px] font-semibold hover:bg-[#00B6CE] hover:text-white"
          onClick={() => router.push("/admin/cohorts")}
        >
          Create cohort
        </Button>

        <Button
          variant="light"
          className="h-[34px] w-full rounded-lg hover:bg-[#00B6CE] hover:text-white px-4 py-1 text-[12px] font-semibold"
          onClick={() => router.push("/admin/applicants")}
        >
          Review applications
        </Button>

        <Button
          variant="light"
          className="h-[34px] w-full rounded-lg hover:bg-[#00B6CE] hover:text-white px-4 py-1 text-[12px] font-semibold"
          onClick={() => router.push("/admin/mentors")}
        >
          Invite mentor
        </Button>

        <Button
          variant="light"
          className="h-[34px] w-full rounded-lg hover:bg-[#00B6CE] hover:text-white px-4 py-1 text-[12px] font-semibold"
          onClick={() => router.push("/admin/content-management/create")}
        >
          Publish content
        </Button>
      </div>
    </DashboardCard>
  );
}
