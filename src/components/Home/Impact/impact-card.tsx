import { ImpactCardProps } from "./impact-card.types";

export default function ImpactCard({ value, label, color }: ImpactCardProps) {
  return (
    <div className="flex h-[70px] w-[147px] flex-col items-center gap-[6px]">
      <h3
        className="font-body text-[40px] font-bold leading-none"
        style={{ color }}
      >
        {value}
      </h3>

      <p className="font-body text-[13px] text-[#9E9EA8]">{label}</p>
    </div>
  );
}
