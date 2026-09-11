export interface FooterLink {
  label: string;
  href?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterSection[] = [
  {
    title: "PROGRAMMES",
    links: [
      { label: "Explore Programs", href: "/programs" },
      { label: "Browse Cohorts", href: "/cohorts" },
      { label: "Project Examples", href: "/project-examples" },
    ],
  },
  {
    title: "YOUR EXPERIENCE",
    links: [
      { label: "Applicant Portal" },
      { label: "Mentorship" },
      { label: "Success Stories" },
    ],
  },
  {
    title: "PN AFRICA",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      // { label: "Help & Support", href: "/support" },
    ],
  },
];
