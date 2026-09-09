export interface ProgrammeStat {
  value: string;
  label: string;
}

export interface ProgrammeMatcherStep {
  number: string;
  title: string;
  description: string;
}

export interface ProgramsHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
  stats: ProgrammeStat[];
  matcher: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProgrammeMatcherStep[];
    buttonLabel: string;
    buttonHref: string;
  };
  backgroundClassName?: string;
}
