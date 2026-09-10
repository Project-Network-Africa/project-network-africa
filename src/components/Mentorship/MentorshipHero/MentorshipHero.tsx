import Image from "next/image";

import { MentorshipHeroProps } from "./MentorshipHero.types";
import { Button } from "../../ui";

export default function MentorshipHero({
  eyebrow = "MENTORSHIP THAT MOVES YOU FORWARD",
  title = "Grow with guidance from people who have done the work.",
  description = "Get matched with an experienced professional who understands your goals, reviews your real project work, and helps you make confident career decisions.",
  primaryText = "Apply for a cohort",
  primaryHref = "/apply",
  secondaryText = "Become a mentor",
  secondaryHref = "/mentorship/become-a-mentor",
  note = "Mentor support is included for accepted cohort participants.",
  image,
  imageAlt = "Mentor supporting a learner",
  stats,
  backgroundClassName = "bg-white",
}: MentorshipHeroProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-4 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-0 lg:py-[88px] xl:gap-[80px]">
        <div className="w-full lg:w-[48%] lg:min-w-0 lg:shrink xl:w-[584px] xl:shrink-0">
          {eyebrow && (
            <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-7 max-w-[620px] font-heading text-[32px] font-bold leading-[115%] tracking-[-0.5px] text-[#1F1F25] sm:text-[38px] lg:mt-8 lg:text-[56px] lg:leading-[110%] lg:tracking-[-1.5px]">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-[570px] font-body text-[15px] font-normal leading-[150%] text-[#5D5D61] lg:mt-7 lg:text-[18px]">
              {description}
            </p>
          )}

          {(primaryText || secondaryText) && (
            <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row lg:mt-7">
              {primaryText && primaryHref && (
                <Button
                  href={primaryHref}
                  variant="primary"
                  className="h-[48px] w-full rounded-[8px] px-5 text-[14px] font-semibold sm:w-auto"
                >
                  {primaryText}
                </Button>
              )}

              {secondaryText && secondaryHref && (
                <Button
                  href={secondaryHref}
                  variant="secondary"
                  className="h-[48px] w-full rounded-[8px] px-5 text-[14px] font-semibold sm:w-auto"
                >
                  {secondaryText}
                </Button>
              )}
            </div>
          )}

          {note && (
            <div className="mt-7 flex items-start gap-3 lg:mt-7">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00B6CE]" />

              <p className="font-body text-[13px] font-normal leading-[150%] text-[#1F1F25]">
                {note}
              </p>
            </div>
          )}
        </div>

        <div className="w-full lg:w-[52%] lg:min-w-0 lg:shrink xl:w-[616px] xl:shrink-0">
          <div className="relative h-[238px] w-full overflow-hidden rounded-[18px] sm:h-[300px] lg:h-[410px] lg:rounded-[20px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 616px"
              className="object-cover"
            />
          </div>

          {stats.length > 0 && (
            <div className="mt-4 grid min-h-[108px] grid-cols-1 rounded-[16px] border border-[#DEDEE2] bg-white px-4 py-5 sm:grid-cols-3 lg:mt-4 lg:h-[76px] lg:min-h-0 lg:px-5 lg:py-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-start justify-center py-3 sm:items-center sm:py-0 ${index > 0 ? "border-t border-[#DEDEE2] sm:border-l sm:border-t-0" : ""}`}
                >
                  <p className="font-body text-[18px] font-bold leading-[100%] text-[#1F1F25] lg:text-[18px]">
                    {stat.value}
                  </p>

                  <p className="mt-2 font-body text-[11px] font-normal leading-[100%] text-[#5D5D61] lg:text-[12px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
