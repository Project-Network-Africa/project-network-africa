import SectionHeader from "../../ui/SectionHeader";
import FeatureCard from "../../ui/FeatureCard";
import { FeatureSectionProps } from "./feature-section.types";

export default function FeatureSection({
  label,
  title,
  features,
  centered = false,
  columns = 4,
}: FeatureSectionProps) {
  const gridCols = {
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
  };
  return (
    <section className="w-full bg-[#F8F8F8] px-4 py-10 sm:px-6 md:px-8 lg:px-20 lg:py-[50px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:gap-9">
        {label ? (
          <SectionHeader label={label} title={title} centered={centered} />
        ) : (
          <h2
            className={`font-body text-[24px] font-bold leading-[118%] text-[#1F1F25] sm:text-[28px] md:text-[32px] lg:text-[34px] ${
              centered ? "mx-auto max-w-[820px] text-center" : "max-w-[820px]"
            }`}
          >
            {title}
          </h2>
        )}

        <div
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${gridCols[columns]}`}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
