import Image from "next/image";

export default function ProjectVisual() {
  return (
    <>
      {/* Sprint Board */}
      <div
        className="
          absolute
          left-[0%]
          top-[0%]
          z-0
          w-[20%]
          max-w-[180px]
          rounded-[12.6px]
          bg-white
          p-2
          shadow-xl
        "
      >
        <h4 className="mb-2 text-[10px] font-semibold text-[#1F1F25] sm:text-xs">
          Sprint Board
        </h4>

        <div className="flex items-end gap-1.5">
          <div className="h-3 w-3 rounded bg-[#5D5D61]" />
          <div className="h-5 w-3 rounded bg-[#1F1F25]" />
          <div className="h-7 w-3 rounded bg-[#00B6CE]" />
        </div>
      </div>

      {/* Team Card */}
      <div
        className="
          absolute
          bottom-[0%]
          right-[0%]
          z-10
          w-[25%]
          max-w-[160px]
          rounded-[12.6px]
          bg-white
          p-2
          shadow-xl
        "
      >
        <h4 className="mb-2 text-[10px] font-semibold text-[#1F1F25] sm:text-xs">
          3 Teammates
        </h4>

        <div className="flex -space-x-2">
          <Image
            src="/images/realprojectexperience/a.jpg"
            alt=""
            width={20}
            height={20}
            className="rounded-full border-2 border-white"
          />

          <Image
            src="/images/realprojectexperience/b.jpg"
            alt=""
            width={20}
            height={20}
            className="rounded-full border-2 border-white"
          />

          <Image
            src="/images/realprojectexperience/c.jpg"
            alt=""
            width={20}
            height={20}
            className="rounded-full border-2 border-white"
          />
        </div>
      </div>
    </>
  );
}
