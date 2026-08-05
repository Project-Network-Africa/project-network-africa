export interface Quote {
  quote: string;
  author?: string;
  role?: string;
}

export interface QuoteSectionProps {
  label: string;
  title: string;
  quotes: Quote[];
  showAuthor?: boolean;
}
