interface MentorStatsProps {
  stats: {
    assignedMentees: number;
    pendingReviews: number;
    upcomingMeetings: number;
    responseRate: number;
  };
}

export default function MentorStats({ stats }: MentorStatsProps) {
  const cards = [
    {
      value: stats.assignedMentees,
      label: "Assigned Mentees",
      highlight: true,
    },
    {
      value: stats.pendingReviews,
      label: "Pending Reviews",
      highlight: false,
    },
    {
      value: stats.upcomingMeetings,
      label: "Upcoming Meetings",
      highlight: true,
    },
    {
      value: `${stats.responseRate}%`,
      label: "Response Rate",
      highlight: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="h-[95px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-[20px]"
        >
          <p
            className={`text-[28px] font-bold leading-none ${
              card.highlight ? "text-[#00B6CE]" : "text-[#1F1F25]"
            }`}
          >
            {card.value}
          </p>

          <p className="mt-2 text-[12px] text-[#5D5D61]">{card.label}</p>
        </div>
      ))}
    </div>
  );
}
