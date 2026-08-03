import {
  FeatureContent,
  FeatureVisual,
  ProjectVisual,
} from "../../Shared/feature-section";
import Button from "../../ui/Button";
import SectionHeader from "../../ui/SectionHeader";
import Image from "next/image";

export default function RealProjectExperience() {
  return (
    <section className="w-full bg-[#F8F8F8] px-20 py-[88px]">
      <div className="mx-auto flex max-w-[1280px] items-center gap-16">
        {/* Left */}
        {/* <div className="flex h-[340px] w-[676px] flex-col justify-center gap-[18px] rounded-[20px] bg-white p-5">
          <SectionHeader
            label="REAL PROJECT EXPERIENCE"
            title="Work on live products, not toy assignments"
          />

          <p className="font-body text-[15px] leading-7 text-[#5D5D61]">
            Applicants join collaborative teams to build real features for real
            partner products — guided by mentors and validated by industry
            reviewers.
          </p>

          <Button
            href="/projects"
            className="mt-2 w-fit rounded-[10px] bg-[#1F1F25] px-6 py-[14px] text-sm font-semibold text-white hover:bg-black"
          >
            See Project Examples
          </Button>
        </div> */}
        <FeatureContent
          label="REAL PROJECT EXPERIENCE"
          title="Work on live products, not toy assignments"
          description="Applicants join collaborative teams to build real features for real partner products — guided by mentors and validated by industry reviewers."
          buttonText="See Project Examples"
          buttonHref="/projects"
        />

        {/* Right */}
        <FeatureVisual>
          <ProjectVisual />
        </FeatureVisual>
      </div>
    </section>
  );
}
