export interface ProgrammeFinderProps {
  programmeCount: number;
  totalProgrammeCount: number;
  categories: string[];
  search: string;
  activeCategory: string;
  onSearch: (value: string) => void;
  onCategoryChange: (category: string) => void;
  backgroundClassName?: string;
}
