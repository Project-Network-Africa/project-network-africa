import { Section, SectionHeader } from "../../ui";
import TestimonialCard from "./testimonial-card";
import { testimonials } from "./testimonial-card.data";

export default function Testimonials() {
  return (
    <Section className="bg-[#F8F8F8]">
      <div className="flex flex-col gap-9">
        <SectionHeader
          label="SUCCESS STORIES"
          title="Graduates building careers across Africa's top companies"
        />

        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </Section>
  );
}
