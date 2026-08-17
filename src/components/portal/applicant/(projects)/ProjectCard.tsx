import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  status: "In Progress" | "Completed" | "Not Started";
  href: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  status,
  href,
}: ProjectCardProps) {
  const statusStyles = {
    "In Progress": "bg-[#E0F7ED] text-[#1A804D]",
    Completed: "bg-[#E0F7ED] text-[#1A804D]",
    "Not Started": "bg-[#F6F6F7] text-[#5D5D61]",
  };

  return (
    <Link
      href={href}
      className="flex w-full flex-col gap-3 rounded-[14px] border border-[#E5E5EB] bg-white p-[18px] shadow-[0px_2px_8px_0px_#0000000A] transition hover:shadow-[0px_4px_12px_0px_#0000000D]"
    >
      {/* Project image */}
      <div className="relative h-[150px] w-full overflow-hidden rounded-[10px] bg-[#F6F6F7]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
        />
      </div>

      {/* Project title */}
      <p className="text-[15px] font-semibold leading-[18px] text-[#1F1F25]">
        {title}
      </p>

      {/* Project description */}
      <p className="text-[12px] leading-[15px] text-[#5D5D61]">{description}</p>

      {/* Status */}
      <span
        className={`w-fit rounded-[20px] px-[10px] py-1 text-[10px] font-semibold ${statusStyles[status]}`}
      >
        {status}
      </span>
    </Link>
  );
}
