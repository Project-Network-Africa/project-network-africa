"use client";

import { Button } from "@/src/components/ui";
import { employerSettingsData } from "@/src/data/employer/settings";

export default function Billing() {
  const handleManageBilling = () => {
    console.log("Manage billing");
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Billing
      </p>

      <p className="mt-[14px] text-[13px] text-[#1F1F25]">
        {employerSettingsData.billing.plan} — Renews{" "}
        {employerSettingsData.billing.renewalDate}
      </p>

      <Button
        variant="light"
        onClick={handleManageBilling}
        className="mt-[14px] h-[35px] rounded-[8px] border border-[#E5E5EB] px-4 text-[11px] font-semibold"
      >
        Manage Billing
      </Button>
    </section>
  );
}
