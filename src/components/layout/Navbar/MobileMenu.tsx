"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, moreLinks } from "./navLinks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="lg:hidden text-black"
        aria-label="Toggle menu"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-full border-t bg-white shadow-lg lg:hidden">
          <div className="flex flex-col px-6 py-6">
            {/* Main links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="border-b border-gray-100 py-4 text-[15px] font-medium text-[#1F1F25]"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* More */}
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center justify-between border-b border-gray-100 py-4 text-left text-[15px] font-medium text-[#1F1F25]"
            >
              <span>More</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {moreOpen && (
              <div className="flex flex-col border-b border-gray-100 pl-4">
                {moreLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="py-3 text-[14px] text-[#5D5D61] hover:text-[#00B6CE]"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Actions */}
            <Link
              href="/login"
              className="mt-6 text-[15px] font-medium text-[#1F1F25]"
              onClick={() => setOpen(false)}
            >
              Log In
            </Link>

            <Link
              href="/register"
              className="mt-4 rounded-lg bg-[#00B6CE] py-3 text-center text-[15px] font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
