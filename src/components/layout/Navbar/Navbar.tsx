import Image from "next/image";
import Link from "next/link";
import Container from "../../ui/Container/index";

const navLinks = [
  {
    name: "Programs",
    href: "/programs",
  },
  {
    name: "Cohorts",
    href: "/cohorts",
  },
  {
    name: "Mentorship",
    href: "/mentorship",
  },
  {
    name: "Employers",
    href: "/employers",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Success Stories",
    href: "/success-stories",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200">
      <Container className="flex  items-center justify-between px-10 py-[22px]">
        {/* Logo */}
        <Link href="/" className="flex h-[34px] w-[144px] items-center">
          <Image
            src="/images/logo.svg"
            alt="PN Africa"
            width={144}
            height={34}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 px-[10px]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#1F1F25] transition-colors duration-200 hover:text-[#00B6CE]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex h-[54px] w-[236px] items-center gap-5">
          <Link
            href="/login"
            className="text-sm font-medium text-[#1F1F25] transition-colors duration-200 hover:text-[#00B6CE]"
          >
            Log In
          </Link>

          <Link
            href="/apply"
            className="rounded-lg bg-[#00B6CE] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#009CB2]"
          >
            Apply Now
          </Link>
        </div>
      </Container>
    </nav>
  );
}
