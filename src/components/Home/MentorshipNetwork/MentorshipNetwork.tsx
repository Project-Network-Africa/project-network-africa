import { FeatureContent } from "../../Shared/feature-section";
import MentorshipVisual from "./MentorshipVisual";

export default function MentorshipNetwork() {
  return (
    <section className="w-full bg-[#FFFFFF] px-5 py-10 sm:px-8 lg:px-20 lg:py-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:h-[620px] lg:flex-row lg:items-center lg:gap-[64px] lg:p-[10px]">
        <MentorshipVisual />
        <FeatureContent
          label="MENTORSHIP NETWORK"
          title="Learn from people who have done the work."
          description="Every learner is supported by experienced professionals who offer practical feedback, career guidance, and the confidence to grow."
          buttonText="Meet our mentors  →"
          buttonHref="/mentorship"
        />
      </div>
    </section>
  );
}
