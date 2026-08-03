import Link from "next/link";

const links = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
];

export default function FooterBottom() {
  return (
    <div className="border-t-[3px] border-[#5D5D61] pt-5">
      <div className="grid grid-cols-3 items-center">
        {/* Left */}

        <div>
          <p className="font-body text-sm font-medium text-[#5D5D61]">
            © 2026 PN Africa. All rights reserved.
          </p>
        </div>

        {/* Center */}

        <div className="flex items-center justify-center gap-7">
          <Link
            href="/privacy"
            className="font-body text-sm font-medium text-[#5D5D61] transition hover:text-white"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="font-body text-sm font-medium text-[#5D5D61] transition hover:text-white"
          >
            Terms of Service
          </Link>

          <Link
            href="#"
            className="font-body text-sm font-medium text-[#5D5D61] transition hover:text-white"
          >
            LinkedIn
          </Link>

          <Link
            href="#"
            className="font-body text-sm font-medium text-[#5D5D61] transition hover:text-white"
          >
            X
          </Link>
        </div>

        {/* Right */}

        <div className="text-right">
          <p className="font-body text-sm font-medium text-[#5D5D61]">
            Site by PN Africa Team
          </p>
        </div>
      </div>
    </div>
  );
}
