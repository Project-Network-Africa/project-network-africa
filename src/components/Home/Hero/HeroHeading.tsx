export default function HeroHeading() {
  return (
    <>
      {/* Badge */}
      <div className="rounded-full border border-[#E5E1DC] bg-white px-4 py-2">
        <span className="text-[11px] font-medium uppercase tracking-wide text-[#1F1F25] sm:text-xs lg:text-sm">
          Applications Open for Cohort 7
        </span>
      </div>

      {/* Heading */}
      <div className="max-w-[936px]">
        <h1
          className="
            text-center
            font-heading
            font-bold
            text-[34px]
            leading-[42px]

            sm:text-[44px]
            sm:leading-[52px]

            md:text-[50px]
            md:leading-[58px]

            lg:text-[56px]
            lg:leading-[64px]
            lg:tracking-[-1px]

            text-[#1F1F25]
          "
        >
          Build Your Career in Tech — With Real Mentors and Real Projects
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
          PN Africa connects aspiring digital professionals with mentorship,
          hands-on product experience, and employers hiring across the
          continent.
        </p>
      </div>
    </>
  );
}
