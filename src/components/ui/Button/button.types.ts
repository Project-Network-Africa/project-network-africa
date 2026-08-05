export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white" | "light";
  href?: string;
  onClick?: () => void;
  className?: string;
}
