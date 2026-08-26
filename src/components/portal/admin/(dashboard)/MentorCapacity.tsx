import DashboardCard from "./DashboardCard";

export default function MentorCapacity() {
  return (
    <DashboardCard className="p-5 font-body">
      <h2 className="text-[15px] font-semibold text-[#5D5D61] ">
        MENTOR CAPACITY
      </h2>

      <p className="mt-2 text-[26px] font-bold leading-8 text-[#00B6CE]">42</p>

      <p className="mt-1 text-[12px] text-[#85858A]">Active mentors</p>

      <div className="mt-3 divide-y divide-[#E5E8EA] border-t text-[#1F1F25] border-[#E5E8EA]">
        <p className="py-2.5 text-[12px] font-semibold">
          34 unassigned applicants
        </p>

        <p className="py-2.5 text-[12px] font-semibold">
          1:8 mentor-to-mentee ratio
        </p>

        <p className="py-2.5 text-[12px] font-semibold">
          12 overdue feedback reviews
        </p>
      </div>
    </DashboardCard>
  );
}
