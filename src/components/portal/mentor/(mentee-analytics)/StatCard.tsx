import { MenteeAnalyticsStat } from "@/src/types/mentor/analytics";

interface StatCardProps {
  stat: MenteeAnalyticsStat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <p className="text-[28px] font-bold leading-none text-[#00B6CE]">
        {stat.value}
      </p>
      <p className="mt-2 text-sm text-[#5D5D61]">{stat.label}</p>
    </div>
  );
}
