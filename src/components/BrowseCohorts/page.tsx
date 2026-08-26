"use client";

import { useMemo, useState } from "react";

import DiscoveryHero from "./DiscoveryHero";
import { browseCohortsHero } from "./DiscoveryHero/discovery-hero.data";
import CohortFilters from "./CohortFilters/CohortFilters";
import { categories } from "./CohortFilters/cohort-filters.data";
import {
  StartDateFilter,
  SortOption,
} from "./CohortFilters/cohort-filters.types";
import CohortList from "./CohortList";
import { cohorts } from "@/src/data/cohorts/cohorts";
import FAQ from "../Home/Faq";
import { cohortFaqData } from "@/src/data/faq/faq";

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Programs");
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [selectedStartDate, setSelectedStartDate] =
    useState<StartDateFilter>("Any time");
  const [selectedStatus, setSelectedStatus] = useState("Any");
  const [sortBy, setSortBy] = useState<SortOption>("Soonest Starting");

  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCohorts = useMemo(() => {
    let result = [...cohorts];

    if (selectedCategory !== "All Programs") {
      result = result.filter((c) => c.category === selectedCategory);
    }

    if (selectedFormat !== "All") {
      result = result.filter((c) => c.format === selectedFormat);
    }

    if (selectedStatus !== "Any") {
      result = result.filter((c) => c.status === selectedStatus);
    }

    if (selectedStartDate !== "Any time") {
      result = result.filter((c) =>
        matchesStartDate(c.startDate, selectedStartDate),
      );
    }

    const query = searchQuery.trim().toLowerCase();
    if (query) {
      result = result.filter((c) =>
        [c.program, c.shortDescription, c.category]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(query)),
      );
    }

    result.sort((a, b) => {
      const aTime = new Date(a.startDate).getTime();
      const bTime = new Date(b.startDate).getTime();
      return sortBy === "Soonest Starting" ? aTime - bTime : bTime - aTime;
    });

    return result;
  }, [
    selectedCategory,
    selectedFormat,
    selectedStatus,
    selectedStartDate,
    sortBy,
    searchQuery,
  ]);

  function matchesStartDate(
    startDate: string,
    filter: StartDateFilter,
  ): boolean {
    const now = new Date();
    const date = new Date(startDate);

    const monthsFromNow =
      (date.getFullYear() - now.getFullYear()) * 12 +
      (date.getMonth() - now.getMonth());

    switch (filter) {
      case "This month":
        return monthsFromNow === 0;
      case "Next month":
        return monthsFromNow === 1;
      case "Next 3 months":
        return monthsFromNow >= 0 && monthsFromNow <= 3;
      default:
        return true;
    }
  }

  return (
    <>
      <main className="bg-[#F8F8F8]">
        <DiscoveryHero
          {...browseCohortsHero}
          searchValue={searchInput}
          onSearchChange={setSearchInput}
          onSearchSubmit={() => setSearchQuery(searchInput)}
        />

        <CohortFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedFormat={selectedFormat}
          onFormatChange={setSelectedFormat}
          selectedStartDate={selectedStartDate}
          onStartDateChange={setSelectedStartDate}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalCohorts={filteredCohorts.length}
        />

        <CohortList cohorts={filteredCohorts} />

        <FAQ
          label="COHORT SELECTION"
          title="Common questions about choosing a cohort"
          items={cohortFaqData}
        />
      </main>
    </>
  );
}
