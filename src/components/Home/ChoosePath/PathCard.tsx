import Image from "next/image";
import Link from "next/link";

interface PathCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  href: string;
}

export default function PathCard({
  image,
  title,
  subtitle,
  description,
  linkText,
  href,
}: PathCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#E5E1DC] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center">
      <div className="relative mx-auto mb-5 md:h-[48px] md:w-[48px] h-[40px] w-[40px]">
        <Image src={image} alt={title} fill className="object-contain " />
      </div>

      <h3 className="md:font-body font-heading  text-[22px] md:text-[17px] font-semibold text-[#1F1F25] sm:text-lg">
        {title}
      </h3>
      <h2 className="font-body md:font-heading font-normal text-[#006D7C] lg:text-[24px] md:text-[20px] text-[16px] font-bold md:text-[#1F1F25] sm:text-lg ">
        {subtitle}
      </h2>

      <p className="font-body mt-3 flex-1 text-[14px] leading-6 text-[#5D5D61]">
        {description}
      </p>

      <Link
        href={href}
        className=" font-body mt-6 text-[12px] font-normal  md:font-semibold md:text-[13px] text-[#00B6CE] transition hover:text-[#009CB2]"
      >
        {linkText}
      </Link>
    </div>
  );
}
