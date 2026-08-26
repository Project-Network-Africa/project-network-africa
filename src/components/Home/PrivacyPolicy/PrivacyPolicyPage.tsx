"use client";

import { Button } from "@/src/components/ui";
import { privacyPolicySections } from "@/src/data/public/privacy";
import PrivacySection from "./PrivacySection";

export default function PrivacyPolicyPage() {
  const handleDownload = () => {
    // Replace with the actual PDF path when available.
    window.open("/documents/privacy-policy.pdf", "_blank");
  };

  const handleManageData = () => {
    // Update this route to wherever your data/privacy settings live.
    window.location.href = "/settings";
  };

  return (
    <main className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-[56px] sm:px-8 md:px-10 lg:px-0">
        {/* Header */}
        <div>
          <p className="text-[12px] font-semibold uppercase leading-[100%] text-[#00B6CE]">
            Privacy Policy
          </p>

          <h1 className="mt-[25px] text-[28px] font-bold leading-[110%] tracking-[-0.02em] text-[#1F1F25] sm:text-[30px]">
            Your privacy matters to us
          </h1>

          <p className="mt-[20px] text-[12px] leading-[100%] text-[#5D5D61]">
            Last updated: July 2026
          </p>
        </div>

        {/* Policy Sections */}
        <div className="mt-[23px] space-y-[20px]">
          {privacyPolicySections.map((section) => (
            <PrivacySection key={section.id} section={section} />
          ))}
        </div>

        {/* Actions */}
        <div className="mt-[20px] flex flex-col gap-[12px] sm:flex-row">
          <Button
            variant="light"
            onClick={handleDownload}
            className="h-[45px] rounded-[9px] border border-[#E5E5EB] px-[23px] text-[12px] font-semibold"
          >
            Download Full Terms (PDF)
          </Button>

          <Button
            variant="dark"
            onClick={handleManageData}
            className="h-[45px] rounded-[9px] px-[24px] text-[12px] font-semibold"
          >
            View Privacy Policy
          </Button>
        </div>
      </div>
    </main>
  );
}
