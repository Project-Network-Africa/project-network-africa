"use client";

import { employerNavItems } from "@/src/components/portal/employer/(dashboard)/employer-nav.data";
import PortalShell from "@/src/components/portal/Portal/PortalShell";

interface EmployerShellProps {
  children: React.ReactNode;
}

export default function EmployerShell({ children }: EmployerShellProps) {
  return (
    <PortalShell
      navItems={employerNavItems}
      userInitials="JA"
      notificationCount={2}
    >
      {children}
    </PortalShell>
  );
}
