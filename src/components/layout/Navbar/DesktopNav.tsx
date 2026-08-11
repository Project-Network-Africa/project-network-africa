"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, moreLinks } from "./navLinks";
import { ChevronDown } from "lucide-react";

export default function DesktopNav() {
  const [moreOpen, setMoreOpen] = useState(false);
  return (
    <ul className="hidden items-center gap-10 lg:gap-5 lg:flex">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-sm font-medium text-[#1F1F25] transition hover:text-[#00B6CE]"
          >
            {link.name}
          </Link>
        </li>
      ))}
      {/* More dropdown */}
      {/* More dropdown */}
      <li className="relative">
        <button
          type="button"
          onClick={() => setMoreOpen(!moreOpen)}
          className="flex items-center gap-1 text-sm font-medium text-[#1F1F25] transition hover:text-[#00B6CE]"
          aria-expanded={moreOpen}
        >
          More
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              moreOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {moreOpen && (
          <div className="absolute right-0 top-full z-50 mt-3 w-[143px] rounded-lg border border-[#E5E1DC] bg-white p-[10px] shadow-[0px_8px_24px_0px_#0000001F]">
            <div className="flex flex-col">
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMoreOpen(false)}
                  className="rounded-md px-2.5 py-2 text-[16px] font-medium leading-6 text-[#1F1F25] transition hover:bg-[#F6F6F7] hover:text-[#00B6CE]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </li>
    </ul>
  );
}
