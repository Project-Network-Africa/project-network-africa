import { FAQItem } from "@/src/types/faq";

export interface FaqItemProps extends FAQItem {
  isOpen: boolean;
  onToggle: () => void;
}
