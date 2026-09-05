import SectionHeader from "../../ui/SectionHeader";
import ProgramGrid from "../../Shared/program-grid";
import { programs } from "../../../constants/programs";

export default function ProgramOverview() {
  return (
    <section className="bg-[#1F1F25] px-5 py-10 sm:px-8 md:px-10 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 sm:gap-7">
        <SectionHeader
          labelClassName="text-[#FFFFFF]"
          titleClassName="text-[#FFFFFF]"
          label="PROGRAMS"
          title="Choose the craft you want to master."
        />

        <ProgramGrid programs={programs.slice(0, 4)} />
      </div>
    </section>
  );
}
