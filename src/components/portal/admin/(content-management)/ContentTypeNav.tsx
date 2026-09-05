"use client";

import { ContentTypeNavItem } from "./content.types";

interface ContentTypeNavProps {
  items: ContentTypeNavItem[];
  activeType: string;
  onChange: (type: string) => void;
}

export default function ContentTypeNav({
  items,
  activeType,
  onChange,
}: ContentTypeNavProps) {
  return (
    <div className="mt-5 overflow-x-auto rounded-lg border border-[#DDE1E5] bg-white p-1">
      <div className="flex min-w-max items-center">
        {items.map((item) => {
          const active = activeType === item.label;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onChange(item.label)}
              className={`rounded-lg px-6 py-2.5 text-[12px] font-medium transition ${
                active
                  ? "bg-[#E1F6F9] font-semibold text-[#00A9BF]"
                  : "text-[#303035] hover:bg-[#F6F6F7]"
              }`}
            >
              {item.label}

              <span
                className={`ml-1 ${
                  active ? "text-[#00A9BF]" : "text-[#737379]"
                }`}
              >
                {item.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
