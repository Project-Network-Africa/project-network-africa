export default function ProjectExamplesHeader() {
  return (
    <section className="bg-white px-5 pb-14 pt-16 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-[13px] text-[#5D5D61]">
          <span>Homepage</span>
          <span>/</span>
          <span className="text-[#1F1F25]">Project Examples</span>
        </div>

        <h1 className="text-[28px] font-bold leading-none text-[#1F1F25] md:text-[32px]">
          Real projects, built by real cohorts
        </h1>

        <p className="mt-4 max-w-[900px] text-[15px] leading-[1.4] text-[#5D5D61]">
          Every applicant works on a live capstone project reviewed by mentors
          and employer partners. Here&apos;s a sample of what our graduates have
          shipped.
        </p>

        {/* Stats */}
        <div className="mt-10 flex items-center gap-10">
          <Stat value="9" label="Program Tracks" />
          <Stat value="120+" label="Capstone Projects" />
          <Stat value="48" label="Employer Partners" />
        </div>
      </div>
    </section>
  );
}

interface StatProps {
  value: string;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col gap-[2px]">
      <span className="text-[22px] font-bold leading-none text-[#00B6CE]">
        {value}
      </span>

      <span className="text-[12px] font-normal leading-none text-[#5D5D61]">
        {label}
      </span>
    </div>
  );
}
