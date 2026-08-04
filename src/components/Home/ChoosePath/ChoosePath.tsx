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
    <section className="w-full bg-[#F8F8F8] px-4 py-8 sm:px-6 md:px-8 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 lg:gap-7">
        <span className="font-body text-[11px] font-semibold uppercase tracking-[1px] text-[#00B6CE] sm:text-xs md:text-sm lg:text-base">
          GET STARTED
        </span>

        <h2 className="font-body text-[24px] font-bold leading-[118%] text-[#1F1F25] sm:text-[28px] md:text-[30px] lg:text-[30px]">
          Choose your path
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
