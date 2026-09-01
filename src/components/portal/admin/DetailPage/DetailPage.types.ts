// import { ReactNode } from "react";

// export interface DetailStat {
//   label: string;
//   value: string;
//   valueClassName?: string;
// }

// export interface DetailItem {
//   value: ReactNode;
//   highlight?: boolean;
// }

// export interface DetailSectionData {
//   title: string;
//   items: DetailItem[];
// }

// export interface DetailActivity {
//   text: string;
//   time?: string;
// }

// export interface DetailHeaderAction {
//   label: string;
//   variant?: "primary" | "light" | "danger";
//   onClick?: () => void;
// }

// export interface AdminDetailPageProps {
//   backHref: string;
//   backLabel: string;

//   title: string;

//   avatar: ReactNode;

//   name: string;
//   subtitle?: string;

//   status?: string;
//   statusClassName?: string;

//   actions?: DetailHeaderAction[];

//   stats: DetailStat[];

//   sections: DetailSectionData[];

//   activities?: DetailActivity[];

//   auditLabel?: string;

//   className?: string;
// }
import { ReactNode } from "react";

export interface DetailAction {
  label: string;
  variant?: "primary" | "light" | "danger";
  onClick?: () => void;
}

export interface DetailStat {
  label: string;
  value: string;
  valueClassName?: string;
}

export interface DetailSectionItem {
  value: ReactNode;
  highlight?: boolean;
}

export interface DetailSectionData {
  title: string;
  items: DetailSectionItem[];
}

export interface DetailActivity {
  text: string;
  time?: string;
}

export interface DetailHeaderProps {
  backHref: string;
  backLabel: string;
  title: string;
  avatar: ReactNode;
  name: string;
  subtitle?: string;
  status?: string;
  statusClassName?: string;
  actions?: DetailAction[];
}

export interface DetailStatsProps {
  stats: DetailStat[];
}

export interface DetailSectionProps {
  title: string;
  items: DetailSectionItem[];
}

export interface DetailActivityProps {
  activities: DetailActivity[];
  auditLabel?: string;
}

export interface AdminDetailPageProps {
  header: DetailHeaderProps;
  stats: DetailStat[];
  sections: DetailSectionData[];
  activities?: DetailActivity[];
  auditLabel?: string;
  className?: string;
}
