import PageHero from "../../Shared/PageHero/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="ABOUT PN AFRICA"
      title="Building the bridge between learning and real work"
      description="PN Africa gives emerging professionals a structured place to build real products, work in multidisciplinary teams, receive mentorship and produce credible proof of what they can do."
      image="/images/about/aboutHero.jpg"
      imageAlt="PN Africa community working together"
      backgroundClassName="bg-white"
      buttons={[
        {
          label: "Explore Programs",
          href: "/programs",
          variant: "dark",
        },
        {
          label: "Meet the Community",
          href: "/community",
          variant: "outline",
        },
      ]}
      stats={[
        {
          value: "APR 1",
          label: "official start • 2026",
        },
        {
          value: "JUL 3",
          label: "WhatsApp launch • 2026",
        },
      ]}
      floatingCard={{
        title: "A community that builds with you",
        description: "Teams, mentors and shared delivery—not passive learning.",
      }}
    />
  );
}
