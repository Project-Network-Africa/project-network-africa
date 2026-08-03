import Image from "next/image";
import { TestimonialCardProps } from "./testimonial-card.types";

export default function TestimonialCard({
  quote,
  name,
  role,
  image,
}: TestimonialCardProps) {
  return (
    // <div className="flex h-[196px] w-full flex-col justify-between rounded-2xl bg-white px-6 py-7">
    <div className="flex h-[196px] w-full flex-col rounded-2xl bg-white px-6 py-7">
      {/* Quote */}
      {/* <div className="space-y-[18px] "> */}
      <div className="space-y-[16px]">
        <span className="block text-[40px] leading-none font-bold text-[#00B6CE]">
          &ldquo;
        </span>

        <p className="font-body h-[56px] text-sm leading-6 text-[#1F1F25]">
          {quote}
        </p>
      </div>

      {/* Author */}
      <div className=" flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#00B6CE]">
          <Image src={image} alt={name} fill className="object-cover" />

          {/* Fallback initials */}
        </div>

        <div>
          <h4 className="font-body text-[13px] font-semibold text-[#1F1F25]">
            {name}
          </h4>

          <p className="font-body text-[11px] text-[#5D5D61]">{role}</p>
        </div>
      </div>
    </div>
  );
}
