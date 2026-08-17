"use client";

import { useRouter } from "next/navigation";
import { ProfileHeaderProps } from "./profile";
import { Button } from "@/src/components/ui";

export default function ProfileHeader({
  initials,
  name,
  cohort,
}: ProfileHeaderProps) {
  const router = useRouter();

  const handleEdit = () => {
    router.push("/applicant/profile/edit");
  };

  return (
    <div className="flex w-full flex-col gap-5 rounded-[14px] border border-[#E5E5EB] bg-white px-5 py-5 shadow-[0px_2px_8px_0px_#0000000A] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#00B6CE] text-[23px] font-bold text-white">
          {initials}
        </div>

        <div className="flex flex-col gap-[2px]">
          <p className="text-[16px] font-semibold text-[#1F1F25]">{name}</p>

          <p className="text-[12px] text-[#5D5D61]">{cohort}</p>
        </div>
      </div>

      <Button
        variant="light"
        onClick={handleEdit}
        className="w-fit rounded-[8px] px-4 py-[10px] text-[12px] font-semibold"
      >
        Edit Profile
      </Button>
    </div>
  );
}
