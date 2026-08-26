import { SectionHeader } from "../../ui";
import StepCard from "../../ui/StepCard";

const steps = [
  {
    step: 1,
    title: "Apply & Get Matched",
    iconBg: "#00B6CE",
  },
  {
    step: 2,
    title: "Join a Cohort",
    iconBg: "#1F1F25",
  },
  {
    step: 3,
    title: "Build Real Projects",
    iconBg: "#00B6CE",
  },
  {
    step: 4,
    title: "Get Hired",
    iconBg: "#1F1F25",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#F8F8F8] px-4 py-10 sm:px-6 md:px-8 lg:px-20 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:gap-[29px]">
        <SectionHeader
          label="HOW IT WORKS"
          title="Your journey from application to employment"
        />

        <div className="grid grid-cols-1 gap-8 rounded-2xl md:bg-white md:p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
          {steps.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              title={step.title}
              iconBg={step.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
