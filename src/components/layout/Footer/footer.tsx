// import FooterBottom from "./footer-bottom";

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-[linear-gradient(45deg,#1F1F25_0%,#131316_83.33%)]">
//       {/* Dot Pattern */}
//       <div
//         className="absolute inset-0 md:opacity-20 opacity-70"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, rgba(255,255,255,.35) 1.2px, transparent 1.2px)",
//           backgroundSize: "32px 32px",
//         }}
//       />

//       {/* Decorative circles */}
//       <div className="absolute bottom-0 left-0 h-28 w-full bg-white/20 blur-3xl" />

//       <div className="absolute -left-10 bottom-16 h-40 w-40 rounded-full bg-white/10" />

//       <div className="absolute left-1/4 -top-16 h-40 w-40 rounded-full bg-white/10" />

//       <div className="absolute -right-10 top-40 h-40 w-40 rounded-full bg-white/10" />
//       <div className="relative mx-auto flex min-h-[390px] w-full max-w-[1440px] flex-col justify-between px-6 py-10 sm:px-10 lg:min-h-[561px] lg:px-20 lg:py-24">
//         <h2 className="max-w-[596px] text-center font-heading text-[40px] font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-left lg:text-[72px] lg:leading-[100%] lg:tracking-[-2px]">
//           <span className="lg:hidden">
//             Building the future of tech talent in Africa.
//           </span>

//           <span className="hidden lg:block">
//             Building the future
//             <br />
//             of tech talent in
//             <br />
//             Africa.
//           </span>
//         </h2>

//         <FooterBottom />
//       </div>
//     </footer>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "../../ui/Button";
import { footerLinks } from "./footer-data";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  return (
    <footer className="relative overflow-hidden border-t-[4px] border-[#00B6CE] bg-[linear-gradient(135deg,#1F1F25_0%,#131316_100%)]">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 lg:px-16 lg:py-[52px]">
        {/* Top Section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Logo + Heading */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative h-[47px] w-[158px] overflow-hidden rounded-[5px] bg-white lg:h-[71px] lg:w-[188px]">
              <Image
                src="/images/logo.svg"
                alt="PN Africa"
                fill
                className="object-contain p-2 lg:p-3"
              />
            </div>

            <h2 className="mt-6 max-w-[580px] text-center font-heading text-[28px] font-bold leading-[125%] tracking-[-0.5px] text-white sm:text-[34px] lg:mt-7 lg:text-left lg:text-[38px] lg:leading-[125%] lg:tracking-[-1px]">
              Building the future of tech talent in Africa.
            </h2>
          </div>

          {/* CTA Card */}
          <div className="w-full rounded-[16px] border border-[#00B6CE] bg-[#1F1F25] p-5 sm:p-6 lg:w-[560px] lg:p-7">
            <h3 className="font-heading text-[20px] font-bold leading-[125%] text-white lg:text-[22px]">
              Ready to build real project experience?
            </h3>

            <p className="mt-4 max-w-[500px] font-body text-[13px] font-normal leading-[150%] text-[#B9B9C2] lg:text-[14px]">
              Explore a programme, join the next cohort and learn through team
              projects with mentor support.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/programs"
                variant="primary"
                className="h-[48px] w-full rounded-[8px] bg-[#00B6CE] px-5 text-[14px] font-semibold text-[#1F1F25] hover:bg-[#36E7FD] sm:w-auto"
              >
                Explore Programs
              </Button>

              <Button
                href="/apply"
                variant="outline"
                className="h-[48px] w-full rounded-[8px] border-[#8D8D96] bg-transparent px-5 text-[14px] font-semibold text-white hover:bg-white hover:text-[#1F1F25] sm:w-auto"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-[#3D3D44] lg:mt-8" />

        {/* Desktop Links */}
        <div className="hidden grid-cols-4 gap-8 py-8 lg:grid">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="font-body text-[13px] font-semibold leading-[100%] text-[#00B6CE]">
                {section.title}
              </p>

              <div className="mt-5 flex flex-col gap-4">
                {/* {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-body text-[14px] font-normal leading-[100%] text-[#D0D0D6] transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))} */}
                {section.links.map((link) =>
                  link.href ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="font-body text-[14px] font-normal leading-[100%] text-[#D0D0D6] transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span
                      key={link.label}
                      className="font-body text-[14px] font-normal leading-[100%] text-[#D0D0D6]"
                    >
                      {link.label}
                    </span>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Links */}
        <div className="lg:hidden">
          {footerLinks.map((section) => {
            const isOpen = openSection === section.title;

            return (
              <div key={section.title} className="border-b border-[#3D3D44]">
                <button
                  type="button"
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-body text-[12px] font-medium leading-[100%] text-white">
                    {section.title}
                  </span>

                  <span className="font-body text-[20px] font-normal leading-none text-[#00B6CE]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="flex flex-col gap-4 pb-5">
                    {section.links.map((link) =>
                      link.href ? (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="font-body text-[13px] text-[#B9B9C2] transition hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <span
                          key={link.label}
                          className="font-body text-[13px] text-[#B9B9C2]"
                        >
                          {link.label}
                        </span>
                      ),
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-[#3D3D44] pt-6 lg:mt-0 lg:pt-7">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Copyright */}
            <p className="order-3 font-body text-[12px] font-normal leading-[18px] text-[#AFAFB8] lg:order-1 lg:text-[14px] lg:leading-[20px]">
              © 2026 PN Africa. All rights reserved.
            </p>

            {/* Legal + Social */}
            <div className="order-1 flex flex-wrap items-center justify-center gap-6 lg:order-2 lg:gap-7">
              <Link
                href="/privacy-policy"
                className="font-body text-[12px] font-normal text-[#AFAFB8] transition hover:text-white lg:text-[14px]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                className="font-body text-[12px] font-normal text-[#AFAFB8] transition hover:text-white lg:text-[14px]"
              >
                Terms of Service
              </Link>

              <Link
                href="#"
                className="font-body text-[12px] font-normal text-[#AFAFB8] transition hover:text-white lg:text-[14px]"
              >
                LinkedIn
              </Link>

              <Link
                href="#"
                className="font-body text-[12px] font-normal text-[#AFAFB8] transition hover:text-white lg:text-[14px]"
              >
                X
              </Link>
            </div>

            {/* Credit */}
            <p className="order-2 hidden font-body text-[14px] font-normal leading-[20px] text-[#AFAFB8] lg:order-3 lg:block">
              Site by PN Africa Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
