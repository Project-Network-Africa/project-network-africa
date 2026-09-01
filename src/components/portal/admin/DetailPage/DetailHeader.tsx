"use client";

import Link from "next/link";

import { Button } from "@/src/components/ui";

import { DetailHeaderProps } from "./DetailPage.types";

export default function DetailHeader({
  backHref,
  backLabel,
  title,
  avatar,
  name,
  subtitle,
  status,
  statusClassName,
  actions = [],
}: DetailHeaderProps) {
  return (
    <>
      {/* Back link */}
      <Link
        href={backHref}
        className="mb-2 inline-block text-[12px] font-medium text-[#303035] transition hover:text-[#00B6CE]"
      >
        ← {backLabel}
      </Link>

      {/* Page title */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <h1 className="text-[28px] font-bold leading-tight text-[#1F1F25] md:text-[30px]">
          {title}
        </h1>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[12px] font-semibold text-white">
          CN
        </div>
      </div>

      {/* Main detail header card */}
      <div className="rounded-[14px] border border-[#DDE1E5] bg-white p-5 lg:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Profile */}
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[16px] font-bold text-white">
              {avatar}
            </div>

            <div className="min-w-0">
              <h2 className="text-[18px] font-bold text-[#1F1F25]">{name}</h2>

              {subtitle && (
                <p className="mt-1 text-[12px] text-[#737379]">{subtitle}</p>
              )}
            </div>
          </div>

          {/* Status + actions */}
          <div className="flex flex-wrap items-center gap-2">
            {status && (
              <span
                className={`rounded-full px-4 py-2 text-[12px] font-semibold ${
                  statusClassName ?? "bg-[#E1F3EC] text-[#008F58]"
                }`}
              >
                {status}
              </span>
            )}

            {actions.map((action) => (
              <Button
                key={action.label}
                variant={action.variant === "primary" ? "primary" : "light"}
                className={`h-9 rounded-lg px-4 py-2 text-[12px] font-semibold ${
                  action.variant === "danger"
                    ? "border border-[#DC2727] text-[#DC2727]"
                    : ""
                }`}
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
