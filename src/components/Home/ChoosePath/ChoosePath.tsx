import { SectionHeader } from "../../ui";
import PathCard from "./PathCard";

const paths = [
  {
    image: "/images/choose-path/applicant.svg",
    title: "I'm an Applicant",
    subtitle: "Start your tech career",
    description:
      "Join a bootcamp, get matched with a mentor, and build real projects.",
    linkText: "Explore Program →",
    href: "/programs",
  },
  {
    image: "/images/choose-path/mentor.svg",
    title: "I'm a Mentor",
    subtitle: "Guide the next generation",
    description:
      "Guide the next generation of tech talent through 1:1 mentorship.",
    linkText: "Become a Mentor →",
    href: "/mentor",
  },
  {
    image: "/images/choose-path/employer.svg",
    title: "I'm an Employer",
    subtitle: "Meet job-ready talent",
    description: "Hire job-ready graduates vetted through real project work.",
    linkText: "Partner With Us →",
    href: "/employers",
  },
];

export default function ChoosePath() {
  return (
    <section className="w-full bg-[#F8F8F8] px-4 py-8 sm:px-6 md:px-8 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 lg:gap-7">
        <SectionHeader
          label="CHOOSE YOUR PATH"
          title="One platform. Three ways in."
          labelClassName=""
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
            <PathCard
              key={path.title}
              image={path.image}
              title={path.title}
              subtitle={path.subtitle}
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
