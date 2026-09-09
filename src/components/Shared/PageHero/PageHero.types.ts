import { ReactNode } from "react";

export interface PageHeroButton {
  label: string;
  href: string;
  variant?: "dark" | "light" | "outline";
}

export interface PageHeroStat {
  value: string;
  label: string;
}

export interface PageHeroFloatingCard {
  title: string;
  description: string;
}

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  buttons?: PageHeroButton[];
  stats?: PageHeroStat[];
  image: string;
  imageAlt?: string;
  floatingCard?: PageHeroFloatingCard;

  backgroundClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
  imageClassName?: string;

  children?: ReactNode;
}
