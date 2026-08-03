import Image from "next/image";
import Link from "next/link";

interface PathCardProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export default function PathCard({
  image,
  title,
  description,
  linkText,
  href,
}: PathCardProps) {
  return (
    <div className="flex h-[215px] w-[404px] flex-col gap-[14px] rounded-2xl border border-[#E5E5EB] bg-white px-[26px] py-7 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
      {/* Image */}
      <div className="flex h-12 w-12 items-center justify-center  ">
        <Image
          src={image}
          alt={title}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="font-[family:var(--font-body)] text-[17px] font-semibold text-[#1F1F25]">
        {title}
      </h3>

      {/* Description */}
      <p className="font-[family:var(--font-body)] text-[13px] leading-6 text-[#5D5D61]">
        {description}
      </p>

      {/* Link */}
      <Link
        href={href}
        className="mt-auto font-[family:var(--font-body)] text-[13px] font-semibold text-[#00B6CE]"
      >
        {linkText}
      </Link>
    </div>
  );
}
