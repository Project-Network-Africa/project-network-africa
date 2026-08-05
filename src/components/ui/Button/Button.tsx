import Link from "next/link";
import { ButtonProps } from "./button.types";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-medium transition-colors duration-200";

  // const variants = {
  //   primary: "bg-[#00B6CE] text-white hover:bg-[#009CB2]",

  //   secondary:
  //     "border border-[#E5E1DC] bg-white text-[#1F1F25] hover:bg-gray-50",
  //   outline:
  //     "border-[1.5px] border-white bg-transparent text-white hover:bg-white hover:text-[#1F1F25]",
  //   white: "bg-white text-[#1F1F25] hover:bg-gray-100",
  // };

  const variants = {
    primary: "bg-[#00B6CE] text-white hover:bg-[#009CB2]",

    secondary:
      "border border-[#E5E1DC] bg-white text-[#1F1F25] hover:bg-gray-50",

    outline:
      "border-[1.5px] border-white bg-transparent text-white hover:bg-white hover:text-[#1F1F25]",

    white: "bg-white text-[#1F1F25] hover:bg-gray-100",

    light: "border border-[#E5E5EB] bg-white text-[#1F1F25] hover:bg-[#F8F8F8]",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
