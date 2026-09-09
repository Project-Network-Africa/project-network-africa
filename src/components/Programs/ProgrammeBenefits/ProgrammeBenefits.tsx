import { ProgrammeBenefitsProps } from "./ProgrammeBenefits.types";

export default function ProgrammeBenefits({
  eyebrow = "WHAT EVERY PROGRAMME INCLUDES",
  title = "More than lessons—a supported learning experience",
  description = "Build practical capability with feedback, community and evidence you can show.",
  benefits,
  backgroundClassName = "bg-white",
}: ProgrammeBenefitsProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        <div>
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {eyebrow}
          </p>

          <h2 className="mt-4 max-w-[850px] font-body text-[28px] font-bold leading-[115%] tracking-[-0.5px] text-[#1F1F25] lg:mt-3 lg:text-[32px] lg:leading-[120%]">
            {title}
          </h2>

          <p className="mt-3 max-w-[700px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:text-[15px]">
            {description}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="min-h-[114px] rounded-[16px] bg-[#F8F8F8] p-4 lg:h-[156px] lg:p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-body text-[16px] font-bold leading-[120%] text-[#1F1F25] lg:text-[17px]">
                  {benefit.title}
                </h3>

                <span className="shrink-0 font-body text-[13px] font-bold leading-[120%] text-[#00B6CE] lg:text-[14px]">
                  {benefit.number}
                </span>
              </div>

              <p className="mt-3 max-w-[380px] font-body text-[13px] font-normal leading-[150%] text-[#5D5D61] lg:mt-3 lg:text-[13px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
