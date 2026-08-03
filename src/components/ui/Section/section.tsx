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
    <section className={`w-full px-20 py-[88px] ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
