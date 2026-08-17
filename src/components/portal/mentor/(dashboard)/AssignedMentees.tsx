import { AssignedMentee } from "@/src/types/mentor/dashboard";

interface AssignedMenteesProps {
  mentees: AssignedMentee[];
}

export default function AssignedMentees({ mentees }: AssignedMenteesProps) {
  return (
    <div className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Assigned Mentees
      </p>

      <div className="mt-3 space-y-[10px]">
        {mentees.map((mentee) => (
          <div key={mentee.id} className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[10px] font-bold text-white">
                {mentee.initials}
              </div>

              <div>
                <p className="text-[13px] font-semibold text-[#1F1F25]">
                  {mentee.name}
                </p>

                <p className="mt-[3px] text-[10px] text-[#5D5D61]">
                  {mentee.role} · {mentee.cohort}
                </p>
              </div>
            </div>

            <span
              className={`rounded-full px-[11px] py-[5px] text-[9px] font-semibold ${
                mentee.status === "On Track"
                  ? "bg-[#E0F7ED] text-[#1A804D]"
                  : "bg-[#FFE9DF] text-[#C95B2C]"
              }`}
            >
              {mentee.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
