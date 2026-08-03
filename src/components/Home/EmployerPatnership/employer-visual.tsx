export default function EmployerVisual() {
  return (
    <div className="relative h-[340px] w-[520px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1F1F25] to-[#0F0F14]">
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

      {/* Candidate Match Card */}

      <div className="absolute left-9 top-9 w-[200px] rounded-2xl bg-white p-4 shadow-xl">
        <p className="mb-4 text-sm font-semibold text-[#1F1F25]">
          Candidate Match
        </p>

        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[#00B6CE]" />

          <span className="text-xl font-bold text-[#1F1F25]">94% Match</span>
        </div>
      </div>

      {/* Employer Partners Card */}

      <div className="absolute bottom-10 right-10 rounded-2xl bg-white px-6 py-5 shadow-xl">
        <p className="text-2xl font-bold text-[#1F1F25]">180+</p>

        <p className="text-sm font-semibold text-[#5D5D61]">Partners</p>
      </div>
    </div>
  );
}
