// import DashboardCard from "./DashboardCard";
// import { stats } from "./dashboard-data";

// function StatCard({
//   value,
//   label,
//   change,
//   valueColor,
//   changeColor,
// }: {
//   value: string;
//   label: string;
//   change: string;
//   valueColor: string;
//   changeColor: string;
// }) {
//   return (
//     <DashboardCard className="min-w-[208px] flex-1 p-4">
//       <p
//         className={`lg:text-[24px] md:text-[20px] text-[18px] font-bold  leading-8 ${valueColor}`}
//       >
//         {value}
//       </p>

//       <p className="mt-1 text-[12px] font-body font-normal   text-[#737379]">
//         {label}
//       </p>

//       <p className={`mt-1 text-[12px] font-body font-semibold ${changeColor}`}>
//         {change}
//       </p>
//     </DashboardCard>
//   );
// }

// export default function StatCards() {
//   return (
//     <section className="mt-5">
//       <div className="flex gap-4 overflow-x-auto pb-1 lg:grid lg:grid-cols-5 lg:overflow-visible">
//         {stats.map((stat) => (
//           <StatCard key={stat.label} {...stat} />
//         ))}
//       </div>
//     </section>
//   );
// }
// import DashboardCard from "./DashboardCard";
// import { stats } from "./dashboard-data";

// function StatCard({
//   value,
//   label,
//   change,
//   valueColor,
//   changeColor,
// }: {
//   value: string;
//   label: string;
//   change: string;
//   valueColor: string;
//   changeColor: string;
// }) {
//   return (
//     <DashboardCard className="min-w-[208px] flex-1 p-4">
//       <p
//         className={`lg:text-[24px] md:text-[20px] text-[18px] font-bold  leading-8 ${valueColor}`}
//       >
//         {value}
//       </p>

//       <p className="mt-1 text-[12px] font-body font-normal   text-[#737379]">
//         {label}
//       </p>

//       <p className={`mt-1 text-[12px] font-body font-semibold ${changeColor}`}>
//         {change}
//       </p>
//     </DashboardCard>
//   );
// }

// export default function StatCards() {
//   return (
//     <section className="mt-5">
//       <div className="flex gap-4 overflow-x-auto pb-1 lg:grid lg:grid-cols-5 lg:overflow-visible">
//         {stats.map((stat) => (
//           <StatCard key={stat.label} {...stat} />
//         ))}
//       </div>
//     </section>
//   );
// }
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
}

export default function StatCards({ stats }: StatCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[14px] border border-[#DDE1E5] bg-white p-5"
        >
          <p className="text-[12px] font-medium text-[#737379]">{stat.label}</p>

          <p className="mt-2 text-[28px] font-bold leading-none text-[#1F1F25]">
            {stat.value}
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
