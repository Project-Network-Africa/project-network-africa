import ProjectCard from "@/src/components/portal/applicant/(projects)/ProjectCard";
import { projects } from "@/src/data/applicant/projects";

export default function ProjectsPage() {
  return (
    <div className="flex w-full flex-col gap-5">
      {/* Project cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            {...project}
            href={`/applicant/projects/${project.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
