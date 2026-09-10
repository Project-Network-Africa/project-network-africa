import Button from "../../ui/Button";
import { CohortsHeroProps } from "./CohortsHero.types";

export default function CohortsHero({
  eyebrow = "NEXT COHORT • SEPTEMBER 14, 2026",
  title = "Gain real experience with a team that builds together",
  description = "Join a structured product-building experience, work in a multidisciplinary team, receive mentor feedback and produce credible proof of work.",
  primaryText = "Explore Open Cohorts",
  primaryHref = "#explore-cohorts",
  secondaryText = "How Cohorts Work",
  secondaryHref = "#how-cohorts-work",
  stats = [],
  availabilityLabel = "NEXT COHORT",
  availabilityDate = "Begins september 14, 2026",
  availabilityDescription = "Select a programme, join a cross-functional team and prepare to build, review and deliver together.",
  availabilityItems = [],
  backgroundClassName = "bg-[#F8F8F8]",
}: CohortsHeroProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-[80px] lg:px-0 lg:py-[88px]">
        <div className="w-full lg:w-[730px]">
          {eyebrow && (
            <div className="flex w-fit items-center gap-2 rounded-full bg-[#E0F8FA] px-3 py-2 font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:px-4 lg:py-2.5 lg:text-[12px]">
              <span className="h-2 w-2 rounded-full bg-[#00B6CE]" />
              {eyebrow}
            </div>
          )}

          {title && (
            <h1 className="mt-7 max-w-[700px] font-heading text-[38px] font-bold leading-[110%] tracking-[-1px] text-[#1F1F25] lg:mt-7 lg:text-[56px] lg:leading-[108%] lg:tracking-[-2px]">
              {title}
            </h1>
          )}

          {description && (
            <p className="mt-6 max-w-[700px] font-body text-[15px] font-normal leading-[150%] text-[#5D5D61] lg:mt-7 lg:text-[18px]">
              {description}
            </p>
          )}

          {(primaryText || secondaryText) && (
            <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row lg:mt-6">
              {primaryText && primaryHref && (
                <Button
                  href={primaryHref}
                  variant="primary"
                  className="h-[52px] w-full rounded-[8px] px-6 text-[14px] font-semibold sm:w-auto lg:min-w-[208px]"
                >
                  {primaryText}
                </Button>
              )}

              {secondaryText && secondaryHref && (
                <Button
                  href={secondaryHref}
                  variant="secondary"
                  className="h-[52px] w-full rounded-[8px] px-6 text-[14px] font-semibold sm:w-auto lg:min-w-[185px]"
                >
                  {secondaryText}
                </Button>
              )}
            </div>
          )}

          {stats.length > 0 && (
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-7 lg:gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-body text-[22px] font-bold leading-[100%] text-[#1F1F25] lg:text-[24px]">
                    {stat.value}
                  </p>

                  <p className="mt-3 font-body text-[12px] font-normal leading-[120%] text-[#5D5D61] lg:text-[13px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full lg:w-[470px] lg:shrink-0">
          <div className="rounded-[20px] bg-[#1F1F25] p-6 lg:rounded-[20px] lg:p-7">
            {availabilityLabel && (
              <div className="flex w-fit items-center gap-2 rounded-full bg-[#123337] px-3 py-2 font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE]">
                <span className="h-2 w-2 rounded-full bg-[#00B6CE]" />
                {availabilityLabel}
              </div>
            )}

            {availabilityDate && (
              <h2 className="mt-7 font-body text-[27px] font-bold leading-[120%] text-white lg:text-[30px]">
                {availabilityDate}
              </h2>
            )}

            {availabilityDescription && (
              <p className="mt-6 font-body text-[14px] font-normal leading-[150%] text-[#BDBDC3] lg:text-[15px]">
                {availabilityDescription}
              </p>
            )}

            {availabilityItems.length > 0 && (
              <div className="mt-6 border-t border-[#45454B] pt-5">
                <div className="flex flex-col gap-4">
                  {availabilityItems.map((item) => (
                    <div
                      key={item.programme}
                      className="flex items-center justify-between gap-4"
                    >
                      <p className="font-body text-[14px] font-semibold leading-[120%] text-white">
                        {item.programme}
                      </p>

                      <span
                        className={`shrink-0 rounded-full bg-[#29292F] px-4 py-2 font-body text-[11px] font-semibold leading-[100%] ${item.seatsClassName ?? "text-white"}`}
                      >
                        {item.seatsLabel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
