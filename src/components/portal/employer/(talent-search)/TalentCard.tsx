import Image from "next/image";
import { Button } from "@/src/components/ui";
import { Candidate } from "@/src/types/candidate";

interface TalentCardProps {
  talent: Candidate;
}

export default function TalentCard({ talent }: TalentCardProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      {/* Avatar */}
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00B6CE] text-[14px] font-semibold text-white">
        {talent.initials}
      </div>

      {/* Name */}
      <p className="mt-3 text-[14px] font-semibold text-[#1F1F25]">
        {talent.name}
      </p>

      {/* Role */}
      <p className="mt-2 text-[12px] text-[#5D5D61]">{talent.role}</p>

      {/* Image */}
      <div className="relative mt-2 h-[90px] w-full overflow-hidden rounded-[10px] bg-[#F6F6F7]">
        {talent.profileImage ? (
          <Image
            src={talent.profileImage}
            alt={talent.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-[12px] font-semibold text-[#5D5D61]">
              No image
            </span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mt-2 flex gap-2">
        <Button
          variant="light"
          className="h-8 flex-1 rounded-[8px] px-4 py-0 text-[11px] font-semibold"
        >
          Save
        </Button>

        <Button
          variant="dark"
          href={`/employer/talent-directory/${talent.id}`}
          className="h-8 flex-1 rounded-[8px] px-4 py-0 text-[11px] font-semibold"
        >
          View Profile
        </Button>
      </div>
    </section>
  );
}
