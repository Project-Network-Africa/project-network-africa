import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

interface AuthCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  height?: string;
}

export default function AuthCard({
  title,
  description,
  children,
  footer,
  height,
}: AuthCardProps) {
  return (
    <div
      className={`w-full max-w-[440px] rounded-[18px] bg-white p-9 shadow-[0px_8px_24px_0px_#0000000F] ${
        height ?? ""
      }`}
    >
      <div className="flex flex-col gap-[22px]">
        {/* Logo */}
        <Link href="/" className="flex h-[20px] w-fit items-center">
          <Image
            src="images/logo.svg"
            alt="PN Africa"
            width={100}
            height={20}
            priority
          />
        </Link>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1 className="text-[22px] font-bold leading-none text-[#1F1F25]">
            {title}
          </h1>

          {description && (
            <p className="text-[13px] leading-4 text-[#5D5D61]">
              {description}
            </p>
          )}
        </div>

        {/* Page content */}
        {children}

        {/* Footer */}
        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
}
