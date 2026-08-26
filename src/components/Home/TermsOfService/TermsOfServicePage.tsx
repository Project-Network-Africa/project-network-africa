"use client";

import { Button } from "@/src/components/ui";
import { termsOfServiceSections } from "@/src/data/public/terms";
import LegalSection from "./LegalSection";

export default function TermsOfServicePage() {
  const handleDownload = () => {
    window.open("/documents/terms-of-service.pdf", "_blank");
  };

  const handlePrivacyPolicy = () => {
    window.location.href = "/privacy-policy";
  };

  return (
    <main className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1290px] px-5 py-[54px] sm:px-8 md:px-10 lg:px-0">
        {/* Header */}
        <div>
          <p className="text-[12px] font-semibold uppercase leading-[100%] text-[#00B6CE]">
            Terms of Service
          </p>

          <h1 className="mt-[24px] text-[28px] font-bold leading-[110%] tracking-[-0.02em] text-[#1F1F25] sm:text-[30px]">
            The rules for using PN Africa
          </h1>

          <p className="mt-[20px] text-[12px] leading-[100%] text-[#5D5D61]">
            Last updated: July 2026
          </p>

          <p className="mt-[22px] text-[13px] leading-[145%] text-[#1F1F25]">
            These Terms of Service (“Terms”) govern your access to and use of
            the PN Africa platform. By creating an account or using the
            Platform, you agree to these Terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="mt-[18px] space-y-[20px]">
          {termsOfServiceSections.map((section) => (
            <LegalSection key={section.id} section={section} />
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
            onClick={handlePrivacyPolicy}
            className="h-[45px] rounded-[9px] px-[24px] text-[12px] font-semibold"
          >
            View Privacy Policy
          </Button>
        </div>
      </div>
    </main>
  );
}
