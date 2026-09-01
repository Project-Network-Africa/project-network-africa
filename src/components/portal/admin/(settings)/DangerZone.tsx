"use client";

import { Button } from "@/src/components/ui";

import DashboardCard from "../(dashboard)/DashboardCard";

import { DangerZoneData } from "./settings.types";

interface DangerZoneProps {
  data: DangerZoneData;
  onAction?: (action: string) => void;
}

export default function DangerZone({ data, onAction }: DangerZoneProps) {
  return (
    <DashboardCard className="mt-4 p-5">
      <h2 className="text-[12px] font-semibold uppercase text-[#DC2727]">
        Danger Zone
      </h2>

      <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[12px] font-semibold text-[#303035]">
            {data.title}
          </p>

          <p className="mt-1 text-[12px] text-[#737379]">{data.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {data.actions.map((action) => (
            <Button
              key={action.label}
              variant="light"
              className={`h-9 rounded-lg px-4 text-[12px] font-semibold ${
                action.variant === "danger"
                  ? "border-[#DC2727] text-[#DC2727]"
                  : ""
              }`}
              onClick={() => onAction?.(action.label)}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
}
