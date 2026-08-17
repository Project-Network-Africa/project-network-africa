export const careerServicesData = {
  jobs: [
    {
      id: "flutterwave",
      slug: "flutterwave",
      title: "Product Designer",
      company: "Flutterwave",
      companyInitial: "F",
      location: "Lagos, NG (Hybrid)",
      employmentType: "Full-time",
      posted: "Posted 3 days ago",

      tags: ["Product Design", "Mid-level", "Hybrid"],

      about:
        "Flutterwave is looking for a Product Designer to join our Payments Experience team. You'll own end-to-end design for merchant-facing checkout flows used by thousands of businesses across Africa, working closely with product managers and engineers from concept through launch.",

      requirements: [
        "2+ years of product design experience, ideally in fintech or payments",
        "A portfolio showing end-to-end case studies, not just final screens",
        "Strong Figma skills and comfort working within a design system",
        "Experience collaborating directly with engineers and PMs",
        "Based in or willing to work hybrid from Lagos, Nigeria",
      ],

      companyAbout:
        "Flutterwave builds payment infrastructure trusted by businesses across Africa and beyond. We partner with PN Africa to hire design and engineering talent straight from cohort graduates.",
    },

    {
      id: "paystack",
      slug: "paystack",
      title: "UX/UI Designer",
      company: "Paystack",
      companyInitial: "P",
      location: "Remote",
      employmentType: "Full-time",
      posted: "Posted 5 days ago",

      tags: ["UX/UI Design", "Mid-level", "Remote"],

      about:
        "Paystack is looking for a UX/UI Designer to help create simple and intuitive payment experiences for businesses across Africa.",

      requirements: [
        "2+ years of UX/UI design experience",
        "Strong portfolio of digital product work",
        "Strong Figma and prototyping skills",
        "Experience working with product and engineering teams",
      ],

      companyAbout:
        "Paystack provides modern payment infrastructure for businesses across Africa.",
    },

    {
      id: "andela",
      slug: "andela",
      title: "Junior Product Designer",
      company: "Andela",
      companyInitial: "A",
      location: "Lagos, NG",
      employmentType: "Full-time",
      posted: "Posted 7 days ago",
      tags: ["Product Design", "Junior", "Lagos"],

      about:
        "Andela is looking for a Junior Product Designer to support the design and development of digital experiences.",

      requirements: [
        "1+ years of relevant design experience",
        "Strong understanding of UX principles",
        "Figma experience",
        "Ability to work collaboratively with product teams",
      ],

      companyAbout:
        "Andela connects skilled technology professionals with companies around the world.",
    },
  ],

  support: [
    {
      id: "resume-review",
      title: "Resume Review",
      description:
        "Get personalized feedback on your resume from a career coach before you start applying.",
      action: "Request Review",
      variant: "dark" as const,
    },
    {
      id: "employer-intro",
      title: "Employer Intros",
      description:
        "Ask our partnerships team for a warm introduction to a hiring partner in your field.",
      action: "Request Intro",
      variant: "light" as const,
    },
  ],
};
