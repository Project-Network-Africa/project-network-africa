"use client";

import { Button } from "@/src/components/ui";

import DashboardCard from "../(dashboard)/DashboardCard";

import { deliveryHealth, deliveryWarnings } from "./notifications-data";

export default function DeliveryHealth() {
  return (
    <DashboardCard className="p-5">
      <h2 className="text-[12px] font-semibold uppercase text-[#737379]">
        Delivery health
      </h2>

      <div className="mt-4 space-y-4">
        {deliveryHealth.map((item) => (
          <div key={item.channel}>
            <p className="text-[12px] font-semibold text-[#303035]">
              {item.channel}
            </p>

            <p className="mt-2 text-[12px] text-[#737379]">{item.summary}</p>
          </div>
        ))}
      </div>

      {/* Warning */}

      <div className="mt-4">
        <p className="text-[12px] font-semibold uppercase text-[#DC2727]">
          Requires attention
        </p>

        <div className="mt-3 space-y-3">
          {deliveryWarnings.map((warning) => (
            <p key={warning} className="text-[12px] text-[#737379]">
              {warning}
            </p>
          ))}
        </div>
      </div>

      <Button
        variant="light"
        className="mt-3 h-9 rounded-lg px-3 text-[12px] font-medium"
        onClick={() => console.log("Review failures")}
      >
        Review failures
      </Button>
    </DashboardCard>
  );
}
