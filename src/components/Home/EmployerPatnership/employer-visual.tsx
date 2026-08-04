export default function EmployerVisual() {
  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1F1F25] to-[#0F0F14] sm:h-[300px] lg:h-[340px] lg:max-w-[520px]">
      {/* Ellipse */}
      <div className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-white/10 sm:h-52 sm:w-52 lg:-left-[78px] lg:top-[158px] lg:h-[260px] lg:w-[260px]" />

      {/* Dot Grid */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 7 }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute h-[2px] w-[2px] rounded-full bg-white/20 lg:h-[2.5px] lg:w-[2.5px]"
              style={{
                left: `${12 + col * 13}%`,
                top: `${10 + row * 12}%`,
              }}
            />
          )),
        )}
      </div>

      {/* Candidate Match */}
      <div className="absolute left-4 top-4 w-[150px] rounded-xl bg-white p-3 shadow-xl sm:left-6 sm:top-6 sm:w-[180px] sm:p-4 lg:left-9 lg:top-9 lg:w-[200px]">
        <p className="mb-3 text-xs font-semibold text-[#1F1F25] sm:text-sm">
          Candidate Match
        </p>

        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-[#00B6CE] sm:h-8 sm:w-8" />

          <span className="text-lg font-bold text-[#1F1F25] sm:text-xl">
            94% Match
          </span>
        </div>
      </div>

      {/* Employer Partners */}
      <div className="absolute bottom-5 right-5 rounded-xl bg-white px-4 py-3 shadow-xl sm:px-5 sm:py-4 lg:bottom-10 lg:right-10 lg:px-6 lg:py-5">
        <p className="text-xl font-bold text-[#1F1F25] sm:text-2xl">180+</p>

        <p className="text-xs font-semibold text-[#5D5D61] sm:text-sm">
          Partners
        </p>
      </div>
    </div>
  );
}
