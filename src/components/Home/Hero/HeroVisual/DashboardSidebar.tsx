import Logo from "@/src/components/layout/Navbar/Logo";
import Image from "next/image";
import Link from "next/link";
const sidebarItems = [
  "Dashboard",
  "Application Status",
  "Profile",
  "Projects",
  "Team Workspace",
  "Mentorship",
  "Messages",
  "Calendar",
  "Payments",
  "Learning Resources",
  "Career Services",
  "Achievements",
  "Referral Program",
  "Notifications",
  "Help & Support",
  "Settings",
];

export default function DashboardSidebar() {
  return (
    <aside
      className="
        hidden
        w-[43.74px]
        shrink-0
        border-r
        border-[#E5E5EB]
        bg-white
        px-2
        py-3
        sm:block
        lg:w-[89.27999877929688px]
        lg:px-3
        lg:py-4
      "
    >
      {/* Logo */}
      <div className="mb-4 px-1">
        <div className="flex items-center gap-0.5">
          <div className="h-[9.36px] w-[38.88px]">
            <Image
              src="/images/logo.svg"
              alt="PN Africa"
              width={100}
              height={20}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-[6px] lg:space-y-[7px]">
          {sidebarItems.map((item, index) => {
            const active = index === 0;

            return (
              <li key={item}>
                <div
                  className={`
                    rounded-[3px]
                    px-1
                     py-[1px]
                    text-[2.38px]
                    leading-none
                    lg:px-1.5
                   
                    lg:text-[4.86px]
                    ${
                      active
                        ? "bg-[#E5FAFC] font-semibold text-[#00A8BC]"
                        : "text-[#7B7B82]"
                    }
                  `}
                >
                  {item}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
