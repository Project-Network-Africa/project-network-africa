import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        px-5
        sm:px-8
        md:px-10
        lg:px-20
        w-full
       
        ${className}
      `}
    >
      {children}
    </div>
  );
}
