import Link from "next/link";
import { navLinks } from "./navLinks";

export default function DesktopNav() {
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
    </ul>
  );
}
