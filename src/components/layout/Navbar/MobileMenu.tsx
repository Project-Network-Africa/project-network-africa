"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navLinks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="lg:hidden">
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full w-full border-t bg-white shadow-lg lg:hidden z-50">
          <div className="flex flex-col px-6 py-6">
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

            <Link href="/login" className="mt-6">
              Log In
            </Link>

            <Link
              href="/apply"
              className="mt-4 rounded-lg bg-[#00B6CE] py-3 text-center font-semibold text-white"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
