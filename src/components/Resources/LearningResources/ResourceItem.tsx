import Link from "next/link";
import { ResourceItemProps } from "./resource.types";

export default function ResourceItem({
  icon,
  title,
  action,
  iconBg,
  href,
}: ResourceItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-[10px] text-sm font-bold text-white"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>

        <h3 className="text-sm font-semibold text-[#1F1F25]">{title}</h3>
      </div>

      <Link
        href={href}
        className="text-xs font-semibold text-[#00B6CE] hover:underline"
      >
        {action}
      </Link>
    </div>
  );
}
