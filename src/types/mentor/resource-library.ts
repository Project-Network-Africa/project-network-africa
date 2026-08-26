export interface Resource {
  id: string;
  title: string;
  downloadUrl?: string;
}

export interface ResourceSection {
  id: string;
  title: string;
  resources: Resource[];
}
