import Button from "../../ui/Button";
import {
  UpcomingCohortsProps,
  UpcomingCohortStatus,
} from "./UpcomingCohorts.types";

const statusStyles: Record<UpcomingCohortStatus, string> = {
  OPEN: "bg-[#EFF8F2] text-[#00B64F]",
  "FILLING FAST": "bg-[#FFF7E8] text-[#F5A623]",
  WAITLIST: "bg-[#FFF0ED] text-[#D84A2F]",
};

export default function UpcomingCohorts({
  eyebrow = "UPCOMING START DATES",
  title = "More programmes starting soon",
  cohorts,
  buttonText = "Browse All Cohorts",
  buttonHref = "/cohorts",
  backgroundClassName = "bg-white",
}: UpcomingCohortsProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
              {eyebrow}
            </p>

            <h2 className="mt-5 max-w-[650px] font-body text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[38px] lg:leading-[115%] lg:tracking-[-1px]">
              {title}
            </h2>
          </div>

          {buttonText && buttonHref && (
            <Button
              href={buttonHref}
              variant="secondary"
              className="h-[46px] w-full rounded-[8px] px-5 text-[13px] font-semibold sm:w-fit"
            >
              {buttonText}
            </Button>
          )}
        </div>

        <div className="mt-6 hidden grid-cols-[2fr_1fr_1fr_1fr_1fr_140px] items-center rounded-[10px] bg-[#F8F8F8] px-5 py-4 lg:grid">
          {["PROGRAMME", "STATUS", "START DATE", "FORMAT", "TUITION", ""].map(
            (heading) => (
              <p
                key={heading}
                className="font-body text-[10px] font-bold leading-[100%] text-[#5D5D61]"
              >
                {heading}
              </p>
            ),
          )}
        </div>

        <div className="mt-6 flex flex-col gap-3 lg:mt-3">
          {cohorts.map((cohort) => (
            <article
              key={cohort.id}
              className="rounded-[14px] border border-[#DEDEE2] bg-white p-4 lg:grid lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_140px] lg:items-center lg:gap-4 lg:px-5 lg:py-4"
            >
              <h3 className="font-body text-[16px] font-bold leading-[120%] text-[#1F1F25] lg:text-[15px]">
                {cohort.programme}
              </h3>

              <span
                className={`mt-3 flex w-full items-center rounded-full px-3 py-2 font-body text-[10px] font-bold leading-[100%] lg:mt-0 lg:w-fit ${statusStyles[cohort.status]}`}
              >
                {cohort.status}
              </span>

              <p className="mt-3 font-body text-[13px] font-semibold leading-[120%] text-[#1F1F25] lg:mt-0">
                {cohort.startDate}
              </p>

              <p className="mt-3 font-body text-[13px] font-normal leading-[120%] text-[#5D5D61] lg:mt-0">
                {cohort.format}
              </p>

              <p className="mt-3 font-body text-[13px] font-semibold leading-[120%] text-[#1F1F25] lg:mt-0">
                {cohort.tuition}
              </p>

              <Button
                href={
                  cohort.status === "WAITLIST"
                    ? `/cohorts/${cohort.id}/waitlist`
                    : "/register"
                }
                variant={cohort.status === "WAITLIST" ? "secondary" : "primary"}
                className="mt-4 h-[42px] w-full rounded-[8px] px-0 text-[13px] font-semibold lg:mt-0 lg:w-[102px]"
              >
                {cohort.status === "WAITLIST" ? "Join Waitlist" : "Apply Now"}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
