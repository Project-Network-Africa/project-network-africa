import { Section, SectionHeader } from "../../ui";
import QuoteCard from "./QuoteCard";
import { Quote } from "./quote.types";

interface QuoteSectionProps {
  label: string;
  title: string;
  quotes: Quote[];
  backgroundClass?: string;
  showAuthor?: boolean;
}

export default function QuoteSection({
  label,
  title,
  quotes,
  backgroundClass = "bg-white",
  showAuthor,
}: QuoteSectionProps) {
  return (
    <Section className={backgroundClass}>
      <div className="flex flex-col gap-7">
        <SectionHeader label={label} title={title} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} {...quote} showAuthor={showAuthor} />
          ))}
        </div>
      </div>
    </Section>
  );
}
