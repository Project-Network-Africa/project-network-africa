import Image from "next/image";
import Link from "next/link";
import { CurrentProjectProps } from "./applicant-dashboard";

export default function CurrentProject({
  imageSrc,
  title,
  description,
  href,
}: CurrentProjectProps) {
  return (
    <Link
      href={href}
      className="flex w-full min-w-0 flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] px-4 py-5 shadow-[0px_2px_8px_0px_#0000000A] sm:px-[22px]"
    >
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Current Project
      </p>

      <div className="relative h-[150px] w-full overflow-hidden rounded-[12px] bg-[#F6F6F7]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      <p className="text-[14px] font-semibold text-[#1F1F25]">{title}</p>

      <p className="text-[12px] leading-5 text-[#5D5D61]">{description}</p>
    </Link>
  );
}
