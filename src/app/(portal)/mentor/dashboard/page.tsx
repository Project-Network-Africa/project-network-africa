"use client";

import { useEffect, useState } from "react";

import MentorDashboard from "@/src/components/portal/mentor/(dashboard)/MentorDashboard";
import { getMyMentorProfile } from "@/src/services/mentors";
import { checkAuth } from "@/src/services/auth";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

type MentorState = "not-applied" | "pending" | "rejected" | "accepted";

export default function MentorDashboardPage() {
  const [mentorState, setMentorState] = useState<MentorState>("not-applied");
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchMentorState = async () => {
      try {
        const authResponse = await checkAuth();
        const user = authResponse.user;

        setUserName(user.firstName || "");
        const response = await getMyMentorProfile();
        const mentor = response?.mentor;

        console.log("MY MENTOR STATUS:", mentor?.status);
        console.log("MY MENTOR PROFILE:", mentor);
        if (!mentor) {
          setMentorState("not-applied");
          return;
        }

        if (mentor.status === "Applied") {
          setMentorState("pending");
          return;
        }

        if (mentor.status === "Rejected") {
          setMentorState("rejected");
          return;
        }

        if (mentor.status === "Accepted") {
          setMentorState("accepted");
          return;
        }

        setMentorState("not-applied");
      } catch (error) {
        console.log("NO MENTOR PROFILE YET");
        setMentorState("not-applied");
      } finally {
        setLoading(false);
      }
    };

    fetchMentorState();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-[500px] items-center justify-center">
        <LoadingState />
      </main>
    );
  }

  return (
    <main>
      <MentorDashboard mentorState={mentorState} userName={userName} />
    </main>
  );
}
