"use client";

import Image from "next/image";

import { useMemo, useState } from "react";
import { MentorDiscoveryProps } from "./MentorDiscovery.types";
import { Button } from "../../ui";

export default function MentorDiscovery({
  eyebrow = "FIND THE RIGHT PERSPECTIVE",
  title = "Meet mentors across the work you want to do",
  description = "Explore expertise, working style and availability before you begin.",
  mentors,
  categories = [
    "Product Design",
    "Project Management",
    "Data",
    "Engineering",
    "Career growth",
  ],
  buttonText = "Browse all mentors →",
  buttonHref = "/mentors",
  backgroundClassName = "bg-white",
}: MentorDiscoveryProps) {
  const [activeCategory, setActiveCategory] = useState("All mentors");

  const filters = ["All mentors", ...categories];

  const filteredMentors = useMemo(() => {
    if (activeCategory === "All mentors") {
      return mentors;
    }

    return mentors.filter((mentor) => mentor.category === activeCategory);
  }, [activeCategory, mentors]);

  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {eyebrow && (
              <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="mt-5  font-body text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[38px] lg:leading-[115%] lg:tracking-[-1px]">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-4 max-w-[700px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:text-[15px]">
                {description}
              </p>
            )}
          </div>

          {buttonText && buttonHref && (
            <Button
              href={buttonHref}
              variant="secondary"
              className="h-[44px] w-full rounded-[8px] px-5 text-[13px] font-semibold sm:w-fit"
            >
              {buttonText}
            </Button>
          )}
        </div>

        {/* <div className="mt-6 flex flex-col gap-2.5 lg:mt-7 lg:flex-row lg:flex-wrap">
          {filters.map((filter) => {
            const isActive = activeCategory === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveCategory(filter)}
                className={`flex h-[44px] w-full items-center justify-start rounded-full border px-4 font-body text-[13px] font-medium transition lg:h-[32px] lg:w-auto lg:justify-center lg:px-4 ${isActive ? "border-[#1F1F25] bg-[#1F1F25] text-white" : "border-[#DEDEE2] bg-white text-[#1F1F25] hover:border-[#1F1F25]"}`}
              >
                {filter}
              </button>
            );
          })}
        </div> */}
        <div className="scrollbar-hide mt-6 w-full overflow-x-auto lg:mt-7">
          <div className="flex w-max items-center gap-2.5">
            {filters.map((filter) => {
              const isActive = activeCategory === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveCategory(filter)}
                  className={`flex h-[44px] shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-5 font-body text-[13px] font-medium transition lg:h-[38px] ${isActive ? "border-[#1F1F25] bg-[#1F1F25] text-white" : "border-[#DEDEE2] bg-white text-[#1F1F25] hover:border-[#1F1F25]"}`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {filteredMentors.length > 0 ? (
          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-5">
            {filteredMentors.map((mentor) => (
              <article
                key={mentor.id}
                className="overflow-hidden rounded-[16px] border border-[#DEDEE2] bg-white"
              >
                <div className="relative h-[218px] w-full lg:h-[220px]">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-4 lg:p-5">
                  <div className="flex items-center justify-between gap-3">
                    {mentor.status && (
                      <span className="flex items-center gap-1.5 rounded-full bg-[#E0F8FA] px-3 py-1.5 font-body text-[10px] font-bold leading-[100%] text-[#00B6CE]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00B6CE]" />
                        {mentor.status}
                      </span>
                    )}

                    <span className="font-body text-[11px] font-normal leading-[100%] text-[#5D5D61]">
                      {mentor.location} · {mentor.category}
                    </span>
                  </div>

                  <h3 className="mt-4 font-body text-[17px] font-bold leading-[120%] text-[#1F1F25]">
                    {mentor.name}
                  </h3>

                  <p className="mt-3 font-body text-[13px] font-normal leading-[120%] text-[#5D5D61]">
                    {mentor.role}
                  </p>

                  <p className="mt-3 font-body text-[12px] font-normal leading-[120%] text-[#1F1F25]">
                    {mentor.expertise}
                  </p>

                  <Button
                    href={`/mentors/${mentor.id}`}
                    variant="link"
                    className="mt-4 p-0 text-[13px] font-semibold"
                  >
                    View profile →
                  </Button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-7 flex min-h-[220px] items-center justify-center rounded-[16px] border border-[#DEDEE2] bg-[#F8F8F8]">
            <p className="font-body text-[14px] font-medium text-[#5D5D61]">
              No mentors found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
