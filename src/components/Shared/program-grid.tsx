import ProgramCard from "./ProgramCard";
import { Program } from "../Programs/program";

interface ProgramGridProps {
  programs: Program[];
}

export default function ProgramGrid({ programs }: ProgramGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {programs.map((program) => (
        <ProgramCard
          key={program.id}
          title={program.title}
          description={program.description}
          image={program.image}
          href={`/programs/${program.id}`}
        />
      ))}
    </div>
  );
}
