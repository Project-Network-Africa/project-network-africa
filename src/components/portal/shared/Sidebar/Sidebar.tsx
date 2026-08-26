"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SidebarProps } from "./portalsidebar";

interface SidebarComponentProps extends SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  navItems,
  isOpen,
  onClose,
}: SidebarComponentProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-[248px] flex-col
          border-r border-[#E5E5EB] bg-[#F8F8F8]
          px-4 py-6
          transition-transform duration-300
          
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="mb-8 flex h-[26px] w-[108px] items-center">
          <Image
            src="/images/logo.svg"
            alt="PN Africa"
            width={108}
            height={26}
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-[2px]">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`
                  rounded-lg px-[14px] py-[10px] text-[13.5px]
                  ${
                    active
                      ? "bg-[#E5FAFC] font-semibold text-[#00B6CE]"
                      : "font-normal text-[#5D5D61] hover:bg-[#F6F6F7]"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
