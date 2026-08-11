import { Cohort } from "@/src/types/cohorts";

export interface CohortListProps {
  cohorts: Cohort[];
}

export interface CohortCardProps {
  cohort: Cohort;
}

export interface CohortMetaProps {
  label: string;
  value: string;
}

export interface SeatProgressProps {
  seatsFilled: number;
  totalSeats: number;
}
