import Image from "next/image";

export default function ProgressCard() {
  return (
    <div className="flex w-[420px] flex-col gap-4 rounded-[18px] bg-white px-6 py-[22px] shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
      {/* Profile */}

      <div className="flex items-center gap-3">
        <Image
          src="/images/avatars/avatar-1.jpg"
          alt="Student"
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />

        <div>
          <h4 className="font-[family:var(--font-body)] text-[15px] font-semibold text-[#1F1F25]">
            Amara Okafor
          </h4>

          <p className="font-[family:var(--font-body)] text-xs text-[#5D5D61]">
            Product Design — Cohort 6
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[#5D5D61]">
          Cohort Progress
        </p>

        <div className="h-2 w-full rounded-full bg-[#E6E6E6]">
          <div className="h-2 w-[68%] rounded-full bg-[#00B6CE]" />
        </div>

        <p className="text-xs text-[#5D5D61]">
          Week 8 of 12 — On track for graduation
        </p>
      </div>

      {/* Stats */}

      <div className="flex justify-between">
        <div>
          <h3 className="text-[20px] font-bold text-[#1F1F25]">4</h3>
          <p className="text-[10px] text-[#5D5D61]">Team Members</p>
        </div>

        <div>
          <h3 className="text-[20px] font-bold text-[#1F1F25]">12</h3>
          <p className="text-[10px] text-[#5D5D61]">Weeks</p>
        </div>

        <div>
          <h3 className="text-[20px] font-bold text-[#1F1F25]">3</h3>
          <p className="text-[10px] text-[#5D5D61]">Projects Shipped</p>
        </div>
      </div>

      {/* Mini Bar Chart */}

      <div className="flex items-end gap-[6px]">
        <div className="h-[14px] w-10 rounded bg-[#5D5D61]" />
        <div className="h-[22px] w-10 rounded bg-[#1F1F25]" />
        <div className="h-[18px] w-10 rounded bg-[#00B6CE]" />
        <div className="h-[30px] w-10 rounded bg-[#1F1F25]" />
        <div className="h-[24px] w-10 rounded bg-[#5D5D61]" />
        <div className="h-[36px] w-10 rounded bg-[#00B6CE]" />
        <div className="h-[28px] w-10 rounded bg-[#00B6CE]" />
      </div>
    </div>
  );
}
