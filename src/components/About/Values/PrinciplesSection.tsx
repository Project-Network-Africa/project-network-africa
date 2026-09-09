import { PrinciplesSectionProps } from "./PrinciplesSection.types";

export default function PrinciplesSection({
  eyebrow,
  title,
  description,
  principles,
  backgroundClassName = "bg-[#F8F8F8]",
}: PrinciplesSectionProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-4 py-12 sm:px-8 lg:px-0 lg:py-[64px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <p className="font-body text-[12px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[13px]">
              {eyebrow}
            </p>

            <h2 className="mt-7 max-w-[750px] font-body text-[30px] font-bold leading-[130%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[36px] lg:leading-[120%] lg:tracking-[-1px]">
              {title}
            </h2>
          </div>

          <p className="mt-7 max-w-[370px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:mt-2 lg:text-[15px]">
            {description}
          </p>
        </div>

        {/* Principles */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="flex min-h-[125px] flex-col rounded-[16px] border border-[#D9DDE5] bg-white p-3.5 lg:min-h-[285px] lg:rounded-[18px] lg:p-6"
            >
              <div
                className={`flex h-[30px] w-[30px] items-center justify-center rounded-[9px] font-body text-[13px] font-semibold text-white lg:h-[44px] lg:w-[44px] lg:rounded-[13px] lg:text-[16px] ${principle.highlighted ? "bg-[#00B6CE]" : "bg-[#1F1F25]"}`}
              >
                {principle.icon}
              </div>

              <div className="mt-3 lg:mt-4">
                <h3 className="font-body text-[17px] font-bold leading-[130%] text-[#1F1F25] lg:text-[20px]">
                  {principle.title}
                </h3>

                <p className="mt-2 max-w-[300px] font-body text-[12px] font-normal leading-[140%] text-[#5D5D61] lg:mt-4 lg:text-[14px] lg:leading-[150%]">
                  {principle.description}
                </p>
              </div>

              <div className="mt-auto border-t border-[#D9DDE5] pt-2.5 lg:pt-4">
                <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00A8BE] lg:text-[13px]">
                  {principle.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
