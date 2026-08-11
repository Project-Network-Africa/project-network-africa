import { ReactNode } from "react";

interface AuthButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export default function AuthButton({
  children,
  type = "submit",
  disabled = false,
  onClick,
}: AuthButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="
        h-[45px]
        w-full
        rounded-[10px]
        bg-[#00B6CE]
        px-5
        text-[14px]
        font-semibold
        text-white
        transition
        hover:bg-[#009DB3]
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {children}
    </button>
  );
}
