const notifications = [
  "You have new feedback",
  "Cohort town hall scheduled for Friday",
  "Payment receipt available",
];

export default function NotificationsCard() {
  return (
    <section className="h-full rounded-[5px] border border-[#E5E5EB] p-2 lg:p-3">
      <p className="text-[5px] font-semibold uppercase text-[#77777D] lg:text-[6px]">
        Notifications
      </p>

      <div className="mt-2 space-y-2">
        {notifications.map((notification) => (
          <div key={notification} className="flex items-start gap-1.5">
            <span className="mt-[2px] h-1 w-1 shrink-0 rounded-full bg-[#00B6CE]" />

            <p className="text-[4px] leading-[1.3] text-[#5D5D61] lg:text-[5px]">
              {notification}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
