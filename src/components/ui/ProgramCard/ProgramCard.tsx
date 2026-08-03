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
    <div className="flex w-[297px] flex-col gap-[14px] rounded-2xl border border-[#E5E1DC] bg-white px-[18px] pt-[18px] pb-[22px]">
      <div className="relative h-[140px] w-full overflow-hidden rounded-2xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <h3 className="font-body text-base font-semibold text-[#1F1F25]">
        {title}
      </h3>

      <p className="font-body text-[13px] leading-5 text-[#5D5D61]">
        {description}
      </p>

      <Link
        href={href}
        className="font-body text-[13px] font-semibold text-[#00B6CE]"
      >
        View Details →
      </Link>
    </div>
  );
}
