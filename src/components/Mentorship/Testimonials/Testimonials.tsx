import { Section, SectionHeader } from "../../ui";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonials.data";

export default function Testimonials() {
  return (
    <Section className="bg-white">
      <div className="flex flex-col gap-7">
        <SectionHeader label="TESTIMONIALS" title="What mentors say" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </Section>
  );
}
