import { Section, SectionHeader } from "../../ui";
import HistoryCard from "./HistoryCard";
import { history } from "./history.data";

export default function History() {
  return (
    <Section className="bg-white">
      <div className="flex flex-col gap-8">
        <SectionHeader
          label="OUR HISTORY"
          title="From a WhatsApp group to a continental platform"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {history.map((item) => (
            <HistoryCard key={item.year} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
