import { ReactNode } from "react";
import Container from "../Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      className={`
        w-full
        px-3
        py-6
        md:py-8
        lg:py-14
        sm:px-8
        md:px-10
        lg:px-20

        lg:py-[88px]

        ${className}
      `}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
