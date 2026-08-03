export default function NotificationChip() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 14 }).map((_, col) => (
          <div
            key={`${row}-${col}`}
            className="absolute h-[2.5px] w-[2.5px] rounded-full bg-white/20"
            style={{
              left: `${24 + col * 60}px`,
              top: `${32 + row * 90}px`,
            }}
          />
        )),
      )}
    </div>
  );
}
