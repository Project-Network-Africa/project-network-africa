"use client";

import { Search } from "lucide-react";


interface BlogHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}





export default function BlogHeader({
  searchQuery,
  onSearchChange,
}: BlogHeaderProps) {

  const popularTags = [
    "Portfolio",
    "Career switch",
    "Team projects",
  ];

  const exploreLinks = [
    {
      title: "Career guides",
      description: "Practical advice for applications and interviews",
      count: "18 articles",
    },
    {
      title: "Alumni journeys",
      description: "Honest stories from PN Africa graduates",
      count: "12 stories",
    },
    {
      title: "Product updates",
      description: "What the community is building next",
      count: "9 updates",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#1F1F25] px-5 py-16 text-white sm:px-8 lg:px-[6.25%] lg:py-[64px]">

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "68px 68px",
        }}
      />

      <div className="relative mx-auto flex max-w-[1600px] flex-col justify-between gap-8 lg:gap-12 lg:flex-row lg:items-center ">

        {/* Left content */}
        <div className="w-full lg:flex-1">

          <span className="text-sm font-bold uppercase tracking-[2px] text-[#00B6CE] sm:text-base">
            PN Africa Journal
          </span>

          <h1 className="mt-7 max-w-[1050px]  font-bold leading-[1.12] tracking-[-1.5px] text-[32px] sm:text-[38px] lg:text-[48px] lg:tracking-[-2px]">
            Ideas, stories and practical guidance for your tech career.
          </h1>

          <p className="mt-7 max-w-[1050px]  leading-[1.6] text-[#C5C5CA] text-sm sm:text-base lg:text-[18px]">
            Explore career advice, alumni journeys, programme updates
            and lessons from people building real products across Africa.
          </p>

          {/* Search */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex  w-full max-w-[1000px] items-center rounded-xl bg-white p-2 h-[54px] sm:h-[62px]"
          >
            <Search
              size={25}
              className="ml-4 shrink-0 text-[#77777D] sm:ml-5"
            />

         <input
  type="text"
  value={searchQuery}
  onChange={(e) => onSearchChange(e.target.value)}
  placeholder="Search articles, guides and stories"
  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#1F1F25] outline-none placeholder:text-[#77777D] sm:text-lg"
/>

            <button
              type="submit"
              className="h-full rounded-lg bg-[#00B6CE] px-6 text-sm font-semibold text-[#1F1F25] transition hover:bg-[#00A5BB] sm:px-10 sm:text-lg"
            >
              Search
            </button>
          </form>

          {/* Popular tags */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="mr-1 text-xs text-[#C5C5CA] sm:text-sm">
              Popular:
            </span>

            {popularTags.map((tag) => (
              <button
                key={tag}
                type="button"
              onClick={() => onSearchChange(tag)}
                className="rounded-full border border-[#414145] px-4 py-2 text-xs text-white transition hover:border-[#00B6CE] hover:text-[#00B6CE] sm:px-5 sm:py-3 sm:text-xs"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right exploration card */}
        <div className="w-full shrink-0 rounded-2xl bg-[#DDF7F8] p-7 text-[#1F1F25] sm:p-9 lg:w-[350px] lg:p-7">

          <span className="block text-sm font-bold uppercase leading-snug tracking-[1.5px] text-[#008B9D] sm:text-base">
            Start
            <br />
            Exploring
          </span>

          <h2 className="mt-7  font-semibold leading-[1.3] text-[22px] sm:text-[24px]">
            Find the right story for where you are now.
          </h2>

          {/* Exploration links */}
          <div className="mt-6">
            {exploreLinks.map((link, index) => (
              <a
                key={link.title}
                href="#latest-insights"
                className={`flex items-start justify-between gap-4 py-5 transition hover:text-[#008B9D] ${
                  index !== exploreLinks.length - 1
                    ? "border-t border-[#B9E5E7]"
                    : "border-t border-[#B9E5E7]"
                }`}
              >
                <div className="min-w-0">
                  <h3 className="text-base font-semibold sm:text-lg">
                    {link.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#66777A]">
                    {link.description}
                  </p>
                </div>

                <span className="shrink-0 pt-1 text-sm font-semibold text-[#008B9D] sm:text-base">
                  {link.count}
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
