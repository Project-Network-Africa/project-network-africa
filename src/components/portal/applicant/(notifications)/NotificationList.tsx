interface Notification {
  id: string;
  title: string;
  time: string;
  unread: boolean;
}

interface NotificationListProps {
  notifications: Notification[];
}

export default function NotificationList({
  notifications,
}: NotificationListProps) {
  return (
    <div className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-5 py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <div className="flex flex-col gap-7">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start gap-4">
            {/* Notification indicator */}
            <span
              className={`mt-[7px] h-2 w-2 shrink-0 rounded-full ${
                notification.unread ? "bg-[#00B6CE]" : "bg-[#E5E5EB]"
              }`}
            />

            {/* Notification content */}
            <div className="flex flex-col gap-[3px]">
              <p
                className={`text-[13px] leading-[100%] ${
                  notification.unread
                    ? "font-semibold text-[#1F1F25]"
                    : "font-normal text-[#5D5D61]"
                }`}
              >
                {notification.title}
              </p>

              <p className="text-[11px] leading-[100%] text-[#5D5D61]">
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
