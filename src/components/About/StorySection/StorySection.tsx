import { StorySectionProps } from "./StorySection.types";

export default function StorySection({
  eyebrow,
  title,
  subtitle,
  body,
  subbody,
  bridgeLabel,
  bridgeText,
  gapsTitle,
  gaps,
  backgroundClassName = "bg-white",
}: StorySectionProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-4 py-12 sm:px-8 lg:px-0 lg:py-[72px]">
        {/* Header */}
        <div className="flex w-full flex-col">
          <p className="font-body text-[12px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[13px]">
            {eyebrow}
          </p>

          <h2 className="mt-8 max-w-[1050px] font-body text-[30px] font-bold leading-[135%] tracking-[-0.5px] text-[#1F1F25] sm:text-[36px] lg:mt-4 lg:text-[42px] lg:leading-[120%] lg:tracking-[-1px]">
            {title}
          </h2>

          <p className="mt-7 max-w-[1000px] font-body text-[15px] font-normal leading-[140%] text-[#5D5D61] lg:mt-3 lg:text-[18px] lg:leading-[150%]">
            {subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid w-full grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-[56px]">
          {/* Left Content */}
          <div className="flex flex-col">
            <p className="lg:max-w-[620px] w-fullfont-body text-[18px] font-medium leading-[145%] text-[#1F1F25] lg:text-[22px] lg:leading-[145%]">
              {body}
            </p>

            <p className="mt-4 lg:max-w-[620px] w-full font-body text-[14px] font-normal leading-[135%] text-[#626875] lg:text-[16px] tracking-[0%] lg:leading-[25px]">
              {subbody}
            </p>

            {/* Bridge */}
            <div className="mt-4 rounded-[16px] bg-[#E2F9FC] px-5 py-5 lg:mt-6 lg:rounded-[14px] lg:px-[22px] lg:py-[20px]">
              <p className="font-body text-[12px] font-semibold leading-[100%] text-[#00A8BE] lg:text-[13px]">
                {bridgeLabel}
              </p>

              <p className="mt-3 font-body text-[16px] font-semibold leading-[130%] text-[#1F1F25] lg:mt-2 lg:text-[18px]">
                {bridgeText}
              </p>
            </div>
          </div>

          {/* Gaps */}
          <div className="rounded-[16px] border border-[#D9DDE5] px-4 py-5 lg:rounded-[18px] lg:px-6 lg:py-7">
            <p className="font-body text-[12px] font-semibold leading-[100%] text-[#00A8BE] lg:text-[13px]">
              {gapsTitle}
            </p>

            <div className="mt-7 flex flex-col gap-7 lg:mt-7 lg:gap-6">
              {gaps.map((gap) => (
                <div
                  key={gap.number}
                  className="flex items-start gap-3 lg:gap-4"
                >
                  <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#E2F9FC]">
                    <span className="font-body text-[12px] font-semibold leading-[100%] text-[#00A8BE]">
                      {gap.number}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-col">
                    <p className="font-body text-[15px] font-semibold leading-[130%] text-[#1F1F25] lg:text-[16px]">
                      {gap.title}
                    </p>

                    <p className="mt-1 max-w-[480px] font-body text-[13px] font-normal leading-[140%] text-[#5D5D61] lg:text-[14px] lg:leading-[145%]">
                      {gap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
