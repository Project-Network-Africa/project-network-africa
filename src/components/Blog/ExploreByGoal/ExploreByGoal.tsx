
import Link from "next/link";

const goals = [
  {
    number: "01",
    category: "Career Growth",
    title: "Build a portfolio and get job-ready",
    description:
      "Portfolio breakdowns, application advice, interview preparation and guidance for your first role.",
    linkText: "Explore career guides",
    background: "bg-[#DDF7F8]",
    textColor: "text-[#1F1F25]",
    mutedColor: "text-[#5D5D61]",
    linkColor: "text-[#008B9D]",
  },
  {
    number: "02",
    category: "Real Project Work",
    title: "Work better in product teams",
    description:
      "Learn how designers, developers, analysts and project leads collaborate to ship meaningful products.",
    linkText: "Explore teamwork lessons",
    background: "bg-[#1F1F25]",
    textColor: "text-white",
    mutedColor: "text-[#C5C5C8]",
    linkColor: "text-[#00B6CE]",
  },
  {
    number: "03",
    category: "Community Stories",
    title: "Learn from people who made the move",
    description:
      "Honest alumni journeys, mentor perspectives and lessons from PN Africa cohorts across the continent.",
    linkText: "Explore community stories",
    background: "bg-[#F5F1EC]",
    textColor: "text-[#1F1F25]",
    mutedColor: "text-[#77777D]",
    linkColor: "text-[#008B9D]",
  },
];

export default function ExploreByGoal() {
  return (
    <section
  className="relative w-full overflow-hidden bg-white px-5 pb-16 pt-8 sm:px-8 lg:px-20"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(31,31,37,0.045) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(31,31,37,0.045) 1px, transparent 1px)
    `,
    backgroundSize: "68px 68px",
  }}
>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Section heading */}
        <div className="mb-9 flex items-center justify-between">
          <div>
            <h2 className="text-[26px] font-bold text-[#1F1F25] sm:text-[30px]">
              Explore by goal
            </h2>

            <p className="mt-2 text-[13px] leading-relaxed text-[#77777D] sm:text-base">
              Choose a focused reading path and find the guidance that matches your next step.
            </p>
          </div>

          <Link
            href="#latest-insights"
            className="hidden text-sm font-semibold text-[#008B9D] hover:underline sm:block"
          >
            Browse every topic →
          </Link>
        </div>

        {/* Goal cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {goals.map((goal) => (
            <article
              key={goal.number}
              className={`flex min-h-[210px] flex-col rounded-xl p-8 ${goal.background}`}
            >
              {/* Category and number */}
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-bold uppercase tracking-wider ${goal.linkColor}`}>
                  {goal.category}
                </span>

                <span className={`text-[11px] font-semibold ${goal.linkColor}`}>
                  {goal.number}
                </span>
              </div>

              {/* Title and description */}
              <h3 className={`mt-4 text-[22px] font-bold leading-snug ${goal.textColor}`}>
                {goal.title}
              </h3>

              <p className={`mt-2.5 text-[14px] leading-[1.65] ${goal.mutedColor}`}>
                {goal.description}
              </p>

              {/* Link */}
              <Link
                href="#latest-insights"
                className={`mt-auto pt-6 text-[14px] font-bold ${goal.linkColor} hover:underline`}
              >
                {goal.linkText} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
