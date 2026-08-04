import {
  FeatureContent,
  FeatureVisual,
  ProjectVisual,
} from "../../Shared/feature-section";

export default function RealProjectExperience() {
  return (
    <section className="w-full bg-[#F8F8F8] px-5 py-10 sm:px-8 lg:px-20 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-10 xl:gap-16">
        {/* <div className="mx-auto flex max-w-[1280px] flex-col-reverse items-center gap-8 lg:flex-row lg:gap-16"> */}
        {/* Left - Content */}
        <FeatureContent
          label="REAL PROJECT EXPERIENCE"
          title="Gain experience by working on live projects - not simulated exercises."
          description="Applicants join collaborative teams to build real features for real partner products — guided by mentors and validated by industry reviewers."
          buttonText="See Project Examples"
          buttonHref="/projects"
        />

        {/* Right - Visual */}
        <FeatureVisual>
          <ProjectVisual />
        </FeatureVisual>
      </div>
    </section>
  );
}
