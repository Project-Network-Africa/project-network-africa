import Image from "next/image";

export default function ProjectVisual() {
  return (
    <>
      {/* Large Ellipse */}
      <div className="absolute -left-[78px] top-[158px] h-[260px] w-[260px] rounded-full bg-white/10" />

      {/* Dot Grid */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 7 }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute h-[2.5px] w-[2.5px] rounded-full bg-white/20"
              style={{
                left: `${20 + col * 80}px`,
                top: `${18 + row * 76}px`,
              }}
            />
          )),
        )}
      </div>

      {/* Sprint Board */}
      <div className="absolute left-10 top-10 z-10 w-[180px] rounded-xl bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
        <h4 className="mb-3 font-body text-xs font-semibold text-[#1F1F25]">
          Sprint Board
        </h4>

        <div className="flex items-start gap-[6px]">
          <div className="h-3 w-[14px] rounded-[3px] bg-[#5D5D61]" />
          <div className="h-[21px] w-[14px] rounded-[3px] bg-[#1F1F25]" />
          <div className="h-[30px] w-[14px] rounded-[3px] bg-[#00B6CE]" />
        </div>
      </div>

      {/* Team Card */}
      <div className="absolute bottom-10 right-10 z-10 w-[160px] rounded-xl bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
        <h4 className="mb-3 font-body text-xs font-semibold text-[#1F1F25]">
          3 Teammates
        </h4>

        <div className="flex -space-x-2">
          <Image
            src="/images/realprojectexperience/a.jpg"
            alt="Team member"
            width={22}
            height={22}
            className="rounded-full border-2 border-white"
          />

          <Image
            src="/images/realprojectexperience/b.jpg"
            alt="Team member"
            width={22}
            height={22}
            className="rounded-full border-2 border-white"
          />

          <Image
            src="/images/realprojectexperience/c.jpg"
            alt="Team member"
            width={22}
            height={22}
            className="rounded-full border-2 border-white"
          />
        </div>
      </div>
    </>
  );
}
