export default function ProgramPreview() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#1F1F25] to-[#0F0F14] sm:h-[260px] md:h-[290px] lg:h-[320px]">
      {/* Dot Grid */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 7 }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute h-[2px] w-[2px] rounded-full bg-white/20"
              style={{
                left: `${20 + col * 60}px`,
                top: `${18 + row * 34}px`,
              }}
            />
          )),
        )}
      </div>
    </div>
  );
}
