import { ParticipantReflectionsProps } from "./ParticipantReflections.types";

export default function ParticipantReflections({
  eyebrow = "PARTICIPANT REFLECTIONS",
  title = "In their own words",
  reflections,
  backgroundClassName = "bg-white",
}: ParticipantReflectionsProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        <div>
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {eyebrow}
          </p>

          <h2 className="mt-5 font-heading text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[32px] lg:leading-[120%] lg:tracking-[-1px]">
            {title}
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-[34px] lg:gap-5">
          {reflections.map((reflection) => (
            <article
              key={reflection.name}
              className={`flex min-h-[315px] flex-col rounded-[12px] p-4 sm:p-5 lg:h-[294px] lg:p-6 ${
                reflection.highlighted
                  ? "border border-[#00B6CE] bg-[#E0F8FA]"
                  : "border border-[#DEDEE2] bg-[#F8F8F8]"
              }`}
            >
              <blockquote className="font-heading text-[20px] font-bold leading-[150%] tracking-[-0.3px] text-[#1F1F25] lg:text-[20px] lg:leading-[140%]">
                “{reflection.quote}”
              </blockquote>

              <div className="mt-4">
                <p className="font-body text-[14px] font-bold leading-[120%] text-[#1F1F25]">
                  {reflection.name}
                </p>

                <p className="mt-2 font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE]">
                  {reflection.role}
                </p>
              </div>

              <p className="mt-auto pt-6 font-body text-[11px] font-bold leading-[100%] text-[#5D5D61] lg:pt-8">
                {reflection.tags}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
