import { PrivacyPolicySection } from "@/src/types/public/privacy";

export const privacyPolicySections: PrivacyPolicySection[] = [
  {
    id: "what-we-collect",
    title: "1. What We Collect",
    content:
      "We collect information you provide directly (name, email, phone, application details, portfolio links) and information generated through platform use (cohort progress, project submissions, messages, payment records).",
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content:
      "We use your data to match you with mentors and cohorts, facilitate project collaboration, process payments, communicate updates, and improve the platform. We never sell your personal data to third parties.",
  },
  {
    id: "who-we-share",
    title: "3. Who We Share It With",
    content:
      "Employers can view profile and portfolio information you choose to make visible in the Talent Directory. Mentors see progress and project data for their assigned mentees only. Payment processors (Stripe, PayPal) receive only the information required to process a transaction.",
  },
  {
    id: "your-rights",
    title: "4. Your Rights",
    content:
      "You can access, correct, export, or request deletion of your personal data at any time from your account Settings. You may also opt out of non-essential communications and control your profile visibility to employers.",
  },
  {
    id: "cookies",
    title: "5. Cookies",
    content:
      "We use cookies to keep you logged in, remember preferences, and understand aggregate usage patterns. You can manage cookie preferences at any time via the cookie banner or your browser settings.",
  },
  {
    id: "retention-security",
    title: "6. Data Retention & Security",
    content:
      "We retain your data only as long as necessary to provide our services or meet legal obligations, and we use industry-standard safeguards to protect it against unauthorized access.",
  },
  {
    id: "contact-us",
    title: "7. Contact Us",
    content:
      "Questions about this policy or your data can be sent to privacy@pnafrica.org.",
  },
];
