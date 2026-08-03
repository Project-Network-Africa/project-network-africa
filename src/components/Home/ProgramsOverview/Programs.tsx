import ProgramCard from "../../ui/ProgramCard";

const programs = [
  {
    image: "/images/programsoverview/product-design.png",
    title: "Product Design Bootcamp",
    description:
      "12-week cohort-based program with mentorship and a capstone project.",
    href: "/programsoverview/product-design",
  },
  {
    image: "/images/programsoverview/software-engineering.png",
    title: "Software Engineering Bootcamp",
    description:
      "12-week cohort-based program with mentorship and a capstone project.",
    href: "/programsoverview/software-engineering",
  },
  {
    image: "/images/programsoverview/product-management.png",
    title: "Product Management Bootcamp",
    description:
      "12-week cohort-based program with mentorship and a capstone project.",
    href: "/programsoverview/product-management",
  },
  {
    image: "/images/programsoverview/data-analytics.png",
    title: "Data Analytics Bootcamp",
    description:
      "12-week cohort-based program with mentorship and a capstone project.",
    href: "/programsoverview/data-analytics",
  },
];

export default function Programs() {
  return (
    <section className="w-full bg-[#F8F8F8] px-20 py-[88px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-9">
        <span className="font-body text-base font-semibold uppercase text-[#00B6CE]">
          PROGRAMS
        </span>

        <h2 className="font-body text-[34px] font-bold leading-[118%] text-[#1F1F25]">
          Choose the path that fits your goals
        </h2>

        <div className="flex justify-between gap-6">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              image={program.image}
              title={program.title}
              description={program.description}
              href={program.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
