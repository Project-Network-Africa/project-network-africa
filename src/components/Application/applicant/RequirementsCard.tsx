interface RequirementsCardProps {
  currentStep: number;
}

const requirements = {
  1: {
    title: "Requirements",
    description:
      "Valid personal information and agreement to the application terms are required.",
  },
  2: {
    title: "Cohort Info",
    description:
      "Cohorts run 12 weeks, hybrid format, with weekly mentor check-ins.",
  },
  3: {
    title: "Portfolio Tip",
    description:
      "A portfolio isn't required to apply — mentors will help you build one during the program.",
  },
  4: {
    title: "Order Summary",
    description: "Application Fee. ₦10,000",
  },
} as const;

export default function RequirementsCard({
  currentStep,
}: RequirementsCardProps) {
  const content = requirements[currentStep as keyof typeof requirements];

  return (
    <div className="rounded-xl bg-[#F6F6F7] p-[18px] font-body ">
      <h3 className="lg:text-[13px] text-[12px] font-normal lg:font-semibold leading-none text-[#1F1F25]">
        {content.title}
      </h3>

      <p className="mt-3 text-[12px] leading-[18px] font-normal text-[#5D5D61]">
        {content.description}
      </p>
    </div>
  );
}
