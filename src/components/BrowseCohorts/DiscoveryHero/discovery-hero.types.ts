export interface DiscoveryHeroContent {
  // breadcrumb: string;
  title: string;
  description: string;

  searchPlaceholder: string;
  buttonText: string;
}

export interface DiscoveryHeroProps extends DiscoveryHeroContent {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit?: () => void;
}
