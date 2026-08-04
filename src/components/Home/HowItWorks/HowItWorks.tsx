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
        <span className="font-body text-[11px] font-semibold uppercase tracking-[1px] text-[#00B6CE] sm:text-xs md:text-sm lg:text-base">
          HOW IT WORKS
        </span>

        <h2 className="font-body text-[24px] font-bold leading-[118%] text-[#1F1F25] sm:text-[28px] md:text-[32px] lg:text-[34px]">
          Your journey from application to employment
        </h2>

        <div className="grid grid-cols-1 gap-8 rounded-2xl bg-white p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
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
