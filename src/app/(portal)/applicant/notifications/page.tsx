import NotificationList from "@/src/components/portal/applicant/(notifications)/NotificationList";
import { notifications } from "@/src/data/applicant/notification";

export default function PaymentsPage() {
  return (
    <div className="flex w-full flex-col gap-5">
      <NotificationList notifications={notifications} />
    </div>
  );
}
