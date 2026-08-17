interface RewardsProgressProps {
  friendsJoined: number;
  friendsRequired: number;
  rewardMessage: string;
}

export default function RewardsProgress({
  friendsJoined,
  friendsRequired,
  rewardMessage,
}: RewardsProgressProps) {
  const progress = (friendsJoined / friendsRequired) * 100;

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Rewards Progress
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-[10px] flex-1 overflow-hidden rounded-full bg-[#E5E5EB]">
          <div
            className="h-full rounded-full bg-[#00B6CE]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="shrink-0 text-[12px] font-semibold text-[#1F1F25]">
          {friendsJoined} of {friendsRequired} friends joined
        </p>
      </div>

      <p className="mt-4 text-[12px] text-[#5D5D61]">{rewardMessage}</p>
    </section>
  );
}
