
interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
}

export default function GridBackground({
  children,
  className = "",
  backgroundColor = "#F8F8F8",
}: GridBackgroundProps) {
  return (
    <div
      className={`home-grid relative w-full ${className}`}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
}

