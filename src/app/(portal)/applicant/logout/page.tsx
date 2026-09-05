"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/src/services/auth";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout();
      } finally {
        router.push("/login");
      }
    };

    handleLogout();
  }, [router]);

  return <div>Logging out...</div>;
}
