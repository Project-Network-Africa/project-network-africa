import LeadershipSection from "./LeadershipSection";

export default function CoreValues() {
  return (
    <>
      <LeadershipSection
        eyebrow="LEADERSHIP"
        title="The people guiding PN Africa"
        description="A focused leadership team spanning organisational direction, technology, product, community and project coordination."
        featured={{
          name: "Temitope Mulikat Olusegun",
          role: "FOUNDER, PN AFRICA",
          category: "ORGANISATION & VISION",
          description:
            "Shapes PN Africa’s vision, organisational direction and long-term impact.",
          image: "/images/leadership/temitope.jpg",
        }}
        members={[
          {
            name: "Temitope Shittu",
            role: "Chief Technology Officer (CTO)",
            category: "TECHNOLOGY",
            description:
              "Leads technical direction, platform decisions and delivery standards.",
            image: "/images/leadership/temitope-shittu.jpg",
          },
          {
            name: "Umamat Arikewuyo",
            role: "Community / Project Coordinator",
            category: "COMMUNITY & PROJECTS",
            description:
              "Coordinates community programmes and keeps cross-functional projects moving.",
            image: "/images/leadership/umamat.jpg",
          },
          {
            name: "Zulaihat Nuha",
            role: "Project Coordinator",
            category: "PROJECT DELIVERY",
            description:
              "Supports project planning, team coordination and delivery follow-through.",
            image: "/images/leadership/zulaihat.jpg",
          },
          {
            name: "Raymond Odiji",
            role: "Product Lead",
            category: "PRODUCT DIRECTION",
            description:
              "Guides product direction, prioritisation and user-centred decision-making.",
            image: "/images/leadership/raymond.jpg",
          },
        ]}
      />
    </>
  );
}
