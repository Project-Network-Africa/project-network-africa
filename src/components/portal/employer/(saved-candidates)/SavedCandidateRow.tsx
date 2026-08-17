import { Button } from "@/src/components/ui";
import { SavedCandidate } from "./candidates.types";

interface SavedCandidateRowProps {
  candidate: SavedCandidate;
  onRemove: (id: string) => void;
}

export default function SavedCandidateRow({
  candidate,
  onRemove,
}: SavedCandidateRowProps) {
  return (
    <div className="flex h-10 w-full items-center justify-between gap-5">
      {/* Candidate */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[14.4px] font-bold leading-none text-white"
          style={{ backgroundColor: candidate.avatarColor }}
        >
          {candidate.initials}
        </div>

        {/* Candidate information */}
        <div className="flex h-[31px] flex-col justify-center gap-[2px]">
          <p className="text-[13px] font-semibold leading-[16px] text-[#1F1F25]">
            {candidate.name}
          </p>

          <p className="text-[11px] font-normal leading-[13px] text-[#5D5D61]">
            {candidate.role} · {candidate.savedDate}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-[10px]">
        <Button
          variant="light"
          onClick={() => onRemove(candidate.id)}
          className="h-[35px] rounded-[8px] border border-[#E5E5EB] px-4 text-[12px] font-semibold"
        >
          Remove
        </Button>

        <Button
          variant="dark"
          href={`/employer/talent-directory/${candidate.id}`}
          className="h-[35px] rounded-[8px] px-4 text-[12px] font-semibold"
        >
          View Profile
        </Button>
      </div>
    </div>
  );
}
