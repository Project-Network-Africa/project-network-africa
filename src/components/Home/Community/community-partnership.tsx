import CommunityVisual from "./community-visual";
import { community } from "./community.constants";

export default function Community() {
  return (
    <section className="w-full bg-[#F8F8F8] px-5 py-10 sm:px-8 md:py-16 lg:px-20 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 self-stretch md:gap-12 lg:flex-row lg:items-center lg:gap-[64px]">
        {/* Visual */}
        <div className="w-full lg:flex-1">
          <CommunityVisual />
        </div>

        {/* Content */}
        <div className="flex w-full flex-1 flex-col items-start gap-[18px]">
          {/* Label */}
          <span className="self-stretch font-['Inter'] text-[12px] font-bold leading-normal tracking-[1px] text-[#00B6CE]">
            {community.label}
          </span>

          {/* Title */}
          <h2 className="self-stretch font-['Inter'] text-[26px] font-bold leading-[118%] text-[#1F1F25] sm:text-[28px] lg:text-[32px]">
            {community.title}
          </h2>

          {/* Description */}
          <p className="self-stretch font-['Inter'] text-[15px] font-normal leading-normal text-[#5D5D61]">
            {community.description}
          </p>

          {/* Button */}
          <a
            href={community.buttonHref}
            className="flex items-start rounded-[10px] bg-[#1F1F25] px-[26px] py-[15px] font-['Inter'] text-[15px] font-semibold leading-normal text-white transition-opacity hover:opacity-90"
          >
            {community.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
