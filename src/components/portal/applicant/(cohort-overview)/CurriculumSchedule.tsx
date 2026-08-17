interface Module {
  id: string;
  name: string;
  status: string;
}

interface CurriculumScheduleProps {
  modules: Module[];
}

export default function CurriculumSchedule({
  modules,
}: CurriculumScheduleProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
        Curriculum Schedule
      </p>

      <div className="flex flex-col gap-3">
        {modules.map((module) => (
          <div
            key={module.id}
            className="flex items-center justify-between gap-4"
          >
            <p className="text-[13px] font-semibold text-[#1F1F25]">
              {module.name}
            </p>

            <span
              className={`shrink-0 text-[11px] font-semibold ${
                module.status === "Completed" || module.status === "In Progress"
                  ? "text-[#00B6CE]"
                  : "text-[#5D5D61]"
              }`}
            >
              {module.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
