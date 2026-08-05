import { Testimonial } from "./testimonials.types";

export default function TestimonialCard({ quote }: Testimonial) {
  return (
    <div className="rounded-[14px] bg-white p-[26px]">
      <p className="text-[15px] leading-7 text-[#1F1F25]">“{quote}”</p>
    </div>
  );
}
