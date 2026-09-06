"use client";

import { useEffect } from "react";

import { checkAuth } from "@/src/services/auth";
import { getCohorts } from "@/src/services/applicants";

export default function CohortTest() {
  useEffect(() => {
    const test = async () => {
      try {
        const auth = await checkAuth();

        console.log("AUTH:", auth);

        const cohorts = await getCohorts();

        console.log("COHORTS:", cohorts);
      } catch (error) {
        console.error("TEST FAILED:", error);
      }
    };

    test();
  }, []);

  return <div>Testing...</div>;
}
