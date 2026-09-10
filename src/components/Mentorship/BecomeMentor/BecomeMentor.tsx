import Image from "next/image";

import Button from "../../ui/Button";
import { BecomeMentorProps } from "./BecomeMentor.types";

export default function BecomeMentor({
  communityEyebrow,
  communityQuote,
  mentorImages,
  communityStats,
  eyebrow,
  title,
  description,
  requirements,
  primaryText,
  primaryHref,

  note,
  backgroundClassName = "bg-white",
}: BecomeMentorProps) {
  return (
    <section
      className={`w-full px-4 py-12 sm:px-6 md:px-8 lg:px-20 lg:py-[88px] ${backgroundClassName}`}
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-[80px]">
        <div className="rounded-[16px] bg-[#1F1F25] p-6 sm:p-8 lg:rounded-[18px] lg:p-10">
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {communityEyebrow}
          </p>

          <h2 className="mt-6 max-w-[500px] font-heading text-[28px] font-bold leading-[120%] text-white lg:mt-7 lg:text-[34px]">
            “{communityQuote}”
          </h2>

          {/* <div className="mt-7 grid grid-cols-3 gap-4 sm:flex-row sm:items-center">
            {mentorImages.map((image) => (
              <div
                key={image}
                className="relative h-[110px] w-[110px] shrink-0 overflow-hidden rounded-full border-[4px] border-white"
              >
                <Image
                  src={image}
                  alt="PN Africa mentor"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div> */}
          <div className="mt-7 grid grid-cols-3 gap-4 sm:flex-row sm:items-center"></div>
          <div className="mt-7 grid grid-cols-3 gap-3 sm:flex-row sm:items-center sm:gap-4 lg:gap-5">
            {mentorImages.map((image) => (
              <div
                key={image}
                className="relative h-[80px] w-[80px] shrink-0 overflow-hidden rounded-full border-[3px] border-white sm:h-[90px] sm:w-[90px] lg:h-[110px] lg:w-[110px] lg:border-[4px]"
              >
                <Image
                  src={image}
                  alt="PN Africa mentor"
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 90px, 110px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 sm:grid-cols-3">
            {communityStats.map((stat) => (
              <div key={stat.value}>
                <p className="font-body text-[16px] font-bold leading-[120%] text-white">
                  {stat.value}
                </p>

                <p className="mt-1 font-body text-[12px] font-normal leading-[150%] text-[#B9B9BE]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {eyebrow}
          </p>

          <h2 className="mt-5 font-body text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] sm:text-[32px] lg:mt-4 lg:text-[38px] lg:tracking-[-1px]">
            {title}
          </h2>

          <p className="mt-5 font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:text-[16px]">
            {description}
          </p>

          <div className="mt-5 flex flex-col gap-3">
            {requirements.map((requirement) => (
              <div key={requirement} className="flex items-start gap-3">
                <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#00B6CE] text-[14px] font-bold text-white">
                  ✓
                </span>

                <p className="font-body text-[14px] font-medium leading-[150%] text-[#1F1F25]">
                  {requirement}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              href={primaryHref}
              variant="primary"
              className="w-full rounded-[8px] px-5 py-3.5 text-center text-[14px] font-semibold sm:w-auto"
            >
              {primaryText}
            </Button>
          </div>

          <p className="mt-5 font-body text-[12px] font-normal leading-[150%] text-[#5D5D61]">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
}
