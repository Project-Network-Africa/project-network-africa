export default function DotGrid() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 14 }).map((_, col) => (
          <div
            key={`${row}-${col}`}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/20"
            style={{
              left: `${6 + col * 7}%`,
              top: `${8 + row * 16}%`,
            }}
          />
        )),
      )}
    </div>
  );
}
