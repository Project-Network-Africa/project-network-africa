import { LearningResource } from "@/src/data/applicant/resources";

interface ResourceCardProps {
  resource: LearningResource;
}

const icons = {
  design: "◐",
  portfolio: "◈",
  handbook: "▤",
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="flex min-h-[137px] flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#00B6CE] text-[16px] text-[#FFFFFF]">
        {icons[resource.icon]}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-[14px] font-semibold leading-[100%] text-[#1F1F25]">
          {resource.title}
        </h2>

        <p className="text-[11px] leading-[100%] text-[#5D5D61]">
          {resource.type} · {resource.meta}
        </p>
      </div>
    </article>
  );
}
