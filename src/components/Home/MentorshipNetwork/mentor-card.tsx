import Image from "next/image";
import { MentorCardProps } from "./mentor-card.types";

export default function MentorCard({ name, role, image }: MentorCardProps) {
  return (
    <div className="flex h-[204px] w-[297px] flex-col items-center gap-3 rounded-2xl border border-[#E5E1DC] bg-white px-6 pt-8 pb-7">
      <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full bg-[#00B6CE]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <h3 className="font-body text-center text-base font-semibold text-[#1F1F25]">
        {name}
      </h3>

      <p className="font-body text-center text-sm font-medium text-[#5D5D61]">
        {role}
      </p>
    </div>
  );
}
