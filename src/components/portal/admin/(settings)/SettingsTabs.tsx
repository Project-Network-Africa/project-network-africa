"use client";

import { SettingsTab } from "./settings.types";

interface SettingsTabsProps {
  tabs: SettingsTab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export default function SettingsTabs({
  tabs,
  activeTab,
  onChange,
}: SettingsTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const active = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`h-9 rounded-lg border px-4 text-[12px] font-semibold transition ${
              active
                ? "border-[#00B6CE] bg-[#00B6CE] text-white"
                : "border-[#DDE1E5] bg-white text-[#303035] hover:border-[#00B6CE] hover:text-[#00B6CE]"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
