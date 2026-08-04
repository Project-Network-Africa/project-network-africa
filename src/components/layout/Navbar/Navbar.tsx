import Container from "../../ui/Container";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="relative w-full border-b border-gray-200 bg-white">
      <Container className="flex items-center justify-between px-5 py-5 lg:px-10">
        <Logo />

        <DesktopNav />

        <NavActions />

        <MobileMenu />
      </Container>
    </nav>
  );
}
