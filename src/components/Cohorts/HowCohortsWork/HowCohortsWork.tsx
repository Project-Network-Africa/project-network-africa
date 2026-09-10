import { HowCohortsWorkProps } from "./HowCohortsWork.types";

export default function HowCohortsWork({
  eyebrow = "HOW COHORTS WORK",
  title = "A clear journey from application to career readiness",
  description = "Know what happens at every stage and what support you will receive along the way.",
  steps,
  backgroundClassName = "bg-white",
}: HowCohortsWorkProps) {
  return (
    <section className={`w-full ${backgroundClassName}`} id="how-cohorts-work">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
          {eyebrow}
        </p>

        <div className="mt-7 text-center lg:mt-12">
          <h2 className="mx-auto  font-body text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] lg:text-[36px] lg:leading-[115%] lg:tracking-[-1px]">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-6 max-w-[700px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:text-[16px]">
              {description}
            </p>
          )}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-5 lg:gap-5">
          {steps.map((step) => (
            <article
              key={step.number}
              className="min-h-[200px] rounded-[14px] border border-[#DEDEE2] bg-white p-5 lg:h-[208px] lg:p-5"
            >
              <div className="flex h-[36px] w-[38px] items-center justify-center rounded-[8px] bg-[#1F1F25]">
                <span className="font-body text-[12px] font-semibold leading-[100%] text-white">
                  {step.number}
                </span>
              </div>

              <p className="mt-4 font-body text-[10px] font-bold leading-[100%] text-[#00B6CE]">
                {step.label}
              </p>

              <h3 className="mt-5 font-body text-[16px] font-bold leading-[120%] text-[#1F1F25]">
                {step.title}
              </h3>

              <p className="mt-4 font-body text-[13px] font-normal leading-[150%] text-[#5D5D61]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
