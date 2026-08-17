import InviteByEmail from "@/src/components/portal/applicant/(referral-program)/InviteByEmail";
import ReferralLink from "@/src/components/portal/applicant/(referral-program)/ReferralLink";
import RewardsProgress from "@/src/components/portal/applicant/(referral-program)/RewardsProgress";

export default function ReferralPage() {
  return (
    <div className="flex w-full flex-col gap-5">
      <ReferralLink referralLink="pnafrica.com/refer/amara-okafor-8421" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <RewardsProgress
          friendsJoined={2}
          friendsRequired={3}
          rewardMessage="Refer 1 more friend to unlock a free month of mentorship credit."
        />

        <InviteByEmail />
      </div>
    </div>
  );
}
