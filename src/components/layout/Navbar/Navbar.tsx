import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#E5E5EB] bg-white px-[16px] lg:px-[40px]">
      <div className="mx-auto flex h-[64px] w-full max-w-[1440px] items-center justify-between lg:h-[98px]">
        <div className="flex w-full items-center justify-between">
          <Logo />

          <DesktopNav />

          <NavActions />

          <MobileMenu />
          {/* </Container> */}
        </div>
      </div>
    </nav>
  );
}
