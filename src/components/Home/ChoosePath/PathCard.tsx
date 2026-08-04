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
    <div className="flex h-full flex-col rounded-2xl border border-[#E5E1DC] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative mb-5 h-[110px] w-[110px] sm:h-[120px] sm:w-[120px]">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <h3 className="font-body text-[20px] font-semibold text-[#1F1F25] sm:text-lg">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-[14px] leading-6 text-[#5D5D61]">
        {description}
      </p>

      <Link
        href={href}
        className="mt-6 text-[14px] font-semibold text-[#00B6CE] transition hover:text-[#009CB2]"
      >
        {linkText}
      </Link>
    </div>
  );
}
