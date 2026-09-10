import { SuccessStoriesHeroProps } from "./SuccessStoriesHero.types";

export default function SuccessStoriesHero({
  eyebrow = "SUCCESS STORIES",
  title = "What real project experience changes",
  description = "Participant reflections on adapting, leading and delivering within real cross-functional product teams.",
  stories,
  backgroundClassName = "bg-[#F8F8F8]",
}: SuccessStoriesHeroProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:max-w-[650px]">
            <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
              {eyebrow}
            </p>

            <h1 className="mt-5 max-w-[650px] font-heading text-[28px] font-bold leading-[125%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[32px] lg:leading-[120%] lg:tracking-[-1px]">
              {title}
            </h1>
          </div>

          {description && (
            <p className="mt-5 w-full max-w-[430px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:mt-1 lg:text-[14px]">
              {description}
            </p>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-[68px] lg:gap-5">
          {stories.map((story) => (
            <div
              key={story.name}
              className={`flex min-h-[100px] items-center gap-4 px-4 py-5 lg:h-[150px] lg:px-6 ${
                story.featured
                  ? "rounded-[12px] bg-[#1F1F25]"
                  : "rounded-[12px] border border-[#DEDEE2] bg-white"
              }`}
            >
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#00B6CE] lg:h-[64px] lg:w-[64px]">
                <span className="font-body text-[14px] font-semibold leading-none text-[#1F1F25] lg:text-[17px]">
                  {story.initials}
                </span>
              </div>

              <div className="min-w-0">
                <h2
                  className={`font-body text-[16px] font-bold leading-[120%] lg:text-[18px] ${
                    story.featured ? "text-white" : "text-[#1F1F25]"
                  }`}
                >
                  {story.name}
                </h2>

                <p className="mt-1 font-body text-[12px] font-semibold leading-[120%] text-[#00B6CE] lg:text-[13px]">
                  {story.role}
                </p>

                <p
                  className={`mt-2 font-body text-[11px] font-normal leading-[120%] lg:text-[12px] ${
                    story.featured ? "text-white" : "text-[#5D5D61]"
                  }`}
                >
                  {story.highlights}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
