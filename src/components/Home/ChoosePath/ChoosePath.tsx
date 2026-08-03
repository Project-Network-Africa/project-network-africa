import PathCard from "./PathCard";

const paths = [
  {
    image: "/images/choose-path/applicant.svg",
    title: "I'm an Applicant",
    description:
      "Join a bootcamp, get matched with a mentor, and build real projects.",
    linkText: "Apply Now →",
    href: "/apply",
  },
  {
    image: "/images/choose-path/mentor.svg",
    title: "I'm a Mentor",
    description:
      "Guide the next generation of tech talent through 1:1 mentorship.",
    linkText: "Become a Mentor →",
    href: "/mentor",
  },
  {
    image: "/images/choose-path/employer.svg",
    title: "I'm an Employer",
    description: "Hire job-ready graduates vetted through real project work.",
    linkText: "Partner With Us →",
    href: "/employers",
  },
];

export default function ChoosePath() {
  return (
    <section className="flex w-full justify-center bg-[#F8F8F8] px-20 py-[72px]">
      <div className="flex w-full max-w-[1280px] flex-col gap-7">
        {/* Section Label */}
        <span className="font-[family:var(--font-body)] text-base font-semibold uppercase text-[#00B6CE]">
          GET STARTED
        </span>

        {/* Heading */}
        <h2 className="font-[family:var(--font-body)] text-[30px] font-bold leading-[118%] text-[#1F1F25]">
          Choose your path
        </h2>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 pt-[10px]">
          {paths.map((path) => (
            <PathCard
              key={path.title}
              image={path.image}
              title={path.title}
              description={path.description}
              linkText={path.linkText}
              href={path.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
