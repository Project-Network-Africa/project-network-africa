import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold text-[#1F1F25]">Project not found</h1>

      <p className="mt-2 text-sm text-[#5D5D61]">
        The project you are looking for does not exist.
      </p>

      <Link
        href="/applicant/projects"
        className="mt-5 rounded-lg bg-[#1F1F25] px-4 py-2 text-sm font-semibold text-white"
      >
        Back to Projects
      </Link>
    </div>
  );
}
