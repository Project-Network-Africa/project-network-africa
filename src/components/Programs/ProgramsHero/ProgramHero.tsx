import ProgramsHero from "../../Shared/program-hero";

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero
        eyebrow="PN AFRICA PROGRAMMES"
        title="Build practical skills for the career you want"
        description="Choose a mentor-led programme, practise with real projects and build evidence of your skills for the next step in your career."
        primaryButton={{
          label: "Explore programmes",
          href: "#explore-programmes",
        }}
        secondaryButton={{
          label: "View next cohorts",
          href: "/cohorts",
        }}
        stats={[
          {
            value: "12 weeks",
            label: "Focused learning",
          },
          {
            value: "Mentor-led",
            label: "Weekly guidance",
          },
          {
            value: "Real projects",
            label: "Portfolio evidence",
          },
          {
            value: "Flexible",
            label: "Online support",
          },
        ]}
        matcher={{
          eyebrow: "PROGRAMME MATCHER",
          title: "Find a path that fits your goals",
          description:
            "Start with what you want to do. Review the programme details before applying.",
          steps: [
            {
              number: "01",
              title: "Choose a career direction",
              description: "Design, build, analyse or lead",
            },
            {
              number: "02",
              title: "Check the programme fit",
              description: "Programme focus, format and schedule",
            },
            {
              number: "03",
              title: "Apply to an open cohort",
              description: "Complete your profile and submit",
            },
          ],
          buttonLabel: "Start exploring",
          buttonHref: "#programmes",
        }}
      />
    </>
  );
}
