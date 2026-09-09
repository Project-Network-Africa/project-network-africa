import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./button.types";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "items-center justify-center transition-colors duration-200";

  const variants = {
    primary:
      "inline-flex rounded-md px-5 py-3 text-base font-medium bg-[#00B6CE] text-white hover:bg-[#009CB2]",
    secondary:
      "inline-flex rounded-md border border-[#E5E1DC] bg-white px-5 py-3 text-base font-medium text-[#1F1F25] hover:bg-gray-50",
    outline:
      "inline-flex rounded-md border-[1.5px] border-white bg-transparent px-5 py-3 text-base font-medium text-white hover:bg-white hover:text-[#1F1F25]",
    white:
      "inline-flex rounded-md bg-[#FFFFFF] px-5 py-3 text-base font-medium text-[#1F1F25] hover:bg-gray-100",
    light:
      "inline-flex rounded-md border border-[#E5E5EB] bg-white px-5 py-3 text-base font-medium text-[#1F1F25] hover:bg-[#F8F8F8]",
    dark: "inline-flex rounded-md bg-[#1F1F25] px-5 py-3 text-base font-medium text-white hover:bg-[#33333A]",
    link: "inline-flex rounded-none bg-transparent p-0 text-[#00B6CE] hover:text-[#009CB2]",
    linkBlack:
      "inline-flex rounded-none bg-transparent p-0 text-[#1F1F25] hover:text-[#1F1F28]",
    danger:
      "inline-flex rounded-md bg-[#DC2727] px-5 py-3 text-base font-medium text-white hover:bg-[#B91C1C]",
  };

  const styles = twMerge(
    baseStyles,
    variants[variant],
    className,
    disabled ? "cursor-not-allowed opacity-50" : "",
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}
