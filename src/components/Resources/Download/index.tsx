import { Section, SectionHeader } from "../../ui";
import DownloadCard from "./DownloadCard";
import { downloads } from "./downloads.data";

export default function Downloads() {
  return (
    <Section className="bg-white">
      <div className="flex flex-col gap-7">
        <SectionHeader label="DOWNLOADS" title="Handbooks and templates" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {downloads.map((download) => (
            <DownloadCard key={download.title} {...download} />
          ))}
        </div>
      </div>
    </Section>
  );
}
