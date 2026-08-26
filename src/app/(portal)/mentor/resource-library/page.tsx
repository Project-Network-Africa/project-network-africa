import ResourceSection from "@/src/components/portal/mentor/(resource-library)/ResourceSection";
import { resourceSections } from "@/src/data/mentor/resource-library";

export default function ResourceLibraryPage() {
  return (
    <div className="w-full space-y-[20px]">
      <div className="space-y-[20px]">
        {resourceSections.map((section) => (
          <ResourceSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
