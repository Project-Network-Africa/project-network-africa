export interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "white"
    | "light"
    | "dark"
    | "link"
    | "danger";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
