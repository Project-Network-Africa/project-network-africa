import { notFound } from "next/navigation";

import { projects } from "../../../../../components/portal/admin/(projects)/projects-data";
import ProjectDetails from "@/src/components/portal/admin/(projects)/ProjectDetails";

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;

  const project = projects.find((project) => project.id === Number(id));

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
