import { MenteeProgressEntry } from "@/src/types/mentor/analytics";
import MenteeProgressRow from "./MenteeProgressRow";

interface MenteeProgressCardProps {
  entries: MenteeProgressEntry[];
}

export default function MenteeProgressCard({
  entries,
}: MenteeProgressCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <p className="text-xs font-semibold tracking-wide text-[#5D5D61]">
        MENTEE PROGRESS OVER TIME
      </p>

      <div className="mt-4 divide-y divide-[#E9E9ED]">
        {entries.map((entry) => (
          <MenteeProgressRow key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
