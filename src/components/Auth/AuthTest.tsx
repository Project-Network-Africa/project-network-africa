"use client";

import { useEffect } from "react";
import { checkAuth } from "@/src/services/auth";

export default function AuthTest() {
  useEffect(() => {
    const testAuth = async () => {
      try {
        const response = await checkAuth();

        console.log("AUTH CHECK SUCCESS:", response);
      } catch (error) {
        console.error("AUTH CHECK FAILED:", error);
      }
    };

    testAuth();
  }, []);

  return <div>Testing authentication...</div>;
}
