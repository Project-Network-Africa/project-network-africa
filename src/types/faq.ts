export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  label?: string;
  title?: string;
  items: FAQItem[];
}
