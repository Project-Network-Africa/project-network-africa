import { JourneySectionProps } from "./JourneySection.types";

export default function JourneySection({
  eyebrow,
  title,
  description,
  milestones,
  goal,
  backgroundClassName = "bg-white",
}: JourneySectionProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-4 py-12 sm:px-8 lg:px-0 lg:py-[64px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <p className="font-body text-[12px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[13px]">
              {eyebrow}
            </p>

            <h2 className="mt-7 max-w-[700px] font-body text-[30px] font-bold leading-[130%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[36px] lg:leading-[120%] lg:tracking-[-1px]">
              {title}
            </h2>
          </div>

          <p className="mt-7 max-w-[350px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:mt-2 lg:text-[15px]">
            {description}
          </p>
        </div>

        {/* Milestones */}
        <div className="mt-8 grid grid-cols-1  md:grid-cols-2 gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-4">
          {milestones.map((milestone) => (
            <div
              key={milestone.date}
              className={`relative flex min-h-[122px] flex-col rounded-[16px] border p-4 lg:min-h-[257px] lg:rounded-[18px] lg:p-6 ${milestone.highlighted ? "border-[#00B6CE] bg-[#E2F9FC]" : "border-[#D9DDE5] bg-[#F8F8F8]"}`}
            >
              <div className="flex items-start justify-between">
                <p
                  className={`font-body text-[22px] font-bold leading-[100%] ${milestone.highlighted ? "text-[#00B6CE]" : "text-[#1F1F25]"}`}
                >
                  {milestone.date}
                </p>

                <span
                  className={`mt-1 h-[10px] w-[10px] rounded-full ${milestone.highlighted ? "bg-[#00B6CE]" : "bg-[#1F1F25]"}`}
                />
              </div>

              <p
                className={`mt-5 font-body text-[11px] font-semibold leading-[100%] ${milestone.highlighted ? "text-[#00B6CE]" : "text-[#00A8BE]"}`}
              >
                {milestone.label}
              </p>

              <p className="mt-4 max-w-[280px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61]">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

        {/* Long-term goal */}
        <div className="mt-7 flex flex-col gap-5 rounded-[16px] bg-[#1F1F25] px-6 py-5 lg:mt-7 lg:flex-row lg:items-center lg:justify-between lg:rounded-[18px] lg:px-6 lg:py-6">
          <div>
            <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE]">
              {goal.label}
            </p>

            <p className="mt-3 max-w-[850px] font-body text-[17px] font-semibold leading-[130%] text-white lg:mt-2 lg:text-[18px]">
              {goal.text}
            </p>
          </div>

          {goal.linkText && (
            <p className="shrink-0 font-body text-[12px] font-semibold leading-[100%] text-white">
              {goal.linkText} →
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
