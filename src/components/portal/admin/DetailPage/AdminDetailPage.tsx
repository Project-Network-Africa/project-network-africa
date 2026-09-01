import DetailActivity from "./DetailActivity";
import DetailHeader from "./DetailHeader";
import DetailSection from "./DetailSection";
import DetailStats from "./DetailStats";

import { AdminDetailPageProps } from "./DetailPage.types";

export default function AdminDetailPage({
  header,
  stats,
  sections,
  activities = [],
  auditLabel = "View full audit log",
  className = "",
}: AdminDetailPageProps) {
  return (
    <main className={`min-h-screen w-full bg-[#F8F8F8] font-body ${className}`}>
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Header */}
        <DetailHeader {...header} />

        {/* Stats */}
        <DetailStats stats={stats} />

        {/* Information sections */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {sections.map((section) => (
            <DetailSection key={section.title} {...section} />
          ))}
        </div>

        {/* Activity */}
        <DetailActivity activities={activities} auditLabel={auditLabel} />
      </div>
    </main>
  );
}
