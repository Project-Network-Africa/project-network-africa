"use client";

import { Resource } from "@/src/types/mentor/resource-library";
import { Button } from "@/src/components/ui";

interface ResourceItemProps {
  resource: Resource;
}

export default function ResourceItem({ resource }: ResourceItemProps) {
  const handleDownload = () => {
    if (!resource.downloadUrl || resource.downloadUrl === "#") {
      return;
    }

    window.open(resource.downloadUrl, "_blank");
  };

  return (
    <div className="flex min-h-[44px] items-center justify-between gap-4 rounded-[9px] bg-[#F7F7F8] px-[14px]">
      <div className="flex min-w-0 items-center gap-[12px]">
        {/* File icon */}
        <span aria-hidden="true" className="shrink-0 text-[14px] leading-none">
          📄
        </span>

        <p className="truncate text-[12px] font-semibold text-[#1F1F25]">
          {resource.title}
        </p>
      </div>

      <Button
        variant="light"
        onClick={handleDownload}
        className="h-[27px] shrink-0 rounded-[8px] border border-[#E5E5EB] bg-white px-[14px] text-[11px] font-semibold text-[#1F1F25] hover:bg-[#F6F6F7]"
      >
        Download
      </Button>
    </div>
  );
}
