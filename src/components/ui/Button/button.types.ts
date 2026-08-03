export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  href?: string;
  onClick?: () => void;
  className?: string;
}
