export default function ProgramPreview() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#1F1F25] to-[#0F0F14] sm:h-[260px] md:h-[290px] lg:h-[320px]">
      {/* Ellipse */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 sm:h-32 sm:w-32 lg:-right-12 lg:-top-12 lg:h-40 lg:w-40" />

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

      {/* Browser */}
      <div className="absolute left-4 top-4 w-[72%] rounded-xl bg-white shadow-xl sm:left-6 sm:top-6 sm:w-[75%] lg:left-8 lg:top-8 lg:w-[310px]">
        <div className="flex h-7 items-center gap-2 border-b px-3 sm:h-8 sm:px-4">
          <div className="h-2 w-2 rounded-full bg-red-400" />
          <div className="h-2 w-2 rounded-full bg-yellow-400" />
          <div className="h-2 w-2 rounded-full bg-green-400" />
        </div>

        <div className="space-y-3 p-3 sm:space-y-4 sm:p-4 lg:p-5">
          <div className="h-4 w-24 rounded bg-[#00B6CE] sm:h-5 sm:w-32" />

          <div className="space-y-2">
            <div className="h-2 rounded bg-gray-200 sm:h-3" />
            <div className="h-2 w-3/4 rounded bg-gray-200 sm:h-3" />
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="h-14 rounded bg-[#F5F5F5] sm:h-16 lg:h-20" />
            <div className="h-14 rounded bg-[#F5F5F5] sm:h-16 lg:h-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
