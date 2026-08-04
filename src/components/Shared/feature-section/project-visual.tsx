import Image from "next/image";

export default function ProjectVisual() {
  return (
    <>
      {/* Ellipse */}
      <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-white/10 sm:-left-10 sm:h-40 sm:w-40 lg:-left-[78px] lg:top-[158px] lg:h-[260px] lg:w-[260px]" />

      {/* Dot Grid */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 7 }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute h-[2px] w-[2px] rounded-full bg-white/20"
              style={{
                left: `${10 + col * 13}%`,
                top: `${10 + row * 12}%`,
              }}
            />
          )),
        )}
      </div>

      {/* Sprint Board */}
      <div
        className="
          absolute
          left-[6%]
          top-[8%]
          z-10
          w-[42%]
          max-w-[180px]
          rounded-xl
          bg-white
          p-3
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
          bottom-[8%]
          right-[6%]
          z-10
          w-[38%]
          max-w-[160px]
          rounded-xl
          bg-white
          p-3
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
