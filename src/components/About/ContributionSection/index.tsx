import ContributionSection from "./ContributionSection";

export default function CoreValues() {
  return (
    <>
      <ContributionSection
        eyebrow="THERE IS A PLACE FOR YOU"
        title="Choose how you want to contribute"
        description="Learn, guide or create opportunity—the ecosystem grows when each part participates."
        options={[
          {
            number: "01",
            label: "LEARNER",
            title: "Build skills and career confidence",
            description:
              "Join a cohort, work on real projects and grow with structured support.",
            linkText: "Explore cohorts",
            href: "/cohorts",
          },
          {
            number: "02",
            label: "MENTOR",
            title: "Help someone move forward",
            description:
              "Share your experience, guide emerging talent and strengthen the community.",
            linkText: "Become a mentor",
            href: "/mentorship",
            highlighted: true,
          },
          {
            number: "03",
            label: "EMPLOYER",
            title: "Create meaningful opportunity",
            description:
              "Contribute projects, expertise or routes into employment for emerging talent.",
            linkText: "Work with PN Africa",
            href: "/employers",
          },
        ]}
      />
    </>
  );
}
