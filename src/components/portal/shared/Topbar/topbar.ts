export interface TopbarProps {
  title: string;
  userInitials: string;
  notificationCount?: number;
  onNotificationsClick?: () => void;
  onProfileClick?: () => void;
  onMenuClick?: () => void;
}
