export type SettingsActionVariant = "default" | "success" | "danger";

export interface SettingsItemData {
  label: string;
  value: string;
  action?: string;
  actionVariant?: SettingsActionVariant;
}

export interface SettingsSectionData {
  title: string;
  items: SettingsItemData[];
}

export interface SettingsTab {
  id: string;
  label: string;
}

export interface DangerZoneData {
  title: string;
  description: string;
  actions: {
    label: string;
    variant?: "default" | "danger";
  }[];
}
