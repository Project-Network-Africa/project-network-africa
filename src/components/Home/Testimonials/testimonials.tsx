import { Section, SectionHeader } from "../../ui";
import TestimonialCard from "./testimonial-card";
import { testimonials } from "./testimonial-card.data";

export default function Testimonials() {
  return (
    <Section className="bg-[#F8F8F8]">
      <div className="flex flex-col gap-8 lg:gap-9">
        <SectionHeader
          label="SUCCESS STORIES"
          title="Graduates building careers across Africa's top companies"
        />

        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-3
          "
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </Section>
  );
}
