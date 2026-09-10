import Image from "next/image";
import { MentorshipOutcomesProps } from "./MentorshipOutcomes.types";

export default function MentorshipOutcomes({
  eyebrow,
  title,
  description,
  perspectiveLabel,
  quote,
  personName,
  personRole,
  personImage,
  outcomes,
  backgroundClassName = "bg-white",
}: MentorshipOutcomesProps) {
  return (
    <section
      className={`w-full px-4 py-12 sm:px-6 md:px-8 lg:px-20 lg:py-[80px] ${backgroundClassName}`}
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div>
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {eyebrow}
          </p>

          <h2 className="mt-4 max-w-[800px] font-body text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] sm:text-[32px] lg:mt-3 lg:text-[38px] lg:leading-[115%] lg:tracking-[-1px]">
            {title}
          </h2>

          <p className="mt-4 max-w-[850px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:mt-3 lg:text-[15px]">
            {description}
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr] lg:gap-6">
          <div className="flex min-h-[320px] flex-col rounded-[16px] bg-[#1F1F25] p-6 lg:h-[318px] lg:p-8">
            <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
              {perspectiveLabel}
            </p>

            <blockquote className="mt-6 max-w-[560px] font-heading text-[25px] font-bold leading-[125%] text-white lg:mt-7 lg:text-[30px] lg:leading-[125%]">
              “{quote}”
            </blockquote>

            <div className="mt-auto flex items-center gap-3">
              {personImage ? (
                <div className="relative h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={personImage}
                    alt={personName}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#00B6CE]">
                  <span className="font-body text-[13px] font-bold text-white">
                    {personName
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
              )}

              <div>
                <p className="font-body text-[13px] font-semibold leading-[120%] text-white">
                  {personName}
                </p>

                <p className="mt-1 font-body text-[12px] font-normal leading-[120%] text-[#B9B9BE]">
                  {personRole}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {outcomes.map((outcome) => (
              <div
                key={outcome.number}
                className="flex min-h-[101px] gap-5 rounded-[16px] border border-[#DEDEE2] bg-[#F8F8F8] p-4 lg:h-[101px] lg:gap-6 lg:px-5"
              >
                <span className="shrink-0 font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE]">
                  {outcome.number}
                </span>

                <div>
                  <h3 className="font-body text-[16px] font-bold leading-[120%] text-[#1F1F25]">
                    {outcome.title}
                  </h3>

                  <p className="mt-1 font-body text-[12px] font-normal leading-[150%] text-[#5D5D61] lg:text-[13px]">
                    {outcome.description}
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
