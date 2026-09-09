export type ProgrammeStatus =
  | "Applications open"
  | "Seats left"
  | "Join waitlist"
  | "Coming soon";

export interface Programme {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  deliveryMode: string;
  nextStart: string;
  status: ProgrammeStatus;
}

export interface ProgrammeCatalogueProps {
  programmes: Programme[];
  eyebrow?: string;
  title?: string;
  backgroundClassName?: string;
}
