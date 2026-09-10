import { CohortExperienceProps } from "./CohortExperience.types";

export default function CohortExperience({
  eyebrow = "THE COHORT EXPERIENCE",
  title = "More than lessons. A complete learning system.",
  description = "Every cohort combines expert guidance, real teamwork, and practical evidence of what you can do.",
  items,
  backgroundClassName = "bg-[#1F1F25]",
}: CohortExperienceProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div className="w-full lg:max-w-[620px]">
            {eyebrow && (
              <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="mt-5 max-w-[620px] font-body text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-white lg:mt-4 lg:text-[36px] lg:leading-[115%] lg:tracking-[-1px]">
                {title}
              </h2>
            )}
          </div>

          {description && (
            <p className="mt-5 w-full max-w-[430px] font-body text-[14px] font-normal leading-[150%] text-[#BDBDC3] lg:mt-0 lg:text-[15px]">
              {description}
            </p>
          )}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-[34px] lg:grid-cols-4 lg:gap-8">
          {items.map((item) => (
            <article
              key={item.number}
              className="min-h-[176px] rounded-[14px] border border-[#45454B] bg-[#2A2A30] p-5 lg:h-[193px] lg:p-5"
            >
              <div className="flex h-[34px] w-[38px] items-center justify-center rounded-[8px] bg-[#123337]">
                <span className="font-body text-[12px] font-semibold leading-[100%] text-[#00B6CE]">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-5 font-body text-[17px] font-bold leading-[120%] text-white lg:text-[18px]">
                {item.title}
              </h3>

              <p className="mt-4 font-body text-[13px] font-normal leading-[150%] text-[#BDBDC3]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
