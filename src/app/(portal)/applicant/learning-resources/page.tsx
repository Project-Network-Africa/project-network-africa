"use client";

import { useMemo, useState } from "react";

// import ResourceCard from "@/src/components/portal/applicant/resources/ResourceCard";
import { learningResources } from "@/src/data/applicant/resources";
import ResourceCard from "@/src/components/portal/applicant/(learning-resources)/ResourceCard";

export default function LearningResourcesPage() {
  const [search, setSearch] = useState("");

  const filteredResources = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return learningResources;
    }

    return learningResources.filter((resource) =>
      resource.title.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <div className="flex w-full flex-col gap-5">
      {/* Header */}
      <div className="flex w-full items-center ">
        <div className="flex h-10 w-[150px] items-center rounded-[10px] border border-[#E5E5EB] bg-white px-4">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search resources..."
            className="w-full bg-transparent text-[13px] text-[#1F1F25] outline-none placeholder:text-[#5D5D61]"
          />
        </div>
      </div>

      {/* Resources */}
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}
