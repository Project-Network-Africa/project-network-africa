"use client";

import { Button } from "@/src/components/ui";
import Toggle from "@/src/components/ui/Toggle/Toggle";

interface PrivacyPreference {
  id: string;
  label: string;
  enabled: boolean;
}

interface PrivacyDataProps {
  preferences: PrivacyPreference[];
  onToggleChange: (id: string, value: boolean) => void;
}

export default function PrivacyData({
  preferences,
  onToggleChange,
}: PrivacyDataProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
        Privacy & Data
      </p>

      {/* Privacy preferences */}
      <div className="flex flex-col gap-4">
        {preferences.map((preference) => (
          <div
            key={preference.id}
            className="flex items-center justify-between"
          >
            <span className="text-[13px] text-[#1F1F25]">
              {preference.label}
            </span>

            <Toggle
              checked={preference.enabled}
              onChange={(value) => onToggleChange(preference.id, value)}
            />
          </div>
        ))}
      </div>

      {/* Data actions */}
      <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
        <Button
          variant="light"
          className="h-[35px] px-4 py-[10px] text-[12px] font-semibold"
        >
          Download My Data
        </Button>

        <Button
          variant="light"
          className="h-[35px] px-4 py-[10px] text-[12px] font-semibold"
        >
          Request Data Deletion
        </Button>
      </div>

      <Button
        variant="link"
        className="mt-3 h-auto w-fit p-0 text-[11px] font-semibold text-[#00B6CE]"
      >
        View Privacy Policy →
      </Button>
    </section>
  );
}
