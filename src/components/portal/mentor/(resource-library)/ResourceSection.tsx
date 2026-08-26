import { ResourceSection as ResourceSectionType } from "@/src/types/mentor/resource-library";
import ResourceItem from "./ResourceItem";

interface ResourceSectionProps {
  section: ResourceSectionType;
}

export default function ResourceSection({ section }: ResourceSectionProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        {section.title}
      </p>

      <div className="mt-[14px] space-y-[12px]">
        {section.resources.map((resource) => (
          <ResourceItem key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
}
