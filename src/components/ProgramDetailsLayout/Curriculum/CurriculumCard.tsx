import { CurriculumItem } from "../../../types/program";

interface CurriculumCardProps {
  item: CurriculumItem;
}

export default function CurriculumCard({ item }: CurriculumCardProps) {
  const isCyan = item.accent === "cyan";

  return (
    <div className="rounded-xl   bg-white p-5">
      {/* Number + connecting line */}
      <div className="flex items-center">
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-base font-bold ${
            isCyan ? "bg-[#00B6CE] text-white" : "bg-[#1F1F25] text-white"
          }`}
        >
          {item.number}
        </div>

        <div className="ml-3 h-[2px] flex-1 bg-[#E5E5EB]" />
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-[11px] font-semibold text-[#5D5D61]">{item.weeks}</p>

        <h3 className="mt-2 text-[17px] font-semibold text-[#1F1F25]">
          {item.title}
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#5D5D61]">
          {item.description}
        </p>
      </div>
    </div>
  );
}
