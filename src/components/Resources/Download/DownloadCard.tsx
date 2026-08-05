import Link from "next/link";
import { DownloadCardProps } from "./download.types";

export default function DownloadCard({ title, size, href }: DownloadCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-[10px] rounded-xl border border-[#E5E5EB] bg-white p-5 transition hover:border-[#00B6CE] hover:shadow-md"
    >
      <h3 className="text-sm font-semibold text-[#1F1F25]">{title}</h3>

      <p className="text-xs text-[#5D5D61]">{size}</p>
    </Link>
  );
}
