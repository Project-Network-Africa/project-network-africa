import Image from "next/image";
import {
  FeatureContent,
  FeatureVisual,
  ProjectVisual,
} from "../../Shared/feature-section";
import { Button } from "../../ui";

export default function RealProjectExperience() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 pb-[50px] pt-5 sm:px-8 md:px-10 lg:px-20 lg:py-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[30px] md:gap-10 lg:h-[620px] lg:flex-row lg:items-center lg:gap-8 xl:gap-[64px] lg:p-[10px]">
        <div className="flex w-full min-w-0 flex-col lg:w-[546px] lg:shrink-0">
          <FeatureContent
            label="REAL PROJECT EXPERIENCE"
            title="Build products people can actually use."
            description="Work in collaborative teams on live briefs from partner organisations. Plan sprints, design or build features, receive mentor feedback, and finish with credible proof of work."
          />

          {/* Tablet + Desktop */}
          <Button
            href="/project-examples"
            variant="linkBlack"
            className="!hidden w-fit px-6 font-body text-[12px] font-semibold leading-[18px] tracking-[1px] lg:!flex"
          >
            See project examples →
          </Button>
        </div>

        <FeatureVisual>
          <Image
            src="/images/realprojectexperience/real-project-example.jpg"
            alt="Real project experience"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 650px"
          />

          <ProjectVisual />
        </FeatureVisual>

        {/* Mobile only */}
        <Button
          href="/projects"
          variant="link"
          className="w-fit p-0 text-[12px] font-normal leading-[18px] tracking-[1px] text-[#00B6CE] lg:hidden"
        >
          See project examples →
        </Button>
      </div>
    </section>
  );
}
