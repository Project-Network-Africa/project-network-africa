import Image from "next/image";

interface ProjectBriefProps {
  imageSrc: string;
  description: string;
  deliverables: string[];
}

export default function ProjectBrief({
  imageSrc,
  description,
  deliverables,
}: ProjectBriefProps) {
  return (
    <section className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white p-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Project Brief
      </p>

      {/* Project image */}
      <div className="relative h-[220px] w-full overflow-hidden rounded-[12px] bg-[#F6F6F7]">
        <Image
          src={imageSrc}
          alt="Project"
          fill
          sizes="(max-width: 1024px) 100vw, 736px"
          className="object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-[13px] leading-[16px] text-[#5D5D61]">{description}</p>

      {/* Deliverables */}
      <div className="flex flex-col gap-2">
        <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
          Deliverables
        </p>

        {deliverables.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#00B6CE]" />

            <p className="text-[12px] text-[#1F1F25]">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
