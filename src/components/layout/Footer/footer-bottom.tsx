import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="mt-16 border-t-[3px] border-[#5D5D61] pt-6">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:items-center">
        {/* Copyright */}

        <div className="text-center lg:text-left">
          <p className="text-sm font-medium text-[#5D5D61]">
            © 2026 PN Africa. All rights reserved.
          </p>
        </div>

        {/* Links */}

        <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-7">
          <Link
            href="/privacy"
            className="text-sm font-medium text-[#5D5D61] transition hover:text-white"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-sm font-medium text-[#5D5D61] transition hover:text-white"
          >
            Terms of Service
          </Link>

          <Link
            href="#"
            className="text-sm font-medium text-[#5D5D61] transition hover:text-white"
          >
            LinkedIn
          </Link>

          <Link
            href="#"
            className="text-sm font-medium text-[#5D5D61] transition hover:text-white"
          >
            X
          </Link>
        </div>

        {/* Credit */}

        <div className="text-center lg:text-right">
          <p className="text-sm font-medium text-[#5D5D61]">
            Site by PN Africa Team
          </p>
        </div>
      </div>
    </div>
  );
}
