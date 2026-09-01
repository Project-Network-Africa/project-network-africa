import { TopbarProps } from "./topbar";

export default function Topbar({
  title,
  userInitials,
  notificationCount,
  onNotificationsClick,
  onProfileClick,
  onMenuClick,
}: TopbarProps) {
  return (
    <div className="flex min-h-[38px] items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        {/* Mobile menu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F6F6F7] text-lg lg:hidden text-black"
          aria-label="Open navigation"
        >
          ☰
        </button>

        <h1 className="truncate text-[20px] font-bold text-[#1F1F25] sm:text-[24px]">
          {title}
        </h1>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        {/* Notification */}
        <button
          onClick={onNotificationsClick}
          className="relative flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#F6F6F7]"
          aria-label="Notifications"
        >
          🔔
          {!!notificationCount && (
            <span className="absolute -right-[2px] -top-[2px] flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-[#00B6CE] px-[2px] text-[8px] font-bold text-white">
              {notificationCount}
            </span>
          )}
        </button>

        {/* Profile */}
        <button
          onClick={onProfileClick}
          className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#00B6CE] text-[13px] font-bold text-white"
          aria-label="Profile"
        >
          {userInitials}
        </button>
      </div>
    </div>
  );
}
