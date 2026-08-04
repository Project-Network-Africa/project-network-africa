import FeatureCard from "../../ui/FeatureCard/FeatureCard";

const features = [
  {
    icon: "◐",
    iconBg: "#00B6CE",
    title: "1:1 Mentorship",
    description: "Paired with an experienced mentor throughout your journey.",
  },
  {
    icon: "▤",
    iconBg: "#1F1F25",
    title: "Real Projects",
    description: "Work on live products with real teams and deadlines.",
  },
  {
    icon: "◈",
    iconBg: "#00B6CE",
    title: "Bootcamps",
    description: "Structured, cohort-based curriculum across disciplines.",
  },
  {
    icon: "▶",
    iconBg: "#1F1F25",
    title: "Job Placement",
    description: "Direct pipeline to hiring employer partners.",
  },
];

export default function WhyPNAfrica() {
  return (
    <section className="w-full bg-[#F8F8F8] px-4 py-10 sm:px-6 md:px-8 lg:px-20 lg:py-[50px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:gap-9">
        <span className="font-body text-[11px] font-semibold uppercase tracking-[1px] text-[#00B6CE] sm:text-xs md:text-sm lg:text-base">
          WHY PN AFRICA
        </span>

        <h2 className="max-w-[820px] font-body text-[24px] font-bold leading-[118%] text-[#1F1F25] sm:text-[28px] md:text-[32px] lg:text-[34px]">
          Everything you need to launch a tech career, in one place
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              iconBg={feature.iconBg}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
