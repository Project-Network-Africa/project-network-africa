export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQHelper {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface FAQProps {
  label?: string;
  title?: string;
  description?: string;
  items: FAQItem[];
  helper?: FAQHelper;
  viewAllLabel?: string;
  viewAllHref?: string;
}

export interface FAQCategory {
  eyebrow: string;
  title: string;
  items: FAQItem[];
}
