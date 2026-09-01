import { ReactNode } from "react";

export interface StatCard {
  label: string;
  value: string;
  helper?: string;
  helperColor?: string;
  icon?: ReactNode;
}

interface StatCardsProps {
  stats: StatCard[];
  columns?: 2 | 3 | 4 | 5;
}

export default function StatCards({ stats, columns = 4 }: StatCardsProps) {
  const gridColumns = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
  };

  return (
    <div
      className={`grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 ${gridColumns[columns]}`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="min-w-0 rounded-[14px] border border-[#DDE1E5] bg-white p-5"
        >
          <p className="mt-1 text-[28px] font-bold leading-none text-[#1F1F25]">
            {stat.value}
          </p>
          <p className="text-[12px] mt-2 font-medium text-[#737379]">
            {stat.label}
          </p>

          {stat.helper && (
            <p
              className={`mt-2 text-[11px] ${
                stat.helperColor ?? "text-[#5D5D61]"
              }`}
            >
              {stat.helper}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
