// export interface FaqItemProps {
//   question: string;
//   answer: string;
//   isOpen: boolean;
//   onToggle: () => void;
// }
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  label?: string;
  title?: string;
  items: FAQItem[];
}
