"use client";

import { useState } from "react";
import Toggle from "@/src/components/ui/Toggle/Toggle";

export default function PrivacySettings() {
  const [showProfile, setShowProfile] = useState(true);

  const handleDownloadData = () => {
    // Later this will request the user's data from the backend.
    console.log("Download mentor data");
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Privacy & Data
      </p>

      {/* Profile visibility */}
      <div className="mt-[14px] flex items-center justify-between gap-4">
        <p className="text-[12px] text-[#1F1F25]">Show my profile to mentees</p>

        <Toggle checked={showProfile} onChange={setShowProfile} />
      </div>

      {/* Download data */}
      <button
        type="button"
        onClick={handleDownloadData}
        className="mt-[14px] flex h-[35px] w-full items-center justify-center rounded-[8px] border border-[#E5E5EB] bg-white px-4 text-[12px] font-semibold text-[#1F1F25] transition hover:bg-[#F7F7F8]"
      >
        Download My Data
      </button>

      {/* Privacy policy */}
      <button
        type="button"
        className="mt-[14px] text-[11px] font-semibold text-[#00B6CE] transition hover:opacity-80"
      >
        View Privacy Policy →
      </button>
    </section>
  );
}
