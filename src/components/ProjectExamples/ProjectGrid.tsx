import { ProjectExample } from "@/src/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: ProjectExample[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex min-h-[250px] items-center justify-center rounded-[16px] border border-[#E5E5EB] bg-white">
        <p className="text-[14px] text-[#5D5D61]">
          No projects found for this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
