"use client";

import { applicantNavItems } from "@/src/components/portal/applicant/(dashboard)/applicant-nav.data";
import PortalShell from "@/src/components/portal/Portal/PortalShell";

interface ApplicantShellProps {
  children: React.ReactNode;
}

export default function ApplicantShell({ children }: ApplicantShellProps) {
  return (
    <PortalShell
      navItems={applicantNavItems}
      userInitials="AO"
      notificationCount={3}
    >
      {children}
    </PortalShell>
  );
}
