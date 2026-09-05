import { ProgrammeData } from "./programme.types";

export const programmes: ProgrammeData[] = [
  {
    id: 24,

    details: {
      programmeId: "24",
      slug: "product-design",
      category: "Design",
      title: "Product Design",
      image: "",
      description:
        "Build practical product-design skills through mentor-led learning, real projects and a portfolio-ready capstone.",
    },

    hero: {
      title: "Become a Product Designer",
      programmeName: "Product Design",
      description:
        "Learn to research, design and validate meaningful digital products through practical projects and mentor support.",
      duration: "12 weeks",
      format: "Hybrid",
      level: "Beginner",
      buttonText: "Apply now",
      buttonLink: "/apply/product-design",
      mentorText: "Learn with experienced product designers",
      mentors: [
        {
          initials: "AY",
          name: "Amina Yusuf",
          avatarBg: "#00B6CE",
        },
        {
          initials: "CN",
          name: "Chinwe Nwosu",
          avatarBg: "#1F2937",
        },
        {
          initials: "FK",
          name: "Fola King",
          avatarBg: "#168F7B",
        },
      ],
    },

    learningOutcomes: [
      {
        id: 1,
        text: "Conduct confident user research",
      },
      {
        id: 2,
        text: "Design accessible interfaces",
      },
      {
        id: 3,
        text: "Prototype and test ideas",
      },
      {
        id: 4,
        text: "Present product decisions",
      },
    ],

    instructor: {
      name: "Amina Yusuf",
      role: "Lead Product Designer",
      initials: "AY",
      avatarBackground: "#00B6CE",
      biography:
        "Amina is a product leader with 8+ years of experience designing inclusive financial and education products across Africa.",
      experience: "9+ years",
      learnersMentored: "240+",
      productsShipped: "32",
    },

    requirements: [
      {
        id: 1,
        text: "Basic computer literacy",
      },
      {
        id: 2,
        text: "Reliable internet connection",
      },
      {
        id: 3,
        text: "8–10 hours weekly availability",
      },
      {
        id: 4,
        text: "Commitment to practical projects",
      },
    ],

    curriculum: [
      {
        id: 1,
        week: "1–2",
        title: "Design foundations",
        description: "Principles, process and product thinking.",
        accent: "cyan",
      },
      {
        id: 2,
        week: "3–4",
        title: "User research",
        description: "Plan interviews and turn evidence into insights.",
        accent: "dark",
      },
      {
        id: 3,
        week: "5–7",
        title: "Interface design",
        description: "Create accessible flows, systems and prototypes.",
        accent: "cyan",
      },
      {
        id: 4,
        week: "8–12",
        title: "Capstone delivery",
        description: "Validate, document and present a real solution.",
        accent: "dark",
      },
    ],

    faqs: [
      {
        id: 1,
        question: "Do I need professional design experience?",
        answer:
          "No. The programme starts with the foundations and supports beginners through guided practice, mentor feedback and real project work.",
        open: true,
      },
      {
        id: 2,
        question: "Will I work on real projects?",
        answer:
          "Yes. Learners work on practical projects and complete a portfolio-ready capstone.",
      },
      {
        id: 3,
        question: "Can current students apply?",
        answer:
          "Yes. Current students can apply as long as they can meet the programme's weekly time commitment.",
      },
    ],

    capstone: {
      image: "",
      description:
        "A real employer brief where learners research a problem, design a tested solution and present measurable outcomes.",
      featuredQuote:
        "The capstone helped me explain my design decisions with confidence.",
    },

    careerOutcomes: [
      {
        id: 1,
        name: "Amara Okafor",
        role: "Product Designer",
        company: "Flutterwave",
        initials: "AO",
        avatarBackground: "#00B6CE",
        avatarStatus: "Image added",
      },
      {
        id: 2,
        name: "Tunde Bello",
        role: "UX Researcher",
        company: "Paystack",
        initials: "TB",
        avatarBackground: "#1F2937",
        avatarStatus: "Initials only",
      },
      {
        id: 3,
        name: "Fola King",
        role: "Product Analyst",
        company: "Kuda",
        initials: "FK",
        avatarBackground: "#168F7B",
        avatarStatus: "Image added",
      },
    ],

    finalCTA: {
      heading: "Ready to begin your product-design journey?",
      buttonText: "Apply for the next cohort",
      buttonLink: "/apply/product-design",
      nextCohortDate: "19 October 2026",
      applicationDeadline: "30 September 2026",
    },

    publishing: {
      status: "Draft",
      visibility: "Public",
      publishDate: "Publish immediately",
    },

    seo: {
      searchTitle: "Product Design Programme | PN Africa",
      metaDescription:
        "Build practical product-design skills through mentor-led learning, real projects and a portfolio-ready capstone.",
      previewUrl: "pnafrica.org/programs/product-design",
    },

    featuredImageName: "No image selected",
    featuredImageSize: "PNG, JPG or WebP • Max 5 MB",
    imageAltText: "Describe the Product Design programme image",

    versions: [
      {
        version: "Version 3",
        action: "Autosaved",
        author: "Chioma Nwosu",
        date: "2 min ago",
      },
      {
        version: "Version 2",
        action: "Edited",
        author: "Chioma Nwosu",
        date: "1 hour ago",
      },
    ],

    activities: [
      {
        text: "Programme details updated",
        time: "2 min ago",
      },
      {
        text: "Hero section edited",
        time: "12 min ago",
      },
      {
        text: "Curriculum module added",
        time: "1 hour ago",
      },
    ],
  },
];
