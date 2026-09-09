import Link from "next/link";
import { LearnerOutcomesProps } from "./LearnerOutcomes.types";

export default function LearnerOutcomes({
  eyebrow = "BUILT FOR PRACTICAL PROGRESS",
  title = "Learn by doing, reflecting and improving",
  description = "Every track connects structured learning with practice, mentor feedback and a clear final output—so progress is visible throughout the programme.",
  stats,
  linkText = "See learner success stories",
  linkHref = "/stories",
  quote = "The strongest part of the experience is not only learning a tool—it is understanding how to approach a problem, receive feedback and improve the work.",
  quoteLabel = "LEARNER PERSPECTIVE",
  quoteAuthor = "PN Africa programme community",
  backgroundClassName = "bg-[#1F1F25]",
}: LearnerOutcomesProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 py-12 sm:px-8 lg:flex-row lg:items-center lg:gap-[64px] lg:px-0 lg:py-[84px]">
        <div className="w-full lg:w-1/2">
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {eyebrow}
          </p>

          <h2 className="mt-5 max-w-[600px] font-body text-[30px] font-bold leading-[115%] tracking-[-0.5px] text-white lg:mt-6 lg:text-[36px] lg:leading-[120%] lg:tracking-[-1px]">
            {title}
          </h2>

          <p className="mt-5 max-w-[600px] font-body text-[14px] font-normal leading-[150%] text-[#BDBDC3] lg:mt-6 lg:text-[15px]">
            {description}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:mt-5 lg:gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[10px] bg-[#29292F] p-4 lg:h-[112px] lg:p-4"
              >
                <p className="font-body text-[26px] font-bold leading-[100%] text-[#00B6CE] lg:text-[28px]">
                  {stat.value}
                </p>

                <p className="mt-3 font-body text-[12px] font-normal leading-[120%] text-[#BDBDC3] lg:text-[13px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href={linkHref}
            className="mt-5 flex w-fit items-center gap-2 font-body text-[13px] font-bold leading-[100%] text-white transition hover:text-[#00B6CE] lg:mt-6"
          >
            {linkText}
            <span aria-hidden="true" className="text-[17px] leading-none">
              →
            </span>
          </Link>
        </div>

        <div className="w-full rounded-[20px] bg-white p-5 sm:p-8 lg:w-1/2 lg:rounded-[20px] lg:p-[38px]">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#E0F8FA]">
            <span className="font-body text-[24px] font-bold leading-none text-[#1F1F25]">
              “
            </span>
          </div>

          <blockquote className="mt-6 font-body text-[22px] font-normal leading-[145%] text-[#1F1F25] lg:mt-6 lg:text-[23px] lg:leading-[140%]">
            {quote}
          </blockquote>

          <div className="mt-6">
            <p className="font-body text-[11px] font-bold leading-[100%] text-[#00B6CE]">
              {quoteLabel}
            </p>

            <p className="mt-2 font-body text-[12px] font-normal leading-[150%] text-[#5D5D61] lg:text-[13px]">
              {quoteAuthor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
