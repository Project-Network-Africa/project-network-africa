"use client";

import { Button } from "@/src/components/ui";
import Link from "next/link";

interface ContentHeaderProps {
  onCreateContent?: () => void;
}

export default function ContentHeader({ onCreateContent }: ContentHeaderProps) {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="mt-1 text-[12px] text-[#737379]">
          Create, update, schedule and publish every PN Africa website content
          type.
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Link href="/admin/content-management/create">
          <Button
            variant="primary"
            className="h-9 rounded-lg px-4 text-[12px] font-semibold"
          >
            Create content
          </Button>
        </Link>
      </div>
    </section>
  );
}
