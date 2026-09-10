import { CohortOutcomesProps } from "./CohortOutcomes.types";

export default function CohortOutcomes({
  eyebrow = "COHORT OUTCOMES",
  title = "Progress you can see—and work you can show",
  description = "The cohort model is designed around completion, practical evidence, and confidence for the next career step.",
  stats,
  quote,
  backgroundClassName = "bg-[#F8F8F8]",
}: CohortOutcomesProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-4 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-0 lg:py-[64px]">
        <div className="w-full lg:w-[680px]">
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {eyebrow}
          </p>

          <h2 className="mt-5 max-w-[650px] font-body text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] lg:mt-5 lg:text-[38px] lg:leading-[115%] lg:tracking-[-1px]">
            {title}
          </h2>

          {description && (
            <p className="mt-5 max-w-[650px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:text-[15px]">
              {description}
            </p>
          )}

          {stats.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4 lg:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[12px] border border-[#DEDEE2] bg-white p-4 lg:h-[92px]"
                >
                  <p className="font-body text-[24px] font-bold leading-[100%] text-[#1F1F25] lg:text-[25px]">
                    {stat.value}
                  </p>

                  <p className="mt-3 font-body text-[12px] font-normal leading-[120%] text-[#5D5D61]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full lg:w-[520px] lg:shrink-0">
          <article className="rounded-[18px] bg-[#1F1F25] p-6 lg:min-h-[265px] lg:p-8">
            <blockquote className="font-heading text-[22px] font-bold leading-[140%] text-white lg:text-[27px] lg:leading-[130%]">
              “{quote.quote}”
            </blockquote>

            <div className="mt-6">
              <p className="font-body text-[12px] font-bold leading-[100%] text-[#00B6CE]">
                {quote.name}
              </p>

              <p className="mt-3 font-body text-[12px] font-normal leading-[120%] text-[#BDBDC3]">
                {quote.role}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
