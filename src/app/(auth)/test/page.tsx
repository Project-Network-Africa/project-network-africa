"use client";

import { useEffect } from "react";

import { checkAuth } from "@/src/services/auth";
import { getApplicantCohorts } from "@/src/services/applicants";

export default function CohortTest() {
  useEffect(() => {
    const test = async () => {
      try {
        const auth = await checkAuth();

        console.log("AUTH:", auth);

        const cohorts = await getApplicantCohorts();

        console.log("COHORTS:", cohorts);
      } catch (error) {
        console.error("TEST FAILED:", error);
      }
    };

    test();
  }, []);

  return <div>Testing...</div>;
}
