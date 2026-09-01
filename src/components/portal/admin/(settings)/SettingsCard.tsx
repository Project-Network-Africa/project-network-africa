"use client";

import DashboardCard from "../(dashboard)/DashboardCard";

import SettingsItem from "./SettingsItem";
import { SettingsItemData, SettingsSectionData } from "./settings.types";

interface SettingsCardProps {
  section: SettingsSectionData;
  onAction?: (item: SettingsItemData) => void;
  footer?: React.ReactNode;
}

export default function SettingsCard({
  section,
  onAction,
  footer,
}: SettingsCardProps) {
  return (
    <DashboardCard className="p-5">
      <h2 className="text-[12px] font-semibold uppercase text-[#737379]">
        {section.title}
      </h2>

      <div className="mt-4 space-y-4">
        {section.items.map((item) => (
          <SettingsItem
            key={`${section.title}-${item.label}`}
            item={item}
            onAction={onAction}
          />
        ))}
      </div>

      {footer && <div className="mt-4">{footer}</div>}
    </DashboardCard>
  );
}
