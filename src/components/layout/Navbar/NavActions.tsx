import Link from "next/link";

export default function NavActions() {
  return (
    <div className="hidden items-center gap-5 lg:gap-3 lg:flex">
      <Link
        href="/login"
        className="text-sm font-medium text-[#1F1F25] hover:text-[#00B6CE]"
      >
        Log In
      </Link>

      <Link
        href="/apply"
        className="rounded-lg bg-[#00B6CE] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#009CB2]"
      >
        Apply Now
      </Link>
    </div>
  );
}
