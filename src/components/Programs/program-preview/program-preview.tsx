import { FeatureContent, FeatureVisual } from "../../Shared/feature-section";

export default function ProgramPreview() {
  return (
    <section className="w-full bg-[#F8F8F8] px-5 py-10 sm:px-8 lg:px-20 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-10 xl:gap-16">
        <FeatureVisual
          image="/images/programs/product-design.jpg"
          imageAlt="Product design capstone project"
        />
        <FeatureContent
          label="PRODUCT DESIGN BOOTCAMP"
          title="Become a job-ready product designer in 12 weeks"
          description="A cohort-based program covering UX research, UI design, prototyping and a real-world capstone project reviewed by mentors and employer partners."
          buttonText="Apply to this Program"
          buttonHref="/apply"
          buttonClassName="bg-[#00B6CE] hover:bg-[#009CB2]"
          details={[
            {
              label: "Duration",
              value: "12 Weeks",
            },
            {
              label: "Format",
              value: "Hybrid, cohort-based",
            },
            {
              label: "Eligibility",
              value: "Open, no experience",
            },
          ]}
        />
      </div>
    </section>
  );
}
