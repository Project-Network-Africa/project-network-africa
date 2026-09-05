import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="mt-16 border-t-[3px] border-[#5D5D61] pt-6 font-body">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:items-center">
        {/* Copyright */}
        <div className="order-2 text-center lg:order-none lg:text-left">
          <p className="text-[12px] font-medium leading-[18px] text-[#BFBFC7] lg:text-[14px] lg:leading-[20px] lg:text-[#5D5D61]">
            © 2026 PN Africa. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="order-1 flex flex-wrap items-center justify-center gap-5 leading-[18px] lg:order-none lg:gap-7 lg:leading-[20px]">
          <Link
            href="/privacy-policy"
            className="text-[12px] font-medium text-[#BFBFC7] transition hover:text-white lg:text-[14px] lg:text-[#5D5D61]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-of-service"
            className="text-[12px] font-medium text-[#BFBFC7] transition hover:text-white lg:text-[14px] lg:text-[#5D5D61]"
          >
            Terms of Service
          </Link>

          <Link
            href="#"
            className="text-[12px] font-medium text-[#BFBFC7] transition hover:text-white lg:text-[14px] lg:text-[#5D5D61]"
          >
            LinkedIn
          </Link>

          <Link
            href="#"
            className="text-[12px] font-medium text-[#BFBFC7] transition hover:text-white lg:text-[14px] lg:text-[#5D5D61]"
          >
            X
          </Link>
        </div>

        {/* Credit */}
        <div className="order-3 text-center lg:order-none lg:text-right">
          <p className="text-[12px] font-normal leading-[18px] text-[#BFBFC7] lg:text-[14px] lg:leading-[20px] lg:text-[#5D5D61]">
            Site by PN Africa Team
          </p>
        </div>
      </div>
    </div>
  );
}
