import { Mentee } from "@/src/types/mentor/mentees";

interface MenteeProjectsProps {
  mentee: Mentee;
}

export default function MenteeProjects({ mentee }: MenteeProjectsProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Projects
      </p>

      <div className="mt-[14px] space-y-[12px]">
        {mentee.projects.length > 0 ? (
          mentee.projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between gap-[16px]"
            >
              <p className="min-w-0 truncate text-[12px] leading-[100%] text-[#1F1F25]">
                {project.name}
              </p>

              <span className="shrink-0 text-[12px] text-[#1F1F25]">
                — {project.status}
              </span>
            </div>
          ))
        ) : (
          <p className="text-[12px] text-[#5D5D61]">No projects yet.</p>
        )}
      </div>
    </section>
  );
}
