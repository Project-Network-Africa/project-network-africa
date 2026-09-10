import { MentorshipRhythmProps } from "./MentorshipRhythm.types";

export default function MentorshipRhythm({
  eyebrow,
  title,
  description,
  points,
  cadence,
  cardEyebrow,
  cardTitle,
  steps,
  backgroundClassName = "bg-white",
}: MentorshipRhythmProps) {
  return (
    <section
      className={`w-full px-4 py-12 sm:px-6 md:px-8 lg:px-20 lg:py-[88px] ${backgroundClassName}`}
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-[72px]">
        <div>
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {eyebrow}
          </p>

          <h2 className="mt-5 font-body text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] sm:text-[32px] lg:mt-4 lg:text-[38px] lg:leading-[120%] lg:tracking-[-1px]">
            {title}
          </h2>

          <p className="mt-5 max-w-[560px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:text-[16px]">
            {description}
          </p>

          <div className="mt-5 flex flex-col gap-3">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="h-[22px] w-[22px] shrink-0 rounded-full bg-[#00B6CE]" />
                <p className="font-body text-[14px] font-medium leading-[140%] text-[#1F1F25]">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 w-fit rounded-full bg-[#F8F8F8] px-3.5 py-2">
            <p className="font-body text-[12px] font-semibold leading-[100%] text-[#1F1F25]">
              {cadence}
            </p>
          </div>
        </div>

        <div className="rounded-[16px] bg-[#1F1F25] p-5 sm:p-6 lg:rounded-[18px] lg:p-8">
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {cardEyebrow}
          </p>

          <h3 className="mt-5 font-body text-[24px] font-bold leading-[120%] text-white lg:text-[28px]">
            {cardTitle}
          </h3>

          <div className="mt-7 flex flex-col gap-7">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#00B6CE] font-body text-[12px] font-bold text-white">
                  {step.number}
                </span>

                <div className="min-w-0">
                  <h4 className="font-body text-[16px] font-bold leading-[120%] text-white">
                    {step.title}
                  </h4>

                  <p className="mt-1.5 font-body text-[13px] font-normal leading-[150%] text-[#B9B9BE]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
