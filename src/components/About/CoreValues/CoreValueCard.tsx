import { CoreValue } from "./core-value.types";

export default function CoreValueCard({
  icon,
  title,

  iconBg,
}: CoreValue) {
  return (
    <div className="flex flex-col gap-3 rounded-[14px] border border-[#E5E5EB] bg-white p-6 transition-shadow duration-200 hover:shadow-md">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>

      <h3 className="text-[15px] font-semibold text-[#1F1F25]">{title}</h3>

      {/* <p className="text-[13px] leading-6 text-[#5D5D61]">{description}</p> */}
    </div>
  );
}
