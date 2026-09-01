"use client";

import { SettingsItemData } from "./settings.types";

interface SettingsItemProps {
  item: SettingsItemData;
  onAction?: (item: SettingsItemData) => void;
}

export default function SettingsItem({ item, onAction }: SettingsItemProps) {
  const getActionClassName = () => {
    switch (item.actionVariant) {
      case "success":
        return "text-[#008F58]";

      case "danger":
        return "text-[#F26B21]";

      default:
        return "text-[#00B6CE]";
    }
  };

  return (
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p className="text-[12px] font-semibold text-[#303035]">{item.label}</p>

        <p className="mt-1 text-[12px] leading-4 text-[#737379]">
          {item.value}
        </p>
      </div>

      {item.action && (
        <button
          type="button"
          className={`shrink-0 text-[12px] font-semibold transition hover:opacity-70 ${getActionClassName()}`}
          onClick={() => onAction?.(item)}
        >
          {item.action}
        </button>
      )}
    </div>
  );
}
