"use client";

import { useState } from "react";
import { employerSettingsData } from "@/src/data/employer/settings";
import { Button } from "@/src/components/ui";

export default function PrivacyData() {
  const [showCompanyProfile, setShowCompanyProfile] = useState(
    employerSettingsData.privacy.showCompanyProfile,
  );

  const handlePrivacyPolicy = () => {
    window.location.href = "/privacy-policy";
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white shadow-[0px_2px_8px_0px_#0000000A] py-[20px]">
      <div className="px-[21px] ">
        <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
          Privacy & Data
        </p>

        <div className="mt-[14px] flex items-center justify-between gap-5">
          <p className="text-[13px] text-[#1F1F25]">
            Show company profile to candidates
          </p>

          <button
            type="button"
            role="switch"
            aria-checked={showCompanyProfile}
            aria-label="Show company profile to candidates"
            onClick={() => setShowCompanyProfile((current) => !current)}
            className={`relative flex h-[22px] w-[40px] shrink-0 items-center rounded-full p-[3px] transition-colors duration-200 ${
              showCompanyProfile ? "bg-[#00B6CE]" : "bg-[#D5D5DA]"
            }`}
          >
            <span
              className={`h-[16px] w-[16px] rounded-full bg-white shadow-sm transition-transform duration-200 ${
                showCompanyProfile ? "translate-x-[18px]" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      <Button
        variant="link"
        onClick={handlePrivacyPolicy}
        className="mt-[14px] w-fit p-0 text-[11px] font-semibold text-[#00B6CE] hover:opacity-80"
      >
        View Privacy Policy →
      </Button>
    </section>
  );
}
