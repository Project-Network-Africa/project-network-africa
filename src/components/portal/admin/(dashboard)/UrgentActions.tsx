import { Button } from "@/src/components/ui";
import DashboardCard from "./DashboardCard";

function ActionRow({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[12px] font-semibold text-[#303035]">{title}</p>

        <p className="mt-0.5 text-[11px] text-[#85858A]">{subtitle}</p>
      </div>

      <div className="shrink-0">{children}</div>
    </div>
  );
}

export default function UrgentActions() {
  return (
    <DashboardCard className="p-5">
      <div>
        <h2 className="text-[15px] font-semibold leading-5 font-body text-[#5D5D61]">
          URGENT ACTIONS
        </h2>

        <p className="mt-1 text-[12px] leading-5 text-[#C72E33]">
          8 pending · oldest 3 days
        </p>
      </div>

      <div className="mt-3 space-y-3">
        <ActionRow title="Mentor applications" subtitle="3 pending · oldest 3d">
          <Button
            variant="primary"
            className="h-8 rounded-lg px-5 py-1 text-[12px] font-semibold"
          >
            Review
          </Button>
        </ActionRow>

        <ActionRow
          title="Employer verification"
          subtitle="2 pending · oldest 2d"
        >
          <Button
            variant="primary"
            className="h-8 rounded-lg px-5 py-1 text-[12px] font-semibold"
          >
            Review
          </Button>
        </ActionRow>

        <ActionRow
          title="Overdue project reviews"
          subtitle="2 overdue · oldest 4d"
        >
          <Button
            variant="primary"
            className="h-8 rounded-lg bg-[#E56B1A] px-5 py-1 text-[12px] font-semibold hover:bg-[#DB5914]"
          >
            Resolve
          </Button>
        </ActionRow>

        <ActionRow title="Failed payments" subtitle="1 failed today">
          <Button
            variant="primary"
            className="h-8 rounded-lg bg-[#C72E33] px-5 py-1 text-[12px] font-semibold hover:bg-[#BE2929]"
          >
            View
          </Button>
        </ActionRow>
      </div>
    </DashboardCard>
  );
}
