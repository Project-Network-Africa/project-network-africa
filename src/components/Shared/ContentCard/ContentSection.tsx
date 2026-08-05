import { Section, SectionHeader } from "../../ui";

import ContentCard from "./ContentCard";
import { ContentSectionProps } from "./content-section.type";

export default function ContentSection({
  label,
  title,
  items,
  columns = 3,
}: ContentSectionProps) {
  const gridCols = {
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
  };

  return (
    <Section className="bg-white">
      <div className="flex flex-col gap-8">
        <SectionHeader label={label} title={title} />

        <div
          className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${gridCols[columns]}`}
        >
          {items.map((item) => (
            <ContentCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
