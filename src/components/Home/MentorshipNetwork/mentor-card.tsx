import Image from "next/image";
import { MentorCardProps } from "./mentor-card.types";

export default function MentorCard({ name, role, image }: MentorCardProps) {
  return (
    <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-[#E5E1DC] bg-white px-6 py-7 transition-shadow hover:shadow-md">
      <div className="relative h-16 w-16 overflow-hidden rounded-full bg-[#00B6CE] sm:h-[72px] sm:w-[72px]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <h3 className="text-center text-sm font-semibold text-[#1F1F25] sm:text-base">
        {name}
      </h3>

      <p className="text-center text-xs text-[#5D5D61] sm:text-sm">{role}</p>
    </div>
  );
}
