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
    <section className="w-full bg-[#F8F8F8] px-20 py-[88px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[29px]">
        <span className="font-body text-base font-semibold uppercase text-[#00B6CE]">
          HOW IT WORKS
        </span>

        <h2 className="font-body text-[34px] font-bold leading-[118%] text-[#1F1F25]">
          Your journey from application to employment
        </h2>

        <div className="flex justify-between gap-6 bg-white px-[10px] py-10">
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
