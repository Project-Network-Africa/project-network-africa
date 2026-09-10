import { MentorshipValueProps } from "./MentorshipValue.types";

export default function MentorshipValue({
  eyebrow = "WHAT YOU GET",
  title = "Support that turns effort into progress",
  description = "Mentorship is built into the cohort experience—not added as an afterthought.",
  items,
  backgroundClassName = "bg-[#1F1F25]",
}: MentorshipValueProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        {eyebrow && (
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {eyebrow}
          </p>
        )}

        {title && (
          <h2 className="mt-5 max-w-[800px] font-body text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-white lg:mt-4 lg:text-[38px] lg:leading-[115%] lg:tracking-[-1px]">
            {title}
          </h2>
        )}

        {description && (
          <p className="mt-4 max-w-[800px] font-body text-[14px] font-normal leading-[150%] text-[#BDBDC3] lg:mt-4 lg:text-[16px]">
            {description}
          </p>
        )}

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-9 lg:grid-cols-4 lg:gap-4">
          {items.map((item) => (
            <article
              key={item.number}
              className="min-h-[168px] rounded-[14px] border border-[#45454B] bg-[#2A2A30] p-4 lg:h-[180px] lg:p-5"
            >
              <p className="font-body text-[12px] font-semibold leading-[100%] text-[#00B6CE]">
                {item.number}
              </p>

              <h3 className="mt-5 font-body text-[17px] font-bold leading-[120%] text-white lg:text-[18px]">
                {item.title}
              </h3>

              <p className="mt-4 font-body text-[13px] font-normal leading-[150%] text-[#BDBDC3]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
