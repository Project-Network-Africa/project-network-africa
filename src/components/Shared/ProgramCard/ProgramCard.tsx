import Image from "next/image";
import Link from "next/link";
import { ProgramCardProps } from "./program-card.types";

export default function ProgramCard({
  image,
  title,
  description,
  href,
}: ProgramCardProps) {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-[#E5E1DC] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-[18px]">
      {/* Image */}
      <div className="relative mb-4 h-[180px] overflow-hidden rounded-2xl sm:h-[160px] lg:h-[140px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="font-body text-[18px] font-semibold text-[#1F1F25] sm:text-[17px] lg:text-base">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 flex-1 font-body text-[14px] leading-6 text-[#5D5D61] sm:text-[13px] sm:leading-5">
        {description}
      </p>

      {/* Link */}
      <Link
        href={href}
        className="mt-5 font-body text-[14px] font-semibold text-[#00B6CE] transition-colors hover:text-[#009CB2] sm:text-[13px]"
      >
        View Details →
      </Link>
    </div>
  );
}
