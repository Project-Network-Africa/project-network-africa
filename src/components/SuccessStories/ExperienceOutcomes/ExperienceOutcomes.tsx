import { ExperienceOutcomesProps } from "./ExperienceOutcomes.types";

export default function ExperienceOutcomes({
  eyebrow = "WHAT THE EXPERIENCE BUILDS",
  title = "Skills that become visible through the work",
  outcomes,
  backgroundClassName = "bg-[#F8F8F8]",
}: ExperienceOutcomesProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        <div>
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {eyebrow}
          </p>

          <h2 className="mt-5 max-w-[800px] font-heading text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[32px] lg:leading-[120%] lg:tracking-[-1px]">
            {title}
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-[30px] lg:grid-cols-4 lg:gap-4">
          {outcomes.map((outcome) => (
            <article
              key={outcome.number}
              className="min-h-[122px] rounded-[12px] border border-[#DEDEE2] bg-white p-4 lg:h-[163px] lg:p-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-body text-[11px] font-bold leading-[100%] text-[#00B6CE]">
                  {outcome.number}
                </span>

                <h3 className="font-body text-[16px] font-semibold leading-[120%] text-[#1F1F25] lg:text-[15px]">
                  {outcome.title}
                </h3>
              </div>

              <p className="mt-4 font-body text-[13px] font-normal leading-[150%] text-[#5D5D61] lg:mt-4 lg:text-[13px]">
                {outcome.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
