"use client";

import SearchBar from "../../Shared/SearchBar";
import { DiscoveryHeroProps } from "./discovery-hero.types";
import { usePathname } from "next/navigation";

export default function DiscoveryHero({
  title,
  description,
  searchPlaceholder,
  buttonText,
  searchValue,
  onSearchChange,
  onSearchSubmit,
}: DiscoveryHeroProps) {
  const pathname = usePathname();
  const breadcrumb = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    )
    .join(" / ");
  return (
    <section className="bg-[#F8F8F8] px-5 py-12 sm:px-8 lg:px-20 lg:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-5">
        {/* Breadcrumb */}

        <p className="text-sm text-[#1F1F25] sm:text-base">
          Homepage / <span className="text-[#00B6CE]"> {breadcrumb}</span>
        </p>

        {/* Title */}

        <h1 className="max-w-[800px] text-[30px] font-bold leading-[118%] text-[#1F1F25] sm:text-[36px] lg:text-[44px]">
          {title}
        </h1>

        {/* Description */}

        <p className="max-w-[1000px] text-[15px] leading-7 text-[#5D5D61]">
          {description}
        </p>

        {/* Search */}

        <SearchBar
          placeholder={searchPlaceholder}
          buttonText={buttonText}
          value={searchValue}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
        />
      </div>
    </section>
  );
}
