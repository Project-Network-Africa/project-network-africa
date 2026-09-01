import DashboardCard from "../(dashboard)/DashboardCard";

import { DetailSectionProps } from "./DetailPage.types";

export default function DetailSection({ title, items }: DetailSectionProps) {
  return (
    <DashboardCard className="p-5">
      <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
        {title}
      </h3>

      <div className="mt-4 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                item.highlight ? "bg-[#00B6CE]" : "bg-[#DDE1E5]"
              }`}
            />

            <p className="text-[12px] leading-5 text-[#303035]">{item.value}</p>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
