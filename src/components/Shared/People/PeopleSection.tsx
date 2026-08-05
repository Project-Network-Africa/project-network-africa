import { Button, Section, SectionHeader } from "../../ui";
import PersonCard from "./PersonCard";
import { PeopleSectionProps } from "./people.types";

export default function PeopleSection({
  label,
  title,
  people,
  columns = 3,
  backgroundClass = "bg-[#F8F8F8]",

  buttonText,
  buttonHref,
}: PeopleSectionProps) {
  const gridCols = {
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
  };

  return (
    <Section className={backgroundClass}>
      <div className="flex flex-col gap-8">
        <SectionHeader label={label} title={title} />

        <div
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${gridCols[columns]}`}
        >
          {people.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
          {buttonText && buttonHref && (
            <Button
              href={buttonHref}
              variant="light"
              className="w-fit rounded-[10px] px-6 py-[14px]"
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
