export default function HeroHeading() {
  return (
    <>
      {/* Badge */}
      <div className="flex h-[30px] w-full items-center gap-[6px] rounded-[14px] border border-[#E0F8FA]  bg-[#E5FAFC] px-3 py-[6px] md:h-[34px] md:w-[304px] md:gap-2 md:rounded-[20px] md:border-[#E5E1DC] md:bg-[#E5FAFC] md:px-[14px] md:py-[7px]">
        <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#00B6CE]" />

        <span className="text-[12px] font-normal leading-[18px] tracking-[1px] text-[#006D7C] md:text-[14px]  bg-[#E5FAFC] md:font-medium md:leading-[20px] md:tracking-normal md:text-[##008EA1] ">
          NEXT COHORT • SEPTEMBER 14, 2026
        </span>
      </div>

      {/* Heading */}
      <div className="max-w-[936px]">
        <h1 className="w-full text-center font-heading text-[30px] font-semibold leading-[38px] tracking-normal text-[#1F1F25] lg:w-[936px] lg:text-[64px] lg:font-bold lg:leading-[72px] lg:tracking-[-2px]">
          Build Real Tech Experience — With Teams, Mentors and Proof of Work
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-[708px]">
        <p
          className="
            text-center
            text-[15px]
            leading-7
            text-[#5D5D61]

            sm:text-base
          "
        >
          Work in multidisciplinary teams, solve practical problems, receive
          feedback and finish with evidence of what you can actually do.
        </p>
      </div>
    </>
  );
}
