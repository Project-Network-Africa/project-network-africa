interface MissionVisionCardProps {
  title: string;
  description: string;
}

export default function MissionVisionCard({
  title,
  description,
}: MissionVisionCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-5">
      <span className="text-base font-semibold uppercase text-[#00B6CE]">
        {title}
      </span>

      <p className="text-[15px] leading-7 text-[#1F1F25]">{description}</p>
    </div>
  );
}
