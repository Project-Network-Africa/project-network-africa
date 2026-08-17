import Image from "next/image";
import { ProjectExample } from "@/src/types/project";

interface ProjectCardProps {
  project: ProjectExample;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-[16px] border border-[#E5E5EB] bg-white p-[18px] pb-5">
      {/* Project image */}
      <div className="relative h-[200px] w-full overflow-hidden rounded-[14px] bg-[#F6F6F7]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Category */}
      <div className="mt-[14px]">
        <span className="inline-flex h-[20px] items-center rounded-full bg-[#E5FAFC] px-[10px] text-[10px] font-semibold leading-none text-[#00B6CE]">
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-2 text-[15px] font-semibold leading-[1.2] text-[#1F1F25]">
        {project.title}
      </h2>

      {/* Mentor */}
      <div className="mt-[10px] flex items-center gap-[10px]">
        <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[10px] font-bold text-white">
          {project.mentorInitials}
        </div>

        <span className="text-[12px] font-normal leading-none text-[#5D5D61]">
          {project.mentorName}
        </span>
      </div>
    </article>
  );
}
