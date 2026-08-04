import Image from "next/image";
import { TestimonialCardProps } from "./testimonial-card.types";

export default function TestimonialCard({
  quote,
  name,
  role,
  image,
}: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 transition-shadow hover:shadow-md">
      {/* Quote */}
      <div>
        <span className="block text-4xl font-bold leading-none text-[#00B6CE]">
          &ldquo;
        </span>

        <p className="mt-4 text-sm leading-6 text-[#1F1F25]">{quote}</p>
      </div>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#00B6CE] sm:h-12 sm:w-12">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#1F1F25]">{name}</h4>

          <p className="text-xs text-[#5D5D61] sm:text-[13px]">{role}</p>
        </div>
      </div>
    </div>
  );
}
