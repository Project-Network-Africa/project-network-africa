import Image from "next/image";

export default function ProgressCard() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-[18px] bg-white  p-4 shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:p-5 lg:p-6">
      {/* Profile */}

      <div className="flex items-center gap-3">
        {/* <Image
          src="/images/avatars/avatar-1.jpg"
          alt="Student"
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        /> */}
        <Image
          src="/images/avatars/avatar-1.jpg"
          alt="Student"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
        />

        <div>
          <h4 className="text-sm font-semibold text-[#1F1F25] sm:text-[15px]">
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

      <div className="grid grid-cols-3 gap-4 text-center">
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
        <div className="h-[14px] flex-1 rounded bg-[#5D5D61]" />
        <div className="h-[22px] flex-1 rounded bg-[#1F1F25]" />
        <div className="h-[18px] flex-1 rounded bg-[#00B6CE]" />
        <div className="h-[30px] flex-1 rounded bg-[#1F1F25]" />
        <div className="h-[24px] flex-1 rounded bg-[#5D5D61]" />
        <div className="h-[36px] flex-1 rounded bg-[#00B6CE]" />
        <div className="h-[28px] flex-1 rounded bg-[#00B6CE]" />
      </div>
    </div>
  );
}
