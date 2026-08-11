import { BlogPost } from "./blog.types";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-to-build-a-portfolio-that-gets-you-hired",
    category: "Career Tips",

    title: "How to Build a Portfolio That Gets You Hired",

    excerpt:
      "A practical, step-by-step guide to putting together a portfolio that stands out to employers — even if you’re just starting out.",

    image: "/images/blog/1.jpg",

    author: {
      name: "Amara Okafor",
      role: "Senior Product Designer and mentor at PN Africa.",
      initials: "AO",
      avatarBg: "#1F1F25",
    },

    date: "Jul 12, 2026",
    readTime: "5 min read",

    tags: ["#portfolio", "#jobsearch", "#careertips", "#productdesign"],

    content: [
      {
        type: "paragraph",
        text: "Your portfolio is often the first impression a hiring manager has of your work — and in a competitive market, it needs to do more than just showcase pretty pictures. It needs to tell a story about how you think, how you solve problems, and how you communicate your process.",
      },

      {
        type: "heading",
        text: "1. Choose Your Strongest, Most Varied Work",
      },

      {
        type: "paragraph",
        text: "Start with three to five case studies that represent your best thinking — not necessarily your prettiest pixels. Aim for variety: a research-heavy project, a fast-turnaround project, and something that shows you collaborating across a team all tell different, complementary stories.",
      },

      {
        type: "heading",
        text: "2. Show Your Process, Not Just Polish",
      },

      {
        type: "paragraph",
        text: "Don't just show the “after” — show the messy middle. Sketches, early wireframes, and the iterations you scrapped tell a more honest and compelling story than a single flawless mockup ever could.",
      },

      {
        type: "quote",
        text: "Employers care less about the final polish and more about your reasoning.",
      },

      {
        type: "heading",
        text: "3. Structure Each Case Study the Same Way",
      },

      {
        type: "paragraph",
        text: "For each project, walk through the problem, your research, the decisions you made along the way, and the measurable outcome. A consistent structure across all your case studies makes your portfolio easier to skim — and easier to remember.",
      },

      {
        type: "checklist",
        title: "Quick Portfolio Checklist",
        items: [
          "3–5 case studies that show range",
          "Process work included, not just final screens",
          "Consistent structure: problem → process → outcome",
          "Contact info and resume easy to find",
          "Site loads fast and works on mobile",
        ],
      },

      {
        type: "heading",
        text: "4. Keep It Simple to Navigate",
      },

      {
        type: "paragraph",
        text: "A recruiter often has just a few minutes to review your work — a clean layout with a clear case study structure will get you further than an elaborate, hard-to-follow portfolio site. Above all, keep it updated: as your skills grow, swap out older projects for new ones that better represent where you are today.",
      },
    ],
  },

  {
    id: 2,
    slug: "negotiating-your-first-tech-offer",
    category: "Career Tips",

    title: "Negotiating Your First Tech Offer",

    excerpt:
      "Practical advice for understanding your first offer, evaluating compensation, and negotiating with confidence.",

    image: "/images/blog/2.jpg",

    author: {
      name: "Amara Okafor",
      role: "Career Coach and Mentor at PN Africa.",
      initials: "AO",
      avatarBg: "#1F1F25",
    },

    date: "Jul 5, 2026",
    readTime: "6 min read",

    tags: ["#career", "#salary", "#negotiation", "#joboffer"],

    content: [
      {
        type: "paragraph",
        text: "Getting your first tech offer is exciting, but many early-career professionals accept offers without fully understanding their value. Negotiation is not about being difficult — it's about ensuring fairness.",
      },
      {
        type: "heading",
        text: "1. Understand the Full Compensation Package",
      },
      {
        type: "paragraph",
        text: "Look beyond salary. Consider bonuses, healthcare, learning stipends, pension contributions, and remote work allowances.",
      },
      {
        type: "heading",
        text: "2. Research Market Rates",
      },
      {
        type: "paragraph",
        text: "Use salary reports and industry benchmarks to understand what similar professionals earn in your location and role.",
      },
      {
        type: "quote",
        text: "Negotiation is preparation meeting opportunity.",
      },
      {
        type: "heading",
        text: "3. Practice Your Conversation",
      },
      {
        type: "paragraph",
        text: "Prepare your talking points beforehand. Confidence often comes from preparation rather than experience.",
      },
    ],
  },

  {
    id: 3,
    slug: "five-lessons-from-our-cohort-5-graduates",
    category: "Alumni Stories",

    title: "5 Lessons From Our Cohort 5 Graduates",

    excerpt:
      "Five lessons our latest graduates learned while building their skills, working with mentors, and preparing for the world of work.",

    image: "/images/blog/3.jpg",

    author: {
      name: "Segun Ade",
      role: "Lead Mentor at PN Africa.",
      initials: "SA",
      avatarBg: "#00B6CE",
    },

    date: "Jul 3, 2026",
    readTime: "5 min read",

    tags: ["#alumni", "#learning", "#growth", "#careers"],

    content: [
      {
        type: "paragraph",
        text: "Every cohort teaches us something new. Our Cohort 5 graduates shared lessons that helped them stay consistent and grow faster.",
      },
      {
        type: "heading",
        text: "1. Consistency Beats Motivation",
      },
      {
        type: "paragraph",
        text: "Many graduates found success by building daily habits instead of relying on bursts of motivation.",
      },
      {
        type: "heading",
        text: "2. Ask Questions Early",
      },
      {
        type: "paragraph",
        text: "Seeking clarification early prevented small misunderstandings from becoming major blockers.",
      },
      {
        type: "heading",
        text: "3. Build in Public",
      },
      {
        type: "paragraph",
        text: "Sharing progress online helped graduates attract opportunities and feedback.",
      },
    ],
  },

  {
    id: 4,
    slug: "inside-our-first-employer-partner-mixer",
    category: "Community",

    title: "Inside Our First Employer Partner Mixer",

    excerpt:
      "A look inside our first employer partner mixer and how we're creating stronger connections between talent and industry.",

    image: "/images/blog/4.jpg",

    author: {
      name: "Kemi Ade",
      role: "Community Manager at PN Africa.",
      initials: "KA",
      avatarBg: "#1F1F25",
    },

    date: "Jun 20, 2026",
    readTime: "3 min read",

    tags: ["#community", "#networking", "#employers"],

    content: [
      {
        type: "paragraph",
        text: "Our first Employer Partner Mixer brought together employers, mentors, and learners for meaningful conversations about talent development.",
      },
      {
        type: "heading",
        text: "Connecting Talent With Opportunity",
      },
      {
        type: "paragraph",
        text: "Participants discussed hiring challenges, skill gaps, and opportunities for collaboration.",
      },
      {
        type: "quote",
        text: "The best opportunities often begin with conversations.",
      },
    ],
  },

  {
    id: 5,
    slug: "what-we-shipped-this-quarter",
    category: "Product",

    title: "What We Shipped This Quarter",

    excerpt:
      "A look at the products, improvements, and experiences our teams shipped this quarter.",

    image: "/images/blog/5.jpg",

    author: {
      name: "Tobi Martins",
      role: "Product Lead at PN Africa.",
      initials: "TM",
      avatarBg: "#00B6CE",
    },

    date: "Jun 14, 2026",
    readTime: "6 min read",

    tags: ["#product", "#updates", "#engineering"],

    content: [
      {
        type: "paragraph",
        text: "This quarter focused on improving the learner experience, employer onboarding, and program discovery.",
      },
      {
        type: "heading",
        text: "Program Discovery Improvements",
      },
      {
        type: "paragraph",
        text: "We redesigned our discovery experience to make it easier for applicants to find relevant programs.",
      },
      {
        type: "heading",
        text: "Employer Portal Enhancements",
      },
      {
        type: "paragraph",
        text: "New employer workflows reduced onboarding time and improved candidate visibility.",
      },
    ],
  },

  {
    id: 6,
    slug: "recap-cohort-6-demo-day-highlights",
    category: "Events",

    title: "Recap: Cohort 6 Demo Day Highlights",

    excerpt:
      "Highlights from Cohort 6 Demo Day, featuring project presentations, mentor feedback, and employer conversations.",

    image: "/images/blog/6.jpg",

    author: {
      name: "Nadia Ahmed",
      role: "Events Coordinator at PN Africa.",
      initials: "NA",
      avatarBg: "#1F1F25",
    },

    date: "Jun 5, 2026",
    readTime: "4 min read",

    tags: ["#events", "#demoday", "#cohort6"],

    content: [
      {
        type: "paragraph",
        text: "Demo Day marked the culmination of weeks of hard work, collaboration, and learning.",
      },
      {
        type: "heading",
        text: "Showcasing Real Projects",
      },
      {
        type: "paragraph",
        text: "Teams presented solutions spanning product design, software engineering, project management, and data analytics.",
      },
      {
        type: "quote",
        text: "Great work deserves a stage.",
      },
    ],
  },

  {
    id: 7,
    slug: "negotiating-your-first-tech-offer-part-two",
    category: "Career Tips",

    title: "Negotiating Your First Tech Offer",

    excerpt:
      "How to approach compensation conversations and make informed decisions when receiving your first tech offer.",

    image: "/images/blog/7.jpg",

    author: {
      name: "Amara Okafor",
      role: "Career Coach and Mentor at PN Africa.",
      initials: "AO",
      avatarBg: "#1F1F25",
    },

    date: "May 29, 2026",
    readTime: "7 min read",

    tags: ["#career", "#salary", "#growth"],

    content: [
      {
        type: "paragraph",
        text: "Negotiation is a skill that improves with practice. Every conversation helps you become more confident and informed.",
      },
      {
        type: "heading",
        text: "Know Your Priorities",
      },
      {
        type: "paragraph",
        text: "Sometimes flexibility, mentorship, or learning opportunities matter more than salary alone.",
      },
      {
        type: "heading",
        text: "Be Professional",
      },
      {
        type: "paragraph",
        text: "Approach every discussion with professionalism, gratitude, and clear reasoning.",
      },
    ],
  },
];
