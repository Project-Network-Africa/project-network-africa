export default function HeroHeading() {
  return (
    <>
      {/* Badge */}
      <div className="flex items-center gap-2 rounded-[20px] border border-[#E5E1DC] bg-white px-[14px] py-[7px]">
        <span className="font-[family:var(--font-body)] text-sm font-medium uppercase tracking-wide text-[#1F1F25]">
          Applications Open for Cohort 7
        </span>
      </div>

      {/* Heading */}
      <div className="max-w-[936px]">
        <h1 className="font-[family:var(--font-heading)] text-center text-[56px] font-bold leading-[64px] tracking-[-1px] text-[#1F1F25]">
          Build Your Career in Tech — With Real Mentors and Real Projects
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-[708px]">
        <p className="font-[family:var(--font-body)] text-center text-base font-semibold leading-7 text-[#5D5D61]">
          PN Africa connects aspiring digital professionals with mentorship,
          hands-on product experience, and employers hiring across the
          continent.
        </p>
      </div>
    </>
  );
}
